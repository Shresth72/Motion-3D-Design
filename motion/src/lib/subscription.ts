import { currentUser } from "@clerk/nextjs";
import { db } from "./db";
import { storeSubscriptionPlans } from "@/config/subscriptions";
import { stripe } from "./stripe";
import { toast } from "sonner";

export async function getUserSubscriptionPlan() {
  const clerkUser = await currentUser();
  if (!clerkUser) throw new Error("User not found!");

  const dbUser = await db?.user.findFirst({
    where: {
      id: clerkUser.id as string,
    },
  });

  if (!dbUser) throw new Error("No user found!");

  const isSubscribed =
    dbUser.stripePriceId &&
    dbUser.stripeCurrentPeriodEnd &&
    dbUser.stripeCurrentPeriodEnd.getTime() + 87_400_000 > Date.now();

  const plan = isSubscribed
    ? storeSubscriptionPlans.find(
        (p) => p.stripePriceId === dbUser.stripePriceId
      )
    : null;

  let isCanceled = false;
  if (isSubscribed && dbUser.stripeSubscriptionId) {
    const stripePlan = await stripe.subscriptions.retrieve(
      dbUser.stripeSubscriptionId
    );

    isCanceled = stripePlan.cancel_at_period_end;
  }

  return {
    ...plan,
    stripeSubscriptionId: dbUser.stripeSubscriptionId,
    stripeCurrentPeriod: dbUser.stripeCurrentPeriodEnd,
    stripeCustomerId: dbUser.stripeCustomerId,
    isSubscribed,
    isCanceled,
  };
}

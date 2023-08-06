import ManageUserSubscriptionButton from "@/components/HomeComps/manage-user-subscription-button";
import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { storeSubscriptionPlans } from "@/config/subscriptions";
// import { getAuthSession } from "@/lib/auth";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { redirect } from "next/navigation";
import Button from "@/components/ui/buttonPurple";

export default async function Billing() {
  const subscriptionPlan = await getUserSubscriptionPlan();
  const user = await currentUser();
  if (!user) return redirect("/");

  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="min-h-[calc(100vh-57px)] py-8 px-4 md:px-16 lg:px-24">
      <Card className="p-6 mb-2">
        <p className="text-lg font-semibold leading-none">
          {subscriptionPlan.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {!subscriptionPlan.isSubscribed
            ? "You are not subscribed to any plan."
            : subscriptionPlan.isCanceled
            ? "Your plan will be canceled on "
            : "Your plan renews on "}
          {subscriptionPlan?.stripeCurrentPeriodEnd
            ? subscriptionPlan.stripeCurrentPeriodEnd.toLocaleDateString()
            : null}
        </p>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {storeSubscriptionPlans.map((plan) => (
          <Card key={plan.id}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-end">
              {user ? (
                <ManageUserSubscriptionButton
                  userId={user.id}
                  email={email || ""}
                  stripePriceId={plan.stripePriceId}
                  stripeCustomerId={subscriptionPlan?.stripeCustomerId}
                  isSubscribed={!!subscriptionPlan.isSubscribed}
                  isCurrentPlan={subscriptionPlan?.name === plan.name}
                />
              ) : (
                <SignInButton />
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

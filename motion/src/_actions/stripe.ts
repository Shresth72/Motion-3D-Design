"use server"

import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";

interface manageStripeSubscriptionActionProps {
  isSubscribed: boolean;
  stripeCustomerId: string | null;
  isCurrentPlan: boolean;
  email: string;
  stripePriceId: string;
  userId: string;
}

export const manageStripeSubscriptionAction = async ({
  isSubscribed,
  isCurrentPlan,
  stripeCustomerId,
  email,
  stripePriceId,
  userId,
}: manageStripeSubscriptionActionProps) => {
  const billingUrl = absoluteUrl("/billing");

  //if subscribed
  if (isSubscribed && isCurrentPlan && stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: billingUrl,
    });

    return {
      url: stripeSession.return_url,
    };
  }

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: billingUrl,
    cancel_url: billingUrl,
    payment_method_types: ["card"],
    mode: "subscription",
    billing_address_collection: "auto",
    customer_email: email,
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    metadata: {
      userId: userId,
    },
  });

  return {
    url: stripeSession.url,
  };
};

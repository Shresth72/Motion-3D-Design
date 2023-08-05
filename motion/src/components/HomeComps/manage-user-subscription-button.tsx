"use client";

import React, { useTransition } from "react";
import Button from "../ui/buttonPurple";
import { manageStripeSubscriptionAction } from "@/_actions/stripe";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ManageUserSubscriptionButtonProps {
  isSubscribed: boolean;
  stripeCustomerId: string | null;
  isCurrentPlan: boolean;
  email: string;
  stripePriceId: string;
  userId: string;
}

export default function ManageUserSubscriptionButton({
  isSubscribed,
  isCurrentPlan,
  stripeCustomerId,
  email,
  stripePriceId,
  userId,
}: ManageUserSubscriptionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const session = await manageStripeSubscriptionAction({
          email,
          userId,
          isSubscribed,
          isCurrentPlan,
          stripeCustomerId,
          stripePriceId,
        });

        if (session) {
            window.location.href = session.url ?? "/dashboard/billing";
        }
      } catch (err) {
        console.log((err as Error).message);
        toast.error("Something went wrong")
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button className="">
        {isPending ? <Loader2 className="mr-2 h-4 animate-spin" /> : ""}
        {isCurrentPlan ? "Manage Subscription" : "Subscribe"}
      </Button>
    </form>
  );
}

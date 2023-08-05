export interface SubscriptionsPlan {
  id: string;
  name: string;
  description: string;
  stripePriceId: string;
  price: number;
}

export const storeSubscriptionPlans: SubscriptionsPlan[] = [
  {
    id: "standard",
    name: "Standard",
    description: "Good quality",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_STANDARD_PRICE_ID!,
    price: 120,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best quality",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!,
    price: 190,
  },
];

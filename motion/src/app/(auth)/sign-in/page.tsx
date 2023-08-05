import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import "../../../styles/SignIn.scss";

import { currentUser } from "@clerk/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shell } from "@/components/shells/shell";
import { OAuthSignIn } from "@/components/auth/oauth-signin";
import { SignInForm } from "@/components/forms/signin-form";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

export default async function SignInPage() {
  const user = await currentUser();

  if (user) {
    const emailUser =
      user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
        ?.emailAddress ?? "";

    const dbUser = await db?.user.findFirst({
      where: {
        email: emailUser as string,
      },
    });

    if (!dbUser) {
      const newUser = await db?.user.create({
        data: {
          id: user.id as string,
          name: user.firstName as string,
          email: emailUser,
        },
      });
    }

    redirect("/");
  }

  return (
    <Shell className="signin-container">
      <Card>
        <Link className="back-link" href="/">
          Back
        </Link>
        <CardHeader>
          <CardTitle className="card-title">Sign in</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OAuthSignIn />
          <div>
            <div>
              <span />
            </div>
            <div>
              <span>Or continue with</span>
            </div>
          </div>
          <SignInForm />
        </CardContent>
        <CardFooter>
          <div>
            <span>Don&apos;t have an account?</span>
            <Link aria-label="Sign up" href="/sign-up" className="">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  );
}

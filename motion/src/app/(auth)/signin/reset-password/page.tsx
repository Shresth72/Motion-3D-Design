import { type Metadata } from "next";


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shell } from "@/components/shells/shell";
import { ResetPasswordForm } from "@/components/forms/reset-password-form";


export const metadata: Metadata = {

    title: "Reset Password",
    description: "Enter your email to reset your password",
  }
  
  export default function ResetPasswordPage() {
    return (
      <Shell className="">
        <Card>
          <CardHeader className="">
            <CardTitle className="l">Reset password</CardTitle>
            <CardDescription>
              Enter your email address and we will send you a verification code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResetPasswordForm />
          </CardContent>
        </Card>
      </Shell>
    )
  }
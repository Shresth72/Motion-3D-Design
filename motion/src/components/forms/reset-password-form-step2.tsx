"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { catchClerkError } from "@/lib/utils";
import { resetPasswordSchema } from "@/lib/validation/auth";
import { Button } from "../ui/buttonSlot";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "../ui/icons";
import { PasswordInput } from "../ui/password-input";

type Inputs = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordStep2Form() {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<Inputs>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      code: "",
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const attemptFirstFactor = await signIn.attemptFirstFactor({
          strategy: "reset_password_email_code",
          code: data.code,
          password: data.password,
        });
        if (attemptFirstFactor.status === "needs_second_factor") {
          //TODO: implement 2FA (requires clerk pro plan)
        } else if (attemptFirstFactor.status === "complete") {
          await setActive({
            session: attemptFirstFactor.createdSessionId,
          });
          router.push(`${window.location.origin}/`);
          toast.success("Password reset successfully.");
        } else {
          console.error(attemptFirstFactor);
        }
      } catch (err) {
        catchClerkError(err);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className=""
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="169420"
                  {...field}
                  onChange={(e) => {
                    e.target.value = e.target.value.trim();
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && <Icons.spinner className="" aria-hidden="true" />}
          Reset password
          <span className="">Reset password</span>
        </Button>
      </form>
    </Form>
  );
}

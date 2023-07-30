"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { catchClerkError } from "@/lib/utils";
import { checkEmailSchema } from "@/lib/validation/auth";
import { Button } from "../ui/buttonSlot";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Icons } from "../ui/icons";
import { Input } from "../ui/input";

type Inputs  = z.infer<typeof checkEmailSchema>

export function ResetPasswordForm() {
    const router = useRouter();
    const {isLoaded, signIn} = useSignIn()
    const [isPending, startTransition] = React.useTransition();

    //react-hook-form
    const form = useForm<Inputs>({
        resolver: zodResolver(checkEmailSchema),
        defaultValues: {
            email: "",
        }
    })

    function onSubmit(data: Inputs) {
        if (!isLoaded) return 

        startTransition(async () => {
            try {
                const firstFactor = await signIn.create({
                    strategy: "reset_password_email_code",
                    identifier: data.email,
                })
                if (firstFactor.status === "needs_first_factor") {
                    router.push("/sign-in/reset-password/step2")
                    toast.message("Check your email", {
                        description: "We sent you a 6-digit verification code."
                    })
                }
            } catch (err) {
                catchClerkError(err);
            }
            
        })
    }

    return (
        <Form {...form}>
            <form className=""
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
            >
                <FormField
                control = {form.control}
                name = "email"
                render = {({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="megadeth198@gmail.com" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button disabled={isPending}>
                    {isPending && (
                        <Icons.spinner className="" aria-hidden="true" />
                    )}
                    Continue 
                    <span className="">
                        Continue to reset password verification
                    </span>
                </Button>
            </form>
        </Form>
    )
}
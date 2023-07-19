"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

import { useMounted } from "@/hooks/use-mounted";
import { Button } from "../ui/buttonSlot";
import { Icons } from "../ui/icons";
import { Skeleton } from "../ui/skeleton";

export function LogOutButtons() {
  const router = useRouter();
  const mounted = useMounted();
  const [isPending, startTransition] = React.useTransition();

  return (
    <div>
      {mounted ? (
        <SignOutButton
          signOutCallback={() =>
            startTransition(() => {
              router.push(`${window.location.origin}/?redirect=false`);
            })
          }
        >
          <Button aria-label="Log out" className="w-full" disabled={isPending}>
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log out
          </Button>
        </SignOutButton>
      ) : (
        <Skeleton className="">Log out</Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Go back
      </Button>
    </div>
  );
}

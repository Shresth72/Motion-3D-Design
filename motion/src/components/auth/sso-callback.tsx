"use client";

import * as React from "react";
import { useClerk } from "@clerk/nextjs";

import { Icons } from "../ui/icons";
import { SSOCallbackPageProps } from "../../app/(auth)/sso-callback/page";

export default function SSOCallback({ searchParams }: SSOCallbackPageProps) {
  const { handleRedirectCallback } = useClerk();

  React.useEffect(() => {
    void handleRedirectCallback(searchParams);
  }, [searchParams, handleRedirectCallback]);

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-describedby="loading-description"
      className=""
    >
      <Icons.spinner aria-hidden="true" />
    </div>
  );
}

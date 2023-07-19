import { type HandleOAuthCallbackParams } from "@clerk/types";

import { Shell } from "@/components/shells/shell";
import SSOCallback from "@/components/auth/sso-callback";

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Shell>
      <SSOCallback searchParams={searchParams} />
    </Shell>
  );
}

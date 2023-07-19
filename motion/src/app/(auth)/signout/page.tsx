import { LogOutButtons } from "@/components/auth/logout-buttons";
import { Header } from "@/components/ui/header";
import { Shell } from "@/components/shells/shell";

export default function SignOutPage() {
  return (
    <Shell>
      <Header
        title="Sign out"
        description="Are you sure you want to sign out?"
        size="sm"
        className=""
      />
      <LogOutButtons />
    </Shell>
  );
}

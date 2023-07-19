import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-layout">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/images/auth-layout.png"
          alt="numbers"
          fill
          className="auth-image"
          priority
        />
        {/* <div className="auth-links">
          <Link href="/" className="auth-link-first">
            <Icons.logo className="icons-logo" aria-hidden="true" />
            <span>Cicada</span>
          </Link>
        </div> */}
      </AspectRatio>
      <main className="auth-container">{children}</main>
    </div>
  );
}

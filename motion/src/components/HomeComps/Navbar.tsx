import { FC } from "react";
import "../../styles/Navbar.scss";
import Link from "next/link";
import type { User } from "@clerk/nextjs/dist/types/server";
import { Icons } from "../ui/icons";
import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";

interface NavbarProps {
  user: User | null;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="nav-wrapper">
      <div className="nav-logo">
        <Link href="/" className="logo">
          MotionWaves
        </Link>
        <div className="text">unleash - creative surges</div>
      </div>

      <div className="nav-links">
      <div className="contact">Get in touch</div>
      <div className="signin">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut></div>
      </div>
    </div>
  );
};

export default Navbar;

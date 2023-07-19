import { FC } from "react";
import "../../styles/Navbar.scss";
import Link from "next/link";
import type { User } from "@clerk/nextjs/dist/types/server";
import { Icons } from "../ui/icons";

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
        <div className="logo">Cicada.</div>
        <div className="text">the - genomics products</div>
      </div>
      <div className="search-bar">
        <div>Search</div>
      </div>
      <div className="nav-links">
        <div className="contact">Get in touch</div>
        {/* <div className="hamburger">o</div> */}
        {user ? (
          <Link href="/signout">
            <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
            Log out
          </Link>
        ) : (
          <Link href="/signin">
            <div>
              Sign In
              
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


import { FC } from "react";
import "../styles/Navbar.scss";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
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
        <div className="hamburger">o</div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { BiCopyright as CopyrightIcon } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Legal">
        <CopyrightIcon />
        FoxiDev. All rights reserved.
      </div>
      <nav className="Footer-Nav contain">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
};

export default Footer;

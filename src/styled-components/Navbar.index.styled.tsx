import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo href="/">
          Sew<span>Happy</span>
        </Logo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "grey" }}>
            About
          </NavLink>
          <NavLink to="/" activeStyle={{ color: "grey" }}>
            Fabric Calculator
          </NavLink>
          <NavLink to="/" activeStyle={{ color: "grey" }}>
            Skirt Calculator
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

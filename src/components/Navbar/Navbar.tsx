import React, { useState } from "react";
import { Nav, Logo, NavLink, NavMenu } from "./Navbar.styled";
import Burger from "../Burger/Burger";
import { Menu } from "../Menu/Menu";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo href="/">
        Sew<span>Happy</span>
      </Logo>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      <NavMenu>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/FabricCalculator">Fabric Calculator</NavLink>
        <NavLink to="/SkirtCalculator">Skirt Calculator</NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

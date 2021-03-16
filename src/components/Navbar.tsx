import React from "react";
import {
  Nav,
  Logo,
  NavLink,
  Bars,
  NavMenu,
} from "./styled-components/Navbar.styled";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <Nav>
      <Logo href="/">
        Sew<span>Happy</span>
      </Logo>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
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

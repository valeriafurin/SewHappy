import React, { FunctionComponent } from "react";
import { StyledMenu } from "./Menu.styled";

type MenuProps = {
  open: boolean;
};

export const Menu: FunctionComponent<MenuProps> = ({ open }) => {
  const tabIndex = open ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <a href="/About" tabIndex={tabIndex}>
        <span aria-hidden="true" aria-label="About"></span>
        About
      </a>
      <a href="/FabricCalculator" tabIndex={tabIndex}>
        <span aria-hidden="true" aria-label="Fabric Calculator"></span>
        Fabric Calculator
      </a>
      <a href="/SkirtCalculator" tabIndex={tabIndex}>
        <span aria-hidden="true" aria-label="Skirt Calculator"></span>
        Skirt Calculator
      </a>
      <a href="/Blog" tabIndex={tabIndex}>
        <span aria-hidden="true" aria-label="Blog"></span>
        Blog
      </a>
    </StyledMenu>
  );
};

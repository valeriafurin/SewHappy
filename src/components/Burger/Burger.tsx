import React from "react";
import { StyledBurger } from "./Burger.styled";

type BurgerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Burger: React.FunctionComponent<BurgerProps> = ({ open, setOpen }) => {
  const clickHandler = () => setOpen(!open);
  return (
    <StyledBurger
      aria-label="Toggle menu"
      onClick={clickHandler}
      aria-expanded={open}
      open={open}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

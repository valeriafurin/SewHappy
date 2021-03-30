import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: papayawhip;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
  justify-content: flex-start;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: grey;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;

  span {
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const NavLink = styled(Link)`
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0;
  width: 100vw;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

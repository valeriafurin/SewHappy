import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: none;
  color: grey;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: papayawhip;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: center;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 576px) {
      width: 100%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: grey;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: black;
      }
    }
  }
`;

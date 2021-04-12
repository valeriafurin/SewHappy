import styled, { createGlobalStyle } from "styled-components";

export const SewLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
`;

export const Wrapper = styled.section`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 4rem;
`;

export const DateWrapper = styled.p`
  font-size: 1.1rem;
  text-align: left;
  padding-top: 10px;
`;

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body{
    font-family: "Shippori Mincho B1", serif;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}
img {
    max-width: 100%;
}
`;

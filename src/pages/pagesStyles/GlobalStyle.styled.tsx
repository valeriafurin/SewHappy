import { createGlobalStyle } from "styled-components";

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
    font-size: 1.6rem;
    background: #F9F9F9;
    color: #333;

}
img {
    max-width: 100%;
}
`;

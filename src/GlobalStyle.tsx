import styled, { createGlobalStyle } from "styled-components";

export const SewLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100vh;
  align-items: center;
  justify-content: center;
`;

// const sewBox = styled.div`
//    {
//     padding: 0.5rem;
//     margin: 10px;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     transition: 0.3s;
//     border-radius: 5px;
//   }
// `;

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
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

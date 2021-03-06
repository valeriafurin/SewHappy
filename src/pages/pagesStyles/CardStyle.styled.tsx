import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  display: block;
`;

export const CardHeading = styled.h1`
  font-size: 80%;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  font-size: 75%;
  padding-right: 32px;
  padding-left: 32px;
`;

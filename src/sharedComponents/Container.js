import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 75%;
  margin: auto;
  padding: 1rem auto;
  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

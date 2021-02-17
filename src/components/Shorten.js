import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Container from "../sharedComponents/Container";

const StyledContainer = styled.div`
    position: absolute:
    top: -4rem;
`;

const StyledBox = styled(Box)`
  padding: 1rem;
`;

const Shorten = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledBox shorten={true}>
          <h1>Shorten Component</h1>
        </StyledBox>
      </Container>
    </StyledContainer>
  );
};

export default Shorten;

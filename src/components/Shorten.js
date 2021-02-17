import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import Container from "../sharedComponents/Container";

const StyledContainer = styled.div``;

const StyledBox = styled(Box)`
  padding: 2rem;
  position: absolute;
  transform: translateY(-50%);
  width: 75%;
  @media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    width: 90%;
    background-image: url("img/mobile-shorten.svg");
  }
`;

const StyledFormFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const InputComponent = styled.div`
  flex-grow: 1;
  padding: 0.5rem;
  @media (max-width: 576px) {
    padding: 0;
  }
`;

const StyledButton = styled(Button)`
  margin: 0.5rem;
  margin-left: 1rem;
  @media (max-width: 576px) {
    flex-grow: 1;
    margin: 1rem;
    margin-bottom: 0;
    margin-top: 1rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

const Shorten = () => {
  return (
    <StyledContainer>
      <Container>
        <StyledBox shorten={true}>
          <form>
            <StyledFormFlex>
              <InputComponent>
                <Input />
              </InputComponent>
              <StyledButton light={true}>Shorten It!</StyledButton>
            </StyledFormFlex>
          </form>
        </StyledBox>
      </Container>
    </StyledContainer>
  );
};

export default Shorten;

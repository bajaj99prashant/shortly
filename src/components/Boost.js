import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Button from "../sharedComponents/Button";
import Heading from "../sharedComponents/Heading";

const StyledBox = styled(Box)`
  text-align: center;
  padding: 3rem 1rem;
  @media (max-width: 576px) {
    background-image: url("img/mobile-boost.svg");
  }
`;

const Boost = () => {
  return (
    <StyledBox boost={true}>
      <Heading>Boost your links today</Heading>
      <Button large={true} light={true}>
        Get Started
      </Button>
    </StyledBox>
  );
};

export default Boost;

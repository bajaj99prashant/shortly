import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Container from "../sharedComponents/Container";
import Heading from "../sharedComponents/Heading";
import Paragraph from "../sharedComponents/Paragraph";
import Shorten from "./Shorten";

const StyledBodyContent = styled.div`
  padding-top: 25vh;
  text-align: center;
`;

const StyledCardFlex = styled.div``;

const StyledParagraph = styled(Paragraph)`
  padding-top: 1rem;
  max-width: 500px;
  margin: auto;
`;

const Body = () => {
  return (
    <Box body={true}>
      <Shorten />
      <Container>
        <StyledBodyContent>
          <Heading light={true}>Advanced Statistics</Heading>
          <StyledParagraph body={true}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </StyledParagraph>
          <StyledCardFlex></StyledCardFlex>
        </StyledBodyContent>
      </Container>
    </Box>
  );
};

export default Body;

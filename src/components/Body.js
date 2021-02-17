import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Card from "../sharedComponents/Card";
import Container from "../sharedComponents/Container";
import Heading from "../sharedComponents/Heading";
import Paragraph from "../sharedComponents/Paragraph";
import Shorten from "./Shorten";

const StyledBodyContent = styled.div`
  padding-top: 20vh;
  text-align: center;
`;

const StyledCardFlex = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1rem;
`;

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
          <StyledCardFlex>
            <Card link="img/brand.svg" name="brand">
              <Heading light={true} verySmall={true}>
                Brand Recognition
              </Heading>
              <Paragraph>
                Boost your brand recognition with each click. Generic links dont
                mean a thing. Branded links help instil confidence in your
                content.
              </Paragraph>
            </Card>
            <Card link="img/records.svg" name="records" second={true}>
              <Heading light={true} verySmall={true}>
                Detailed Records
              </Heading>
              <Paragraph>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </Paragraph>
            </Card>
            <Card
              link="img/customizable.svg"
              name="records"
              second={true}
              third={true}
            >
              <Heading light={true} verySmall={true}>
                Fully Customizable
              </Heading>
              <Paragraph>
                Improved brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </Paragraph>
            </Card>
          </StyledCardFlex>
        </StyledBodyContent>
      </Container>
    </Box>
  );
};

export default Body;

import React from "react";
import styled from "styled-components";
import Box from "../sharedComponents/Box";
import Container from "../sharedComponents/Container";
import IconCollection from "../sharedComponents/IconCollection";
import List from "../sharedComponents/List";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  height: 40px;
  margin-top: 1.5rem;
`;

const Footer = () => {
  return (
    <Box footer={true}>
      <Container>
        <StyledFlex>
          <StyledImg src="img/logo1.svg" alt="logo" />
          <List
            listHeading="Features"
            items={["Link Shortening", "Branded Links", "Analytics"]}
          />
          <List
            listHeading="Resources"
            items={["Blog", "Developers", "Support"]}
          />
          <List
            listHeading="Company"
            items={["About", "Our Team", "Careers", "Contact"]}
          />
          <IconCollection />
        </StyledFlex>
      </Container>
    </Box>
  );
};

export default Footer;

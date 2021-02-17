import React from "react";
import Box from "../sharedComponents/Box";
import styled from "styled-components";
import Navbar from "./Navbar";
import Heading from "../sharedComponents/Heading";
import Paragraph from "../sharedComponents/Paragraph";
import Button from "../sharedComponents/Button";

const MainSection = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const LeftHeroSection = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 576px) {
    width: 100%;
    height: 50%;
  }
`;

const MainContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 25%;
  @media (max-width: 992px) {
    padding-left: 20%;
  }
  @media (max-width: 576px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const RightHeroSection = styled.div`
  width: 50%;
  background-image: url("img/hero-image.svg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
    height: 50%;
  }
`;

const StyledButton = styled(Button)`
  @media (max-width: 576px) {
    padding: 0.5rem 2.5rem;
  }
`;

const Hero = () => {
  return (
    <Box hero={true}>
      <Navbar />
      <MainSection>
        <LeftHeroSection>
          <MainContent>
            <Heading light={true} large={true}>
              More than just
            </Heading>
            <Heading light={true} large={true}>
              shorter links
            </Heading>
            <Paragraph large={true}>
              Build your brands recognition and get detailed insights on how
              your links are performing.
            </Paragraph>
            <StyledButton light={true} large={true} round={true}>
              Get Started
            </StyledButton>
          </MainContent>
        </LeftHeroSection>
        <RightHeroSection />
      </MainSection>
    </Box>
  );
};

export default Hero;

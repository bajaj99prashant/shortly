import React from "react";
import styled from "styled-components";
import Container from "../sharedComponents/Container";
import Link from "../sharedComponents/Link";
import Button from "../sharedComponents/Button";

const StyledNavbar = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
`;

const StyledLogo = styled.img`
  width: 100px;
  margin-right: 1rem;
`;

const StyledLinkSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkSection = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Container>
        <InnerContainer>
          <StyledLogo src="img/logo.svg" alt="logo" />
          <StyledLinkSection>
            <LinkSection>
              <Link light={true}>Features</Link>
              <Link light={true}>Pricing</Link>
              <Link light={true}>Resources</Link>
            </LinkSection>
            <LinkSection>
              <Link light={true}>Login</Link>
              <Button light={true} round={true}>
                Sign Up
              </Button>
            </LinkSection>
          </StyledLinkSection>
        </InnerContainer>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;

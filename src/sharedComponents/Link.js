import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0.2rem 1rem;
  font-family: ${(props) => props.theme.fonts[2]};
  font-size: ${(props) => props.theme.fontSizes.link};
  color: ${(props) =>
    props.listHeading === true
      ? "#fff"
      : props.theme.colors.neutral.grayishViolet};
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.light === true
        ? props.theme.colors.neutral.veryDarkViolet
        : props.listHeading === true
        ? "#fff"
        : props.theme.colors.primary.cyan};
  }
`;

const Link = (props) => {
  return <StyledLink {...props}>{props.children}</StyledLink>;
};

export default Link;

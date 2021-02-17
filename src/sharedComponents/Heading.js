import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts[2]};
  ${(props) =>
    props.large === true
      ? `font-size: ${props.theme.fontSizes.largeHeading}; line-height: 4.2rem; @media(max-width: 992px){
          font-size: 3rem;
          line-height: 3.2rem
      }
      @media (max-width: 576px) {
          font-size: 2rem;
          line-height: 2.4rem;
      }
      `
      : props.small === true
      ? `font-size: ${props.theme.fontSizes.smallHeading};`
      : props.verySmall === true
      ? "font-size: 1.5rem;"
      : `font-size: ${props.theme.fontSizes.heading};`}
  ${(props) =>
    props.light === true
      ? `color: ${props.theme.colors.neutral.veryDarkViolet};`
      : `color: #fff;`};
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.children}</StyledHeading>;
};

export default Heading;

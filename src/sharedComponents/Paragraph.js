import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  font-family: ${(props) => props.theme.fonts[1]};
  ${(props) =>
    props.large === true
      ? `font-size: 1.2rem; margin: 1rem auto; @media(max-width: 576px){font-size: ${props.theme.fontSizes.paragraph};}`
      : `font-size: ${props.theme.fontSizes.paragraph};`}
  color: ${(props) => props.theme.colors.neutral.grayishViolet};
  ${(props) =>
    props.error === true
      ? `font-size: ${props.theme.fontSizes.link}; color: ${(props) =>
          props.theme.colors.secondary.red};`
      : null}
  ${(props) =>
    props.body === true
      ? `font-size: ${props.theme.fontSizes.largeButton}; font-family: ${(
          props
        ) => props.theme.fonts[2]};`
      : null}
`;

const Paragraph = (props) => {
  return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
};

export default Paragraph;

import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  font-size: ${(props) =>
    props.large === true
      ? props.theme.fontSizes.largeButton
      : props.theme.fontSizes.paragraph};
  font-family: ${(props) =>
    props.large === true ? props.theme.fonts[2] : props.theme.fonts[1]};
  background: ${(props) =>
    props.light === true
      ? props.theme.colors.primary.cyan
      : props.theme.colors.primary.darkViolet};
  border-radius: ${({ round }) => (round === true ? "1.25rem" : "0.75rem")};
  border: none;
  cursor: pointer;
  ${(props) =>
    props.large === true
      ? `margin-top: 1rem; border-radius: 25px; @media(max-width: 576px){font-size: ${props.theme.fontSizes.paragraph}; margin-top: 0.2rem}`
      : null}
  &:hover {
    ${(props) =>
      props.light === true
        ? `background: ${props.theme.colors.neutral.veryDarkBlue};`
        : null}
  }
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.8rem 1.5rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  color: "#000";
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.neutral.grayishViolet};
  }
  ${(props) =>
    props.error === true
      ? `border: 2px solid ${props.theme.colors.secondary.red}; &::placeholder {
                color: ${props.theme.colors.secondary.red};
            }`
      : null}
`;

const Input = (props) => {
  return (
    <StyledInput {...props} type="text" placeholder="Shorten a link here..." />
  );
};

export default Input;

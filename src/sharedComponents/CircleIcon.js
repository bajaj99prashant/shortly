import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  background-color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
  color: ${(props) => props.theme.colors.primary.cyan};
  margin: 0.2rem;
  padding: 1rem;
  border-radius: 50%;
`;

const CircleIcon = (props) => {
  return <StyledImage {...props} src={props.link} alt={props.name} />;
};

export default CircleIcon;

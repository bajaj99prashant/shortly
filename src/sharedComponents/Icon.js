import React from "react";
import styled from "styled-components";

const StyledIcon = styled.img`
  color: #fff;
  height: 25px;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary.cyan};
  }
`;

const Icon = (props) => {
  return <StyledIcon src={props.link} alt={props.name} />;
};

export default Icon;

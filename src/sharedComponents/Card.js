import React from "react";
import styled from "styled-components";
import CircleIcon from "./CircleIcon";

const StyledCard = styled.div`
  text-align: left;
  position: relative;
  display: inline-block;
  background: #fff;
  padding: 3rem 1rem 1rem 1rem;
  border-radius: 4px;
  width: 29%;
  height: 400px;
  height: auto;
  margin: 1rem;
  z-index: 2;
  top: 1rem;
  ${(props) =>
    props.second === true
      ? `
      top: 4rem;
    &::before {
      content: "";
      display: block;
      border: 4px solid ${props.theme.colors.primary.cyan};
      width: 50px;
      position: absolute;
      transform: translate3d(-100%, 0, -1px);
      z-index: -10;
    }
  `
      : null}
  ${(props) => (props.third === true ? `top: 7rem;` : null)}

  @media(max-width: 768px) {
    display: block;
    width: 80%;
    margin: auto;
  }

  @media (max-width: 576px) {
    display: block;
    width: 90%;
    margin: auto;
  }
`;

const StyledIcon = styled(CircleIcon)`
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateY(-50%);
`;

const Card = (props) => {
  return (
    <StyledCard {...props}>
      <StyledIcon link={props.link} name={props.name} />
      {props.children}
    </StyledCard>
  );
};

export default Card;

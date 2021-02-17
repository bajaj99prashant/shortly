import React from "react";
import styled from "styled-components";
import CircleIcon from "./CircleIcon";

const StyledCard = styled.div`
  text-align: left;
  position: relative;
  background: #fff;
  padding: 3rem 1rem 1rem 1rem;
  border-radius: 4px;
  max-width: 300px;
  margin: 1rem;
`;

const StyledIcon = styled(CircleIcon)`
  position: absolute;
  top: 0;
  left: 1rem;
  transform: translateY(-50%);
`;

const Card = (props) => {
  return (
    <StyledCard>
      <StyledIcon link={props.link} name={props.name} />
      {props.children}
    </StyledCard>
  );
};

export default Card;

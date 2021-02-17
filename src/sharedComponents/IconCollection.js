import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledIconCollection = styled.div`
  margin-top: 1.5rem;
`;

const IconCollection = () => {
  return (
    <StyledIconCollection>
      <Icon link="img/facebook.svg" name="facebook" />
      <Icon link="img/twitter.svg" name="twitter" />
      <Icon link="img/pinterest.svg" name="pinterest" />
      <Icon link="img/instagram.svg" name="instagram" />
    </StyledIconCollection>
  );
};

export default IconCollection;

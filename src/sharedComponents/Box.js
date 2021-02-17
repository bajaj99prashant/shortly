import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.veryDarkBlue};
  color: #fff;
  ${(props) =>
    props.hero === true
      ? `min-height: 110vh; background: #fff; color: #000;
        @media(max-width: 576px){
          min-height: 115vh;
        }
      `
      : null}
  ${(props) =>
    props.shorten === true
      ? `background-image: url('img/desktop-shorten.svg'); background-size: cover; background-color: ${props.theme.colors.primary.darkViolet}; border-radius: 8px;`
      : props.boost === true
      ? `background-image: url('img/desktop-boost.svg'); background-size: cover; background-color: ${props.theme.colors.primary.darkViolet};`
      : props.body === true
      ? `background: #eaeaea; color: ${props.theme.colors.primary.darkViolet}; min-height: 70vh;`
      : null}
  ${(props) =>
    props.footer === true
      ? `background-color: ${props.theme.colors.neutral.veryDarkViolet};`
      : null}
`;

const Box = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default Box;

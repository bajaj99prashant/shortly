import React from "react";
import styled from "styled-components";
import Link from "./Link";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 1rem;
`;

const StyledListItem = styled.li`
  margin: 0.5rem 1rem;
  ${(props) => (props.heading === true ? "margin-bottom: 1rem;" : null)}
`;

const List = (props) => {
  return (
    <StyledList>
      <StyledListItem heading={true}>
        <Link listHeading={true}>{props.listHeading}</Link>
      </StyledListItem>
      {props.items.map((item, index) => (
        <StyledListItem key={index}>
          <Link>{item}</Link>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;

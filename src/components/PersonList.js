import React from "react";
import Link from "react-router-dom";
import styled from "styled-components";

import PersonButton from "./PersonButton";

const StyledDiv = styled.div`
  border-radius: 6px;
  display: flex;
  justify-content: center;`



function PersonList({ people, onCurrentP }) {
  const personButtons = people.map((person) => {
    return (
      <PersonButton
        key={person.id}
        person={person}
        onCurrentP={onCurrentP}
      />
    );
  });

  return <StyledDiv>{personButtons}</StyledDiv>;
}

export default PersonList;

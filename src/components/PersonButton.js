import React from "react";

import styled from 'styled-components'

const StyledButton = styled.button`
  font: helvetica;
  background-color: darkgray;
  color: whitesmoke;
  margin: 3px;
  border-radius: 3px;`

function PersonButton({ person, onCurrentP }) {
  function HelpDaClick() {
    onCurrentP(person.id);
  
  }

  return <StyledButton onClick={HelpDaClick}>{person.name}</StyledButton>;
}

export default PersonButton;

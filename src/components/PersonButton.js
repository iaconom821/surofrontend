import React from "react";

function PersonButton({ person, onCurrentP, onClickPerson }) {
  function HelpDaClick() {
    onCurrentP(person.id);
    onClickPerson();
  }

  return <button onClick={HelpDaClick}>{person.name}</button>;
}

export default PersonButton;

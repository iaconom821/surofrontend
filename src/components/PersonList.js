import React from "react";
import Link from "react-router-dom";

import PersonButton from "./PersonButton";

function PersonList({ people, onCurrentP, onClickPerson }) {
  const personButtons = people.map((person) => {
    return (
      <PersonButton
        onClickPerson={onClickPerson}
        key={person.id}
        person={person}
        onCurrentP={onCurrentP}
      />
    );
  });

  return <div>{personButtons}</div>;
}

export default PersonList;

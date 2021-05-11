import React from "react";
import Link from "react-router-dom";

import PersonButton from "./PersonButton";

function PersonList({ people, onCurrentP }) {
  const personButtons = people.map((person) => {
    return (
      <PersonButton key={person.id} person={person} onCurrentP={onCurrentP} />
    );
  });

  return <div>{personButtons}</div>;
}

export default PersonList;

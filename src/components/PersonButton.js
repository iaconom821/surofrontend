import React from "react";

function PersonButton({ person, onCurrentP }) {
  return <button onClick={() => onCurrentP(person.id)}>{person.name}</button>;
}

export default PersonButton;

import ClockComponent from "./Clock";
import AddRoundForm from "./AddRoundForm";
import RoundsPurchased from "./RoundsPurchased";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledClock = styled(ClockComponent)`
  font-size: 100px;
`;
function PersonCard({
  person,
  people,
  onForceReload,
  roundsArr,
  onDeleteRound,
  personRounds,
}) {
  if (!person) {
    return <h2>Please Select User</h2>;
  }
  if (!people) {
    return <h2>loading...</h2>;
  }
  const personObj = people.find((p) => p.id === person);
  const filteredRounds = roundsArr.filter(
    (round) => round.person_id === personObj.id
  );

  return (
    <div>
      <ClockComponent />
      <h1>{personObj.name}</h1>
      <h2>Total Spending so far is ${personObj.total}</h2>
      {personObj.balance >= 0 ? (
        <h2>You are owed ${personObj.balance.toFixed(2)}</h2>
      ) : (
        <h2>
          {" "}
          Hello, YOU OWE ${Math.abs(personObj.balance.toFixed(2))}... SquareUp!{" "}
        </h2>
      )}
      <AddRoundForm
        id={personObj.id}
        onForceReload={onForceReload}
        people={people}
      />
      <RoundsPurchased
        personRounds={personRounds}
        people={people}
        onDeleteRound={onDeleteRound}
        rounds={filteredRounds}
        personObj={personObj}
      />
    </div>
  );
}

export default PersonCard;

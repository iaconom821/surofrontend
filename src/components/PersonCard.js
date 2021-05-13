import ClockComponent from "./Clock";
import AddRoundForm from "./AddRoundForm";
import RoundsPurchased from "./RoundsPurchased";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledClock = styled(ClockComponent)`
  font-size: 100px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-grow: inherit;
  justify-content: center;
  align-items: center;
  `

const StyledPersonDiv = styled.div`
  flex-grow: inherit;`
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

  

  return (
    <StyledDiv>
      <StyledPersonDiv>
      <ClockComponent />
      <h1>{person.name}</h1>
      <h2>Total Spending so far is ${person.total}</h2>
      {person.balance >= 0 ? (
        <h2>You are owed ${person.balance.toFixed(2)}</h2>
      ) : (
        <h2>
          {" "}
          Hello, YOU OWE ${Math.abs(person.balance.toFixed(2))}... SquareUp!{" "}
        </h2>
      )}
        <RoundsPurchased
          personRounds={personRounds}
          people={people}
          onDeleteRound={onDeleteRound}
          rounds={roundsArr}
          person={person}
        />
      </StyledPersonDiv>
      <div>
        <AddRoundForm
          person={person}
          onForceReload={onForceReload}
          people={people}
        />
      </div>
    </StyledDiv>
  );
}

export default PersonCard;

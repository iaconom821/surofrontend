import RoundEditForm from "./RoundEditForm";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 2px;
`;

const StyledRoundsContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;`

const StyledRoundCard = styled.div`
  width: 200px;
  padding: 5px;`

function RoundsPurchased({
  rounds,
  onDeleteRound,
  personRounds,
  people,
  person,
  onRoundEdit,
}) {
  const filteredRounds = rounds.filter(
    (round) => round.person_id === person.id
  );

  const roundsPurchased = filteredRounds.map((round) => {
    const almostNamesOfDrinkers = personRounds.filter(
      (personRound) => personRound.round_id === round.id
    );
    const userAndDrinkers = people
      .filter((pers) =>
        almostNamesOfDrinkers.find((name) => name.person_id === pers.id)
      )

      .map((pers) => pers.name);
    const namesOfDrinkers = userAndDrinkers
      .filter((drinker) => person.name !== drinker)
      .join(", ");

    return (
      <StyledRoundCard key={round.id}>
        <h5>You bought the round for {namesOfDrinkers}</h5>
        <h6>Round Price ${round.price}</h6>

        <StyledButton onClick={onDeleteRound} value={round.id}>
          Delete
        </StyledButton>
        <RoundEditForm id={round.id} onRoundEdit={onRoundEdit} />
      </StyledRoundCard>
    );
  });

  return <StyledRoundsContainer>{roundsPurchased}</StyledRoundsContainer>;
}
export default RoundsPurchased;

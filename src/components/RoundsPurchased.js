import RoundEditForm from './RoundEditForm'

function RoundsPurchased({
  rounds,
  onDeleteRound,
  personRounds,
  people,
  person,
}) {

  const filteredRounds = rounds.filter(
    (round) => round.person_id === person.id
  );

  const roundsButton = filteredRounds.map((round) => {
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
      .join(" , ");
    

    return (
      <div key={round.id}>
        <h2>{namesOfDrinkers}</h2>
        <h3>${round.price}</h3>

        <button onClick={onDeleteRound} value={round.id}>
          Delete
        </button>
        {<RoundEditForm id = {round.id}/>}
      </div>
    );
  });

  return <div>
        {roundsButton}
        </div>;
}
export default RoundsPurchased;

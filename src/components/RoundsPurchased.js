import { useState } from "react";

function RoundsPurchased({
  rounds,
  onDeleteRound,

  personRounds,
  people,
  personObj,
}) {
  const [newPrice, setNewPrice] = useState(0);
  const roundsButton = rounds.map((round) => {
    const almostNamesOfDrinkers = personRounds.filter(
      (personRound) => personRound.round_id === round.id
    );
    const userAndDrinkers = people
      .filter((person) =>
        almostNamesOfDrinkers.find((name) => name.person_id === person.id)
      )

      .map((person) => person.name);
    const namesOfDrinkers = userAndDrinkers
      .filter((drinker) => personObj.name !== drinker)
      .join(" , ");
    // const personRoundsArr =
    console.log(namesOfDrinkers);
    function onUpdateRound(e) {
      fetch(`http://localhost:9393/rounds/${round.id}`, {
        method: "UPDATE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price: newPrice }),
      });
      setNewPrice(0);
    }

    return (
      <div key={round.id}>
        <h2>{namesOfDrinkers}</h2>
        <h3>${round.price}</h3>

        <button onClick={onDeleteRound} value={round.id}>
          Delete
        </button>
        <form onSubmit={onUpdateRound}>
          <input
            step=".01"
            type="number"
            value={newPrice}
            onChange={setNewPrice(newPrice)}
          />
          <input value="Update Round Price" />
        </form>
      </div>
    );
  });

  return <div>{roundsButton}</div>;
}
export default RoundsPurchased;

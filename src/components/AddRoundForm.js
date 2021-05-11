// Form to add a round of drinks
// needs dropdown of people who are drinking and a way to select each person
// name of drink
// price of drinks
// multiply by people in the round
// option to expand form and add specific drinks for people
import Select from "react-select";
import { useState } from "react";

function AddRoundForm({ people, onForceReload, id }) {
  const [roundPrice, setRoundPrice] = useState("");
  const [peopleDrinking, setPeopleDrinking] = useState([]);
  const filterArr = people.filter((person) => person.id !== id);
  const selectPeople = filterArr.map((person) => {
    return { value: `${person.id}`, label: `${person.name}` };
  });
  function handleSelections(e) {
    setPeopleDrinking(e.map((val) => val.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9393/rounds", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        price: roundPrice,
        person_id: id,
        people_drinking: peopleDrinking,
      }),
    }).then(onForceReload());
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Price for Round"
        value={roundPrice}
        step=".01"
        onChange={(e) => setRoundPrice(e.target.value)}
      />
      <Select isMulti options={selectPeople} onChange={handleSelections} />
      <input type="submit" value="Buy The Round" />
    </form>
  );
}

export default AddRoundForm;

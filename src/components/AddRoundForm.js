// Form to add a round of drinks
// needs dropdown of people who are drinking and a way to select each person
// name of drink
// price of drinks
// multiply by people in the round
// option to expand form and add specific drinks for people
import Select from "react-select";
import { useState } from "react";

function AddRoundForm({ people, onForceReload, person }) {
  const [roundPrice, setRoundPrice] = useState("");
  const [peopleDrinking, setPeopleDrinking] = useState([]);

  const filterArr = people.filter((pers) => pers.id !== person.id);
  const selectPeople = filterArr.map((pers) => {
    return { value: `${pers.id}`, label: `${pers.name}` };
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
        person_id: person.id,
        people_drinking: peopleDrinking,
      }),
    }).then((res) => res.json())
    .then(data => {
        onForceReload(data)}
        );
    setRoundPrice("");
    setPeopleDrinking([]);
  }
  return ( <>
    <h2>Add A Round Of Drinks</h2>
    <br/>
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Price for Round"
        value={roundPrice}
        step=".01"
        onChange={(e) => setRoundPrice(e.target.value)}
        required
      />
      <Select isMulti options={selectPeople} onChange={handleSelections} />
      <input type="submit" value="Buy The Round" />
    </form>
    </>
  );
}

export default AddRoundForm;

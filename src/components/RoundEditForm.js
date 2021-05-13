import { useState } from "react";

function RoundEditForm({ id, onRoundEdit }) {
  const [newPrice, setNewPrice] = useState(0);
  console.log(id);
  // const newId = parseInt(id, 10);
  // let newPrice = 0;
  function onUpdateRound(e) {
    e.preventDefault();

    fetch(`http://localhost:9393/rounds/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: newPrice }),
    })
      .then((res) => res.json())
      .then((res) => onRoundEdit(res));
  }

  return (
    <form onSubmit={onUpdateRound}>
      <input
        step=".01"
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <input type="submit" value="Update Round Price" />
    </form>
  );
}

export default RoundEditForm;

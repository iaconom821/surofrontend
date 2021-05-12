//Form to add a person, it only needs the person's name, make it a hidden form
import { useState } from "react";
function AddPersonForm({ onForceReload }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9393/people", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: name }),
    }).then((res) => onForceReload());
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Add Drinker" />
    </form>
  );
}

export default AddPersonForm;

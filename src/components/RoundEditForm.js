import { useState } from "react";
import styled from 'styled-components'

const StyledInput = styled.input`
  margin: auto;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 50px;
  text-align: center;
  padding: 0px;
  align-items: center;
  `

const StyledForm = styled.form`
  `

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
    <StyledForm  onSubmit={onUpdateRound}>
      <StyledInput 
        step=".01"
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <StyledInput type="submit" value="Update" />
    </StyledForm>
  );
}

export default RoundEditForm;

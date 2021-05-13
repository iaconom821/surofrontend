import {useState} from 'react'

function RoundEditForm({id}) {
    const [newPrice, setNewPrice] = useState(0)
   
    function onUpdateRound(e) {
        fetch(`http://localhost:9393/rounds/${id}`, {
          method: "UPDATE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price: newPrice }),
        });
         setNewPrice(0);
      }

    return (
        <form onSubmit={onUpdateRound}>
          <input
            step=".01"
            type="number"
            value={newPrice}
            onChange={setNewPrice(newPrice)}
          />
          <input type="submit" value="Update Round Price"/>
        </form>
    )
}

export default RoundEditForm 
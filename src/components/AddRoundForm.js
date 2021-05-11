// Form to add a round of drinks
// needs dropdown of people who are drinking and a way to select each person
// name of drink
// price of drinks
// multiply by people in the round
// option to expand form and add specific drinks for people
import Select from 'react-select'


function AddRoundForm({persons}) {

    const selectPersons = persons.map(person => {
        return { value: `${person}`, label: `${person}` }
    })

    return (
        <form>
            <input type='text' placeholder="Drink"/>
            <Select isMulti options={selectPersons}/>
        </form>
    )
}

export default AddRoundForm 
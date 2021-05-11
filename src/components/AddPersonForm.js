//Form to add a person, it only needs the person's name, make it a hidden form

function AddPersonForm(){

    return (
        <form>
            <input type='text' placeholder='Name'/>
            <input type='submit' value='Add Drinker'/>
        </form>
    ) 
}

export default AddPersonForm 
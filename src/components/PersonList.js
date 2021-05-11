import React from 'react'
import Link from 'react-router-dom'
import PersonCard from './PersonCard'
import PersonButton from './PersonButton'

function PersonList({ persons }) {

    const personButtons = persons.map(person => {
        return <PersonButton person={person}/>
    })

return (
    <div>
            {personButtons}
    </div>
        
)}

export default PersonList
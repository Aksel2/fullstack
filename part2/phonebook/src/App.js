import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const Heading = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')


  const addNewContact = (event) => {
    event.preventDefault();
    if (checkIfPersonAlreadyExists(newName)) {
      alert(`${newName} is already added to phonebook`)
    }

    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      setPersons(persons.concat(newPerson));
      setNewName('')
      setNewNumber('')
    }
  }

  const checkIfPersonAlreadyExists = (name) => {
    const personToCheck = {
      name: name
    }
    if (persons.filter(e => e.name === personToCheck.name).length > 0) {
      return true
    }
    return false
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }
  return (
    <div>
      <Heading text="Phonebook" />
      <Filter change={handleFilterChange} />
      <Heading text="add a new" />
      <PersonForm addNewContact={addNewContact} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />
      <Heading text="Numbers" />
      <Persons persons={persons} filterName={filterName} />
    </div>
  )
}

export default App
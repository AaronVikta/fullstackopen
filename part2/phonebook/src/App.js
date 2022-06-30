import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value)
  }
  let loweredStr = newSearch.toLowerCase()
  let isInSearch = (number) => {
    return number.name.toLowerCase() === loweredStr
  }

  let numbers = persons.filter(isInSearch)

  const arrayToSearch = () => {
    if (newSearch === '') {
      return persons
    }
    else {
      return numbers
    }
  }
  let personList = arrayToSearch()
  const addPerson = (event) => {
    event.preventDefault()

    let users = persons.map((item) => {
      return item.name
    })

    if ((users.includes(newName)) === false) {
      const person = {
        name: newName,
        number: newPhone
      }
      setPersons(persons.concat(person))
      setNewName('')
    }
    else {
      alert(`${newName} is already added to the phonebook`)
    }
  }

  return (
    <div>
      <h2> Phonebook</h2>

      <Filter
        newSearch={newSearch}
        handleSearchChange={handleSearchChange}
      />

      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons
        personList={personList}
      />

    </div>
  );
}

export default App;

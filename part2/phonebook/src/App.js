import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = ()=>{
    axios.get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data
        setPersons(persons)
      })
  }

  useEffect(hook,[])

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

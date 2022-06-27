import {useState} from 'react'

const App = ()=> {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
const [newName, setNewName] =useState('')
const handleNameChange =(event)=>{
  console.log(event.target.value);
  setNewName(event.target.value)
}
const addPerson =(event)=>{
  event.preventDefault()
  const person ={
    name:newName
  }
  setPersons(persons.concat(person))
  setNewName('')
}

  return (
    <div>
      <h2> Phonebook</h2>
      <form>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type='submit'
          onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
        {
          persons.map((item)=>{
            return (
              <p key={item.name}>
                {item.name}
              </p>
            )
          })
        }
    </div>
  );
}

export default App;
import {useState} from 'react'

const App = ()=> {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number:''}
  ])

const [newName, setNewName] =useState('')
const [newPhone, setnewPhone] = useState('')
const handleNameChange =(event)=>{
  setNewName(event.target.value)
}

const handlePhoneChange =(event)=>{
  setnewPhone(event.target.value)
}

const addPerson =(event)=>{
  event.preventDefault()

  let users = persons.map((item)=>{
    return item.name
  })
  if((users.includes(newName))===false){
    const person ={
      name:newName,
      number:newPhone
    }
    setPersons(persons.concat(person))
    setNewName('')
  }
  else{
    alert(`${newName} is already added to the phonebook`)
  }
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
          number: <input
          value= {newPhone}
          onChange={handlePhoneChange}
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
                {item.name} {item.number}
              </p>
            )
          })
        }
    </div>
  );
}

export default App;

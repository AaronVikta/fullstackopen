import {useState} from 'react'

const App = ()=> {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number:''}
  ])

const [newName, setNewName] =useState('')
const [newPhone, setNewPhone] = useState('')
const [newSearch, setNewSearch] = useState('')

const handleNameChange =(event)=>{
  setNewName(event.target.value)
}

const handlePhoneChange =(event)=>{
  setNewPhone(event.target.value)
}

const handleSearchChange = (event)=>{
  console.log(event.target.value);
  setNewSearch(event.target.value)
}

let isInSearch =(number) =>{
  return number.name === newSearch
}

let numbers = persons.filter(isInSearch)
console.log(numbers);

const arrayToSearch =()=>{
  if(newSearch ===''){
    return persons
  }
  else {
    return numbers
  }
}
let personList = arrayToSearch()
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
      <div>
        filter shown with 
        <input
        value={newSearch}
        onChange={handleSearchChange}
        />
      </div>
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
          personList.map((item)=>{
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

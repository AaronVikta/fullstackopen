import {useState, useEffect} from 'react'
import axios from 'axios'

import Countries from './components/Countries'

function App() {
  const [textBox, setTextBox] = useState('')
  const [countries, setCountries] =useState([])

const hook = ()=>{
  axios.get('https://restcountries.com/v3.1/all')
  .then(response=>{
    const countries = response.data
    setCountries(countries)

  })
}

useEffect(hook,[])

  const textChangeHandler =(event)=>{
    setTextBox(event.target.value)
  }

  return (
    <div>
      <input 
      type="text"
      value= {textBox}
      onChange= {textChangeHandler}
      />
      <h5>List of Countries</h5>
      <Countries countries={countries} textBox={textBox}/>
    </div>
  );
}

export default App;

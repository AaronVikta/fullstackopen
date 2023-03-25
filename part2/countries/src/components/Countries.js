import { useState } from "react"
import './CountryView'
import CountryView from "./CountryView"

const Countries = ({countries, textBox})=>{
  const [showCountry,setShowCountry] =useState(false)
  const showToggle =()=>{
    setShowCountry(true)
  }
  const hideCountry =()=>{
    setShowCountry(false)
  }



    if (textBox === ''){
        return "Enter a Search Param"
      }
    
      const matches = countries.filter(country => {
        return country.name.common.toLowerCase().startsWith(textBox.toLowerCase())
      })

      if (matches.length > 10) {
        return (
          <p>Too many matches, please specify another filter. </p>
        )
      }
      if (matches.length > 1) {
        return (
          <ul>
            {matches.map(country =>{
                return(
                    <li key={country.name.common}>

                        {country.name.common} 
                          {showCountry?
                          <button onClick={hideCountry}> Hide</button>
                          :
                          <button  onClick={showToggle} nation= {country.name.common}> Show</button>
                          }
                       
                        {
                          showCountry?
                          <>
                            <CountryView matches={matches} nation= {country.name.common} />
                          </>
                          :''
                        }

                     </li>)}
                )
            } 
          </ul>
        )
      }
      if(!matches[0] ){
        return "No Such Country Exist"
      }
      else{
      const countryMatch = matches[0]
      return (
        <div>
          <h2>{countryMatch.name.common}</h2>
          <p>capital: {countryMatch.capital}</p>
          <p>area: {countryMatch.area} km<sup>2</sup></p>
          <h4>Languages:</h4>
          <ul>
            {Object.entries(countryMatch.languages).map(langs => <li key={langs[1]}>{langs[1]}</li>)}
          </ul>

          <img src={countryMatch.flags.png} alt={`The flag of ${countryMatch.name.common}`} />
        </div>
      )
    }
}

export default Countries
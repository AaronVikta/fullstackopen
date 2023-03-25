import { useState } from "react"

const CountryView = ({nation, matches}) =>{

    console.log(nation);
    const nations = matches.filter(places => {
        return places.name.common.toLowerCase().startsWith(nation.toLowerCase())
      })

      const place = nations[0]
      if(nation === place.name.common){
        return (
            <div>
              <h2>{place.name.common}</h2>
              <p>capital: {place.capital}</p>
              <p>area: {place.area} km<sup>2</sup></p>
              <h4>Languages:</h4>
              <ul>
                {Object.entries(place.languages).map(langs => <li key={langs[1]}>{langs[1]}</li>)}
              </ul>
    
              <img src={place.flags.png} alt={`The flag of ${place.name.common}`} />
            </div>
          )
      }
      else{
        return(
            <></>
        )
      }
      

}

export default CountryView
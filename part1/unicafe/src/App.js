import { useState } from "react";


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] =useState(0)

  const handleGood =()=>{
    setGood(good+1)
  }
  const handleBad =()=>{
    setBad(bad+1)
  }
 const handleNeutral =()=>{
   setNeutral(neutral+1)
 }
 const all = (good +bad+neutral)
 const average =(good, neutral, bad)=>{
   let badprod = bad*-1
   let goodprod = good*1
   let neutralprod = neutral*0

   let avg = goodprod+badprod+neutralprod

   return avg
 }

 const percentage = (good, neutral, bad)=>{
   let sum = good+neutral+bad
  let perc = (good/sum)*100
    if (sum === 0){
      return 'Infinity'
    }
  return `${perc} %`
 }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p>all {all} </p>
      <p>Average {average(good, neutral, bad)}</p>
      Positive {percentage(good,neutral,bad)}
    </div>
  );
}

export default App;

import { useState } from "react";
import Statistics from './Statistics'

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
 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <h2>statistics</h2>
      <Statistics
      good={good}
      bad ={bad}
      neutral ={neutral}
      all= {all}
      />
   
     
    </div>
  );
}

export default App;

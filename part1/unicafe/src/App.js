import { useState } from "react";
import Statistics from './Statistics'
import Button from "./Button";

function App() {

  // application states
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] =useState(0)

  // event handlers
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
      <h1>Give feedback</h1>
      <Button onClick={handleGood} text="Good"/>
      <Button onClick={handleNeutral} text="Neutral"/>
      <Button onClick={handleBad} text="Bad"/>
      <h2>Statistics</h2>

      {/* the states are passed as props to the statistics components from the App.js */}
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

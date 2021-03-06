
import { useState } from 'react';


function App() {
  const anecdotes =[
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  
  const lenVotes = 7;
  const arr = Array(lenVotes).fill(0)
  const [votes,setVotes] =useState(arr)

  console.log(votes);

  const handleSelect =()=>{
    let num = occasionalNumber(6);
    setSelected(num)
  }
  const addVote = () => {
    const copyVote = [...votes]
    copyVote[selected] += 1
    setVotes(copyVote)
    
  };
  
  const occasionalNumber=(max)=>{
    return Math.floor(Math.random()*max)
  }
  const maxVotes = () => {
    let max = 0
    let index = 0
    votes.map((item, newIndex) => {
      if (item > max) {
        max = item
        index = newIndex
      }
      return index
    })
    return index
  }


  return (
    <div>
     <p>
     {anecdotes[selected]}
     </p>
     <p><i>has {votes[selected]} votes</i></p>
     <button 
     onClick={addVote}
     className='ml-2'>
      Vote
     </button>
     <button 
     className='ml-2'
     onClick={handleSelect}>
      next anecdotes
     </button>
     <h5>Anecdotes with the most Votes</h5>
     <> 
     {votes[maxVotes()] === 0 ?
        <>
          <p>There are no votes</p>
        </>
        :
        <>
          <p>{anecdotes[maxVotes()]} is the anecdote with most votes</p>
          <p>and it has {votes[maxVotes()]} votes</p>
        </>
      }
     </>
    </div>
  );
}

export default App;

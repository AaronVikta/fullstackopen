import StatisticLine from "./StatisticLine"
const Statistics =({good, neutral, bad,all})=>{

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
     if (((good) ===0) && ((bad) ===0) &&((neutral)===0)) {
         return(
             <div>
                 No feedback given
             </div>
         )
     }
    return(
        <div>
            <StatisticLine text="Positve Feedback" value={good}/>
            <StatisticLine text="Neutral Feedback" value={neutral}/>
            <StatisticLine text="Bad Feedback" value={bad}/>
            <StatisticLine text="All Feedbacks" value={all}/>
            <StatisticLine text= "Average Feedback" value= {average(good,neutral,bad)}/>
            <StatisticLine  text="Percentage Positive Feedback" value= {percentage(good,bad,neutral)}/>
        </div>
    )
}
export default Statistics
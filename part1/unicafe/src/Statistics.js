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
            
            <p>good {good}</p>
            <p>neutral {neutral} </p>
            <p>bad {bad} </p>

            <p>all {all} </p>
            <p>Average {average(good, neutral, bad)}</p>
            Positive {percentage(good, neutral, bad)}
        </div>
    )
}
export default Statistics
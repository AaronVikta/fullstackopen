const Total =({course})=>{
    
    const exercises = course.map((exercise)=>{
        return (exercise.exercises)
    })
   
    const total = exercises.reduce((sum,initial)=>{
        return sum+initial
    },0)
    return(
        <>
            <b>The total of {total} exercises</b>
        </>
    )
}
export default Total
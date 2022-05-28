import Part from "./Part"

const Content =(props)=>{
    const content1 =`${props.part1} ${props.exercise1}`
    const content2 =`${props.part2} ${props.exercise2}`
    const content3 =`${props.part3} ${props.exercise3}`

    return (
        <>
            <Part content = {content1}/>
            <Part content = {content2}/>
            <Part content = {content3}/>
        </>
    )
}
export default Content
import Part from "./Part"

const Content =(props)=>{
    const content1 =`${props.parts[0].name} ${props.parts[0].exercises}`
    const content2 =`${props.parts[1].name} ${props.parts[1].exercises}`
    const content3 =`${props.parts[2].name} ${props.parts[2].exercises}`
    
    return (
        <>
            <Part content = {content1}/>
            <Part content = {content2}/>
            <Part content = {content3}/> 
        </>
    )
}
export default Content
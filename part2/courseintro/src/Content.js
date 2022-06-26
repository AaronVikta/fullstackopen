import Part from "./Part"

const Content =(props)=>{
    const contents = props.parts;
    
    return (
        <>
        {
            contents.map((content) =>{
                return (
                    <div
                    key={content.id}
                    >
                        <Part name={content.name} 
                        exercises= {content.exercises}/>
                </div>
                )
            })
        }
        </>
    )
}
export default Content
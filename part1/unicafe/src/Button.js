const Button = ({onClick,text})=>{

    return (
    
        <button onClick={onClick} className='ml-2'>
            {text}
        </button>
   
    )
}

export default Button
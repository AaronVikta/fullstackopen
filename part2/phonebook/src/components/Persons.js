const Persons =({personList})=>{
    return (
        <>
            {
          personList.map((item)=>{
            return (
              <p key={item.name}>
                {item.name} {item.number}
              </p>
            )
          })
        }
        </>
    )
}

export default Persons
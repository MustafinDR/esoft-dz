export function Competenc ({list, name}){
    const listItems = list?.map( (elem) => <li>{elem}</li>)
    return (
      <>
        <div className='competenc'> {name}
          <ul>{listItems}</ul>
        </div>
      </>
    )
  }
  

import React from 'react'
import { data } from "./data";

function UseStateArray() {

    const [people, setPeople] = React.useState(data)  // another way to write use state like 
    return (
        <>
        {
          people.map((person) => {
             
            const {id, name} = person;
             return (
                 <div key={id} className = 'item'>
                     <h4>{name}</h4>
                 </div>
             )
          }
          )}             

          <button className ="btn" onClick={() => setPeople([])}>
              clear the Avengers
          </button>
        </>
    )
}

export default UseStateArray

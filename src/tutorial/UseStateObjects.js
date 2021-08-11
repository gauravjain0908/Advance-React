import React, {useState} from 'react'

function UseStateObjects() {

    const [person, setPerson] = useState({

        name: "Start Lord",
        age: 50,
        message: "I am god",
    });

    const changeMessage = () => {

        setPerson({...person, message:"Not anymore"})   
    }
    return (
        <div>
           <>
              <h3>{person.name}</h3>
              <h3>{person.age}</h3>
              <h3>{person.message}</h3>

              <button className = "btn" onClick={changeMessage}>Change my message </button>
           </>

        </div>
    )
}

export default UseStateObjects

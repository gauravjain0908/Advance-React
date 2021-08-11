import React, {useState} from 'react'

function UseStateObjects() {

    const [person, setPerson] = useState({

        name: "Start Lord",
        age: 50,
        message: "I am god",
    });

    const [name, setName] = useState("Tony Stark") // Also Use to write like this (Another Convention)
    const [age, setage] = useState(45)
    const [message, setMessage] = useState("I am IronMan")
    const changeMessage = () => {

        setPerson({...person, message:"Not anymore"}) 
        setMessage("Hello World");  
    }
    return (
        <div>
           <>
              <h3>{name}</h3>
              <h3>{age}</h3>
              <h3>{message}</h3>

              <button className = "btn" onClick={changeMessage}>Change my message </button>
           </>

        </div>
    )
}

export default UseStateObjects

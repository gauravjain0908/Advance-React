import React, {useState} from 'react'

function UseStateCounter() {
    
    const[value, setvalue] = useState(0);

    const ComplexIncrease = () => {
     
        setTimeout(() => {
            setvalue((prevState) =>
            {
                return prevState + 1;  // passing a function through to set value of the use state
            });

            // setValue(value + 5000);  // passing hard value through the set value use state
        }, 5000)
    }
    return (
        <>
        <section  style = {{margin: '4rem 0'}}>
            <h2> A Regular Counter </h2>
            <h1> {value}</h1>
            <button className = "btn" onClick = {() => setvalue(value - 1)}> Decrease </button>
            <button className = "btn" onClick = {() => setvalue(value + 1)}> Increase </button>
            <button className = "btn" onClick = {() => setvalue(0)}> Reset </button>
        
              <section style = {{margin: '4rem 0'}}>
              <h2> A more Complex Counter </h2>
              <h1>{value}</h1>
              <button className="btn" onClick={(ComplexIncrease)}> Incrememt later </button>
              </section>
        </section>
        </>
    )
}

export default UseStateCounter

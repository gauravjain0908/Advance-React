import React , {useState} from 'react'

//use state is a named import so we must must have curly bracket face

// some basic rules of all hooks basically any imports / function that starts with use 
// components name must be in upper case
// must be in the function/ component body 
// cannot call conditonally 

function UseStateBasic() {
    
    const [day, setDay]  = useState("Today is a rain day :(");
    const handleClick = () => {
    
        if(day ==="Today is a rain day :(")
        { 
            setDay("Today is a bright and beautiful day :)")
        }
        else{
            setDay("Today is a rain day :(")
        }
    };
    return (
        <div>
            <>
            <h1>{day}</h1>
            <button type ="button" className="btn" onClick={handleClick} >
            change my day
        </button>
            </>  
        </div>
    )
}

export default UseStateBasic

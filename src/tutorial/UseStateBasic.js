import React , {useState} from 'react'
//use state is a named import so we must must have curly braclket face

function UseStateBasic() {
    
    const [day, setDay]  = useState("Today is a rain day");
    const handleClick = () => {
    
         setDay("Today is a bright and beautiful day");
    
    }
    return (
        <div>
            <>
                <h1>{day}</h1>
            <button type ="button" className="btn" onClick={handleClick} >
            change title
        </button>
            </>  
        </div>
    )
}

export default UseStateBasic

import React, {useState, useEffect} from "react"

function UseEffectBasic() {
    
    const [value,setvalue] = useState(0);
    useEffect(() => 
    {
        console.log('call useEffect');
        document.title = `New Messages(${value})`;
    });
    console.log('render component');
    return (
        <>
           <h1>{value}</h1>
           <button className ="btn" onClick={() => setvalue( value + 1)}> Click Me 
           </button>
        </>
    )
}

export default UseEffectBasic

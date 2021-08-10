import React, { useState } from 'react'

function UseStateObject() {

    let title = "Random Title";  //its inital value is random title
    const handleClick = () => {

        title = "My name is Gaurav";
        console.log(title);
       
    }
    
    return (<React.Fragment>
        <h2>{title}</h2>
        <button type ="button" className="btn" onClick={handleClick} >
            change title
        </button>
    </React.Fragment>


    );
};

export default UseStateObject

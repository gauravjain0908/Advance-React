import React from 'react'
import axios from 'axios'

function LearnJSON() {

    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users",{  // initalize the json server
          name: "Tony"},{
              headers: {
               ['content-type']: 'application/json'
           
            }}
        )
            promise.then(response => {            // data connection establishment and response from the servor   
            console.log(response);
         })
            promise.catch(error=>{
            console.error(error);
         })

         let c = b;
         console.log(b);
     }

    return (
        <>
            <h2> Random Title </h2>
            <button type="button" className='btn' onClick={handleClick}> post users </button>
           {/* <button type="button" className='btn' onClick={getUsers}> get users </button> */}
        </>
    )
}

export default LearnJSON

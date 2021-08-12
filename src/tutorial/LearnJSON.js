// 201 Success 
// 404 Error 

import React from 'react'
import axios from 'axios'

function LearnJSON() {

    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users",{  // initalize the port code
          name: "Tony"},{   // setting up an object we want or create 
              headers: {
               ['content-type']: 'application/json'  // setting the servor type 
           
            }}
        )
            promise.then(response => {            // data connection establishment and response from the servor   
            console.log(response);
         })
            promise.catch(error=>{             // this is used to console our error in case we get one
            console.error(error);
         })

         let c = b;
         console.log(b);
     }

     const getUsers = () =>
     {
         axios.get("http://localhost:4000/users").then(users =>{   {/* we are getting the data from our json server then starting it in users and then consoling the array of the objects*/} 
             console.log(users);
         })
     }

    return (
        <>
            <h2> Random Title </h2>
            <button type="button" className='btn' onClick={handleClick}> post users </button>
            <button type="button" className='btn' onClick={getUsers}> get users </button> 
        </>
    )
}

export default LearnJSON

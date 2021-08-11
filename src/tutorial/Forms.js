import React, { useState } from 'react'
// we want to have two input fields 
// we want to have a button
// one of the input field should accept username 
// email 
// we want to accept the data and store it somewhere in a variable \
// initial state will be empty 
//

function Forms() {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault(); // this is used to prevent our default behaviour of our browser
        console.log("Hello my Name is Gaurav Jain")
    }
    return (
        <>
            <article>
                <form className='form' onSubmit = {handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="firstName"> Name :</label>
                        <input type="text" id="firstName" name='firstname'></input>
                    </div>

                    <div className='form-control'>
                        <label htmlFor="email"> Email :</label>
                        <input type="text" id="email" name='email'></input>
                    </div>

                    <button type="sumbit">Sumbit</button>
                </form>

            </article>
        </>
    )
}

export default Forms

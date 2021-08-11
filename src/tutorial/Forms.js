import React, { useState } from 'react'
// we want to have two input fields 
// we want to have a button
// one of the input field should accept username 
// email 
// we want to accept the data and store it somewhere in a variable \
// initial state will be empty 
//

function Forms() {

    const [firstName, setFirstName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // this is used to prevent our default behaviour of our browser
        if (firstName && email) {
            console.log('sumbit the value');
            const person = { id: new Date().getTime.toString, firstName, email };
            console.log(person);
            setPeople((people) => {

                return [...people, person];
            });
            setFirstName('');
            setEmail('');

        }
        else {
            console.log('empty value');
        }
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="firstName"> Name :</label>
                        <input type="text" id="firstName" name='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    </div>

                    <div className='form-control'>
                        <label htmlFor="email"> Email :</label>
                        <input type="text" id="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <button type="sumbit">Sumbit</button>
                </form>

                {people.map((person, index) => {

                   const {id, firstName, email} = person;
                   return(
                   <div className = "item" key = {id}> {/* udate*/}
                       <h4>{firstName}</h4>
                       <p>{email}</p>
                   </div>
                   );
                })}


            </article>
        </>
    )
}

export default Forms

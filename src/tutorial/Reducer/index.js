import React, {useState, useReducer} from 'react'
import {data} from "../data";
import Modal from './Modal';



function Index() {
  
    const [name, setName] = useState('');  // use state to take name input    const [people, setPeople] = useState(data);
    const [showModal, setshowModal] = useState(false);
    const [people, setPeople] = useState(data);
    
    const handleSumbit = (e) => 
    {
       e.preventDefault();
       if(name)
        {
           setshowModal(true);
           setPeople([...people, {id: new Date().getTime().toString(), name}])
           setName('')
        }  
       else
       {
           showModal(true);
       }
    }

    return (
        <>
        
        {showModal && <Modal />}
        <form onSubmit = {handleSumbit} className = 'form'>
            
        <div>
           <input type = "text" value={name} onChange={(e)=> setName(e.target.value)}/>    
        </div>    
            <button type = "sumbit"> add user </button>
        </form>  

        {people.map((person) =>
        {
            return <>
            <div key = {person.id}>
             <h4>{person.name}</h4>
            </div>
            
            </>
        })}        
        </>
    )
}

export default Index

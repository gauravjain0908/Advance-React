import React, {useState, useReducer} from 'react'
import modal from "./Modal";
import {data} from "../data";
import Modal from './Modal';



function Index() {
  
    const [name, setName] = useState('');  // use state to take name input    const [people, setPeople] = useState(data);
    const [showModal, setshowModal] = useState(false);

    const handleSumbit = (e) => 
    {
       e.preventDefault();  
         
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
        
        </>
    )
}

export default Index

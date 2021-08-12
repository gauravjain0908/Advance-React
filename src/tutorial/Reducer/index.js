import React, {useState, useReducer} from 'react'
import {data} from "../data";
import Modal from './Modal';
// Lets import reducer
import {reducer} from './Reducer';

const defaultState = {

    people:data,
    isModalOpen: true,
    modalContent: "",
}

function Index() {
  
    const [name, setName] = useState('');  // use state to take name input    const [people, setPeople] = useState(data);
    const [state, dispatch] = useReducer(reducer,defaultState);
    
    const handleSumbit = (e) => 
    {
       e.preventDefault();
       if(name)
        {
           const newItem = {id: new Date().getTime().toString(), name};
           dispatch({type:"ADD_ITEM", payload: newItem});
           setName("");
        }  
       else
       {
          dispatch({type: 'N0_VALUE'});
       }
    }
    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});

    }

    return (
        <>
        
        {state.isModalOpen && (<Modal closeModal = {closeModal} modalContent = {state.modalContent} />)}
        <form onSubmit = {handleSumbit} className = 'form'>
            
        <div>
           <input type = "text" 
           value={name} 
           onChange={(e)=> setName(e.target.value)}/>    
        </div>    
            <button type = "sumbit"> add user </button>
        </form>  

        {state.people.map((person) =>
        {
            return <>
            <div key = {person.id} className='item'>
             <h4>{person.name}</h4>
             <button onClick ={() =>
             {
                dispatch({type:"REMOVE_ITEM", payload: person.id})}}>
                remove 
             </button>
            
            </div>
            
            </>
        })}        
        </>
    )
}

export default Index

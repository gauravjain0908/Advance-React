import React, {useState, useEffect} from 'react'
import {data} from '../data'
import {Link, useParams} from "react-router-dom";


function Person() {

   console.log(useParams());  // Here usedParams is used to render the id of an object that we have created 
   const [name,setName] = useState("Default State")
   const {id} = useParams();
   useEffect(() =>
   {
       const  newPerson = data.find((person) => person.id === parseInt(id));
       setName(newPerson.name)

   },[]) 
   
   return (
        
        <>
        <div>
            <h1>{name}</h1>
            <Link to = "/people" className="btn"> 
            Back To People 
            </Link>
        
        </div>
        </>
    )
}

export default Person

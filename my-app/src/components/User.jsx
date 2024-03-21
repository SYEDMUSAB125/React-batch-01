import React, { useState } from 'react';
import Conditional from './Conditional';

function User() {
   let [name,setName]=useState("this is from Musab")
   function showData(){
     setName("this is from Musab")
   }
  return (
    <div>
  <h1>{name}</h1>
  <button onClick={()=>setName("")}>Toggle</button> 
  
    </div>
  );
}

export default User;

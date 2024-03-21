import React, { useState } from 'react';

function Form() {
    let [name,setName]=useState("")
    let [pass,setPass]=useState("")
    let [sel,setSel]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        setName(e.target.value)
        setPass(e.target.value)
        setSel(e.target.value)
  
    }
    function handleName(e){
        console.log(e.target.value)
    }
    function handlePass(e){
        console.log(e.target.value)
    }
    function handleCheck(e){
        console.log(e.target.checked)
    }
    function submit(e){
      setName(e.target.value)
      setPass(e.target.value)
      setSel(e.target.value)
    }
  return (
    <div>
      <h1>learning form Handle</h1>
      {/* <form onSubmit={handleSubmit} > */}
        <input type="text" onChange={(e)=>handleName(e)} placeholder="Enter Your Name"></input> 
    <br />
        {/* <input type="password" onChange={(e)=>handlePass(e)} placeholder="Enter Your Password"></input><br />
        <select >
            <option value="1">choose your favourite Movie </option>
            <option value="2">Marvel</option>
            <option value="3">Warner brothers</option>
            <option value="4">HBO</option>
            <option value="5">Dc</option>

        </select>
        <br />
        <input type="checkbox" onChange={handleCheck} />term and condition apply 
        <br /> */}
       <button onClick={submit} >Submit</button>

      {/* </form> */}

    <h3>{name}</h3>
    <h3>{pass}</h3>
    <h3>{sel}</h3>

    </div>
  );
}

export default Form;

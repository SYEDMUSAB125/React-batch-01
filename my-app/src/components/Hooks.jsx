import React, { useState,useEffect} from 'react';

function Hooks() {
    const [count , setCount]= useState(0)
    const [data , setdata]= useState(10)
  useEffect(()=>{
    console.log("useEfect called by state")
  },[count])
  useEffect(()=>{
    alert("useEfect called by Data")
  },[data])
 let click = ()=>{
    setCount(count+1)
 }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:30}} >learning Hooks</h1>
    

        <h1 style={{textAlign:"center",marginTop:30}}  >{count}</h1>
        <h1 style={{textAlign:"center",marginTop:30}}  >{data}</h1>
        <button onClick={click} style={{marginLeft:500,marginTop:30}} >Increment</button>
        <button onClick={()=>setdata(data+10)} style={{marginLeft:500,marginTop:30}} >Data</button>
    </div>
  );
}

export default Hooks;

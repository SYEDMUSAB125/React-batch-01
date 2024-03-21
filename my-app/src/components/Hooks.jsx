import React, { useState,useEffect } from 'react';

function Hooks() {
    const [count , setCount]= useState(0)
    const [data , setdata]= useState(10)
 useEffect(()=>{
    console.log("useEffect called by count")
 },[increment])
 useEffect(()=>{
    console.log("useEffect called by data")
 },[])
 function increment(){
     setCount(count+1)
    }
 
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:30}} >learning Hooks</h1>
      {/* <h1 style={{textAlign:"center",marginTop:30}}  >{name}</h1>
        <button onClick={()=>setName(" Musab Ali ")} style={{marginLeft:500,marginTop:30}} >Change Name</button>
        <button onClick={()=>setName("")} >unMount</button> */}

        <h1 style={{textAlign:"center",marginTop:30}}  >{count}</h1>
        <h1 style={{textAlign:"center",marginTop:30}}  >{data}</h1>
        <button onClick={increment} style={{marginLeft:500,marginTop:30}} >Increment</button>
        <button onClick={()=>setdata(data+10)} style={{marginLeft:500,marginTop:30}} >update</button>
    </div>
  );
}

export default Hooks;

import React, { useRef, useState, useMemo } from 'react';

function Hooks2() {
  let [show, setShow] = useState(0)
  //     let inputref = useRef(null)
  //  const onSubmit = ()=>{

  //      inputref.current.focus()
  //      inputref.current.style.color = "red"
  //      setShow(true)

  //     }

  return (
    <div>
      
      {/* <button onClick={myFunction}> update</button> */}
      {/* <input type="text" ref={inputref} />
      <br /> <br />
       <button onClick={onSubmit}  >Submit</button> 
      {show? <h2>{inputref.current.value}</h2> : null} */}
    </div>
  );
}

export default Hooks2;

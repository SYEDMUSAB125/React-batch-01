import React, { useMemo, useState } from 'react';

function Hooks3() {
    let [count, setCount] = useState(0)
    let [count2, setCount2] = useState(10)
    // let MultiCount = useMemo(()=>{
    //     console.log("chalra hai")
    //     //     return count*5
    // },[count])


    return (
        <div>
       
       {
        useMemo(()=>{
            return(
                <div>
                    <h1>the count is {count} , {count2}</h1>
                </div>
            )
        },[count2])
       }
<br />
<br />
            <h1>last class of hooks</h1>
            <h1>count: {count}</h1>
            <h1>update: {count2} </h1>
            
            <button onClick={() => setCount(count + 1)} >count</button> &nbsp;
            <button onClick={() => setCount2(count2 + 10)} >update</button>
        </div>
    );
}

export default Hooks3;

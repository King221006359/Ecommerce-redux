// import React from "react";
import { useState } from "react";
function Testcount()
{
    const [count,setCount] = useState(10)
    function decrementCount(){
        setCount(count - 1);
    }
   function incrementCount(){
    setCount(count + 1)
   }
    return(
        <>
        <div>
        <h1>Hello world
   
   </h1>
        </div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        </>
        
    )
}

export default Testcount;
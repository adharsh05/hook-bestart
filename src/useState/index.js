import React, {useState} from 'react';

const Counter=()=>{
const initState ={};

const [count, setState, setCount] = useState(initState);

return (
    <>
    Count: {count}
    <button onClick={()=>setCount(initState)}></button>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
 </>
    )


}
export default Counter;




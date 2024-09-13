import { useState } from "react";


const UseStateHook = () => {
    // const [counter, setCounter] = useState(0);
    // const [name, setName] = useState("");

    // Instead of the above I can use the object to store both the state variables

    const [details, setDetails] = useState({counter:0,name:""});
    
    const handleIncrement = () => { 
        setDetails({...details,counter:details.counter+1});
    }
  return (
    <div>
    <input type="text" onChange={e=>setDetails({...details,name:e.target.value})} />
    <h1>{ details.name} had clicked the Counter {details.counter} times</h1>
    <button onClick={handleIncrement}>Increment</button>
 </div>
  )
}

export default UseStateHook;
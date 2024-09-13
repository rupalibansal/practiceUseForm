// Fetching data from API
// Updating the DOM document and window
// Timer functions setTimeout and setInterval
// useEffect(callback,dependencies) : 
//callback is a function -side efffect logic; WHAT to run
// dependencies is an array of variables; WHEN to run
// 3 variants of useEffect
//1 . without dependencies---every single change in the component
//2. with empty dependencies-----only once when the component is rendered first time: usually for API calls
//3. with dependencies


import { useEffect, useState } from "react";

const UseEffectHook = () => {
    const [counter, setCounter] = useState(0);
    const [otherCount, setOtherCount] = useState(5);
// ================without dependencies=================
    // useEffect(() => {
    //     document.title = `${counter} new messages`;
    // })
    
    // ================with empty dependencies=================
    //  useEffect(() => {
    //     document.title = `${counter} new messages`;
    // },[])

    // ================with dependencies=================
    useEffect(() => {
        document.title = `${counter} new messages`;
    }, [counter])

    // Cleanup function after the time interval
//    useEffect(() => {
//     const timer = setInterval(() => {
//             setTime(time + 1)
//     }, 1000);
//        return () => { 
//            clearInterval(timer);
//        }
//      }
    
    const handleIncrement = () => { 
        setCounter(counter+1);
    }

    const handleIncrementBy5 = () => { 
      setOtherCount(otherCount+5);
    }

  return (
      <>
          <h1>{counter} new messages</h1>
          <button onClick={handleIncrement}>Increment</button>
          <h1>{otherCount} Other Count</h1>
          <button onClick={handleIncrementBy5}>Increment By 5</button>
      </>
  )
}

export default UseEffectHook
import { useEffect, useRef, useState } from "react"


const UseRefHook = () => {
    const [name, setName] = useState("");
    // const [counter, setCounter] = useState(0);
    const count = useRef(0);
    console.log(count);
    console.log("rendering component");
    useEffect(() => {
        //  setCounter(counter + 1);
        count.current = count.current + 1;
    });
    return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
            <h2>Name :{name} </h2>
            <h2>Count :{count.current} </h2>
            {/* <h2>Count :{counter} </h2> */}
    </div>
  )
}

export default UseRefHook
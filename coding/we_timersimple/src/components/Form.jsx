import React from "react";
import { useEffect,useState } from "react";


export const Form = () => {
    const[counter, setCounter] = useState(0)

    console.log("before usereffect")

    useEffect(() => {
        console.log("first usereffect")
    }, [counter])

     useEffect(() => {
         console.log("second userffect")
     }, [])

     console.log("after usereffect")

    return (
       <div>
           <h3>Counter : {counter} </h3>
           <button onClick={() => { setCounter(counter + 1)}}>Add1</button>
       </div>
    )
}

import {useState, useEffect} from "react"
export const Timer = () => {
    const[counter,setCounter] = useState(10)
    useEffect(() => {
  const id = setInterval(() => {
      setCounter((p) => {
          if(p === 0) {
              clearInterval(id)
              return 0

          }
          return p - 1;
      })
     // setCounter(counter-1)
   }, 1000);
   return () => {
       //unmounting the timer
       console.log("timer unmounted")
       clearInterval(id)

   }
    }, []);

    return <div>
        <h3>Count is : {counter}</h3>
    </div>
}
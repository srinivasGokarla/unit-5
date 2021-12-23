
import  {add, mult}  from "./calc";
import("./index.css");
import Icon from './react.svg';


console.log(add(7,5))
console.log(add(25,25))
console.log(mult(25,4))

console.log("First Assignment of React")

const h1 = document.createElement("h1")


h1.innerText = "First Assignment of React";
h1.classList.add("blue");

const myIcon = new Image();
  myIcon.src = Icon;

 document.body.appendChild(myIcon);



document.getElementById("root").appendChild(h1)
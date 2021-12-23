
import  {add, mult}  from "./calc";
import("./index.css");
import React from "react";
import ReactDom from "react-dom"

//import image from "./logo.jpg"

console.log(add(3,5))
console.log(add(20,20))
console.log(mult(7,5))

console.log("Hello World")

// const h1 = document.createElement("h1")


// h1.innerText = "Hello Webpack";
// h1.classList.add("redcolor");

// document.getElementById("root").appendChild(h1)


ReactDom.render(React.createElement("h1", {className: "redcolor"}, "Hello Webpack and react"), document.getElementById("root"))

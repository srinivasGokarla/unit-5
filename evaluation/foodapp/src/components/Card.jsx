import React from "react"
import {Form} from "./Form"
import {useState} from "react";

export const Card = () => {
    const[text, setText] = useState("")
    const[test, setTest] = useState([])
    const getRecipe = () => {
        fetch("http://localhost:3001/Recipe").then(d => d.json()).then(res => {
            setTest(res)
        })
    }
    const addRecipe = () => {
        const payload = {
            title : text,
            ingrediants : text,
            timetocook : text,
            image : text,
            instructions : text,
        }
        fetch("http://localhost:3001/Recipe", {
            method : "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            getRecipe()
            setText("")
        })
    }
    return <div>
        <button onClick={ getRecipe, addRecipe }>scrole</button>
    
        {test.map((e,i) => (
          <div key={i}>{e.title}</div>
          ))}
    </div>
}
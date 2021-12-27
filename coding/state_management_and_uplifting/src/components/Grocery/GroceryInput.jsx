import React from "react"

function GroceryInput({ onClick }) {
    const[title, setTitle] = React.useState("")

    return (
        <div>
        <input placeholder="Add Something" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => onClick(title)}>ADD</button>
        

    </div>
    )
}

export { GroceryInput }
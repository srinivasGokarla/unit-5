import React from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { v4 as uuid } from "uuid"

function Grocery() {
    const[data, setData] = React.useState([]);
    const[showAll, setShowAll] = React.useState(true)
    const[list,setList] = React.useState(data)
    const handleAdd = (title) => {
    const payload = {
        title,
        status: false,
        id: uuid()
    };
    setData([ ...data, payload])
  
 };
 const handleDelete = (id) => {
    const updatedGrocery = list.filter((person) => person.id !== id);

   setList( updatedGrocery);;
console.log("deleted")
setData(updatedGrocery);
 }
 const handleToggle = id => {
    const updatedGrocery = data.map((item) =>
    item.id === id ? { ...item, status : !item.status} : item );
    setData(updatedGrocery);
}
    return (
        <div>
        < GroceryInput onClick={handleAdd} />
        {data.filter((item) => (showAll ? true : !item.status)).map((item) => (
            < GroceryList handleToggle={handleToggle} handleDelete={handleDelete} key={item.id} { ...item } />
        ))}
        
 <button onClick={() => setShowAll(!showAll)}>
     { showAll ? "sHOW ONLY UNFINISHED GROCERIES" : "SHOW ALL GROCERIES"}
 </button>

 
    </div>
    )
}

export { Grocery }
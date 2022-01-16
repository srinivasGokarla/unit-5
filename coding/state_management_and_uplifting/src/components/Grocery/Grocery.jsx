import React from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { v4 as uuid } from "uuid"

function Grocery() {
    const[list, setList] = React.useState([]);
    const[showAll, setShowAll] = React.useState(true)
    //const[list,setList] = React.useState([])
    const handleAdd = (data) => {
    const payload = {
        title: data,
        status: false,
        id: uuid()
    };
    setList([ ...list, payload])
  
 };
 const handleDelete = (id) => {
    const newList = list.filter((e) => e.id !== id);
    
   setList(newList);
console.log("deleted", id)



 }
 
 const handleToggle = id => {
    const updatedGrocery = list.map((item) =>
    item.id === id ? { ...item, status : !item.status} : item );
    setList(updatedGrocery);
}
    return (
        <div>
        < GroceryInput onClick={handleAdd} />
        {list.filter((item) => (showAll ? true : !item.status)).map((item) => (
            < GroceryList handleToggle={handleToggle} handleDelete={handleDelete} key={item.id} { ...item } />
        ))}
        
 <button onClick={() => setShowAll(!showAll)}>
     { showAll ? "sHOW ONLY UNFINISHED GROCERIES" : "SHOW ALL GROCERIES"}
 </button>
 
    </div>
    )
}

export { Grocery }
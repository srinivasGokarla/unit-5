import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();
  const [newTodo, setTodo] = useState({});
  const [isUpdated, setUpdates] = useState(false);

  function setTextFun(e) {
    const { name, value } = e.target;
    setTodo({
      ...newTodo,
      [name]: value,
    });
  }
  const updateTodo = async () => {
    try {
      await fetch(`http://localhost:3001/Todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      setUpdates(true);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(id);
  return (
    <>
      <h2>UPDATE TODO FORM</h2>
      <div className="update_form">
        <input
          name="title"
          type="text"
          placeholder="ENTER NEW TODO"
          onChange={setTextFun}
        />{" "}
        <input
          name="description"
          type="text"
          placeholder="Enter new Todo Instructions"
          onChange={setTextFun}
        />
        <button style={{
                marginRight:"20px",
                borderRadius: "4px",
                backgroundColor: "green",
                marginLeft:"5px"
               
              }} onClick={updateTodo}>Update Todo</button>
      </div>
      {isUpdated ? (
        <p>
          <button>
            <Link to="/">GO TO CHECK UPDATED TODOS</Link>
          </button>
        </p>
      ) : null}
    </>
  );
};
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getCompletedTasks,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
  getTotalTasks,
} from "../store/actions";

export const Todos = () => {
  const [text, setText] = useState({});
  const [show, setShow] = useState(false);


  const { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error,
    details: state.details,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);
  async function updateStatus(id, status) {
    try {
      await fetch(`http://localhost:3001/Todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: !status }),
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  }

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:3001/Todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  function setTextFun(e) {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  }
  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      let res = await fetch("http://localhost:3001/Todos");
      let data = await res.json();

      let completed = 0;

      data.forEach((element) => {
        if (element.status) {
          completed++;
        }
      });
      dispatch(getTotalTasks(data.length));
      dispatch(getCompletedTasks(completed));
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }
  return loading ? (
    <div>LOADING...</div>
  ) : error ? (
    <div>Something went wrong!</div>
  ) : (
    <div>
      <h1>
       Todo's List
      </h1>
      <div className="update_form">
        <input
          name="title"
          type="text"
          placeholder="Enter Todo"
          onChange={setTextFun}
        />{" "}
      
        <input
          name="description"
          type="text"
          placeholder="Enter Todo Instructions"
          onChange={setTextFun}
        />
        <button style={{
                marginRight:"20px",
                borderRadius: "4px",
                backgroundColor: "whiteSmoke",
                marginLeft: "5px"
               
              }}
          onClick={() => {
            dispatch(addTodoLoading());
            fetch("http://localhost:3001/Todos", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: false, ...text, id: nanoid() }),
            })
              .then((res) => res.json())
              .then((res) => {
                //success
                dispatch(addTodoSuccess(res));
              })
              .catch((e) => dispatch(addTodoError(e)));
          }}
        >
          Add Todo
        </button>
        <br/>
      </div>
      {todos.map((e) => (
        <>
          <div style={{
              border: '1px solid black',
              marginLeft:"10%",
              marginRight:"10%",
             justifyContent: "center",
             display: "flex",
             padding : "2%",
             marginTop:'20PX',
             gap:"30PX"

            }}>
            <div key={e.id} id={e.id}>
              Title: {e.title}
            </div>
            <div id={e.id}>DESCRIPTION...</div>
            <div >
              <button style={{
                marginRight:"20px",
                borderRadius: "4px",
                backgroundColor: "yellow",
               
              }}>
                <Link to={`todo/${e.id}/edit`} className="linkTag">
                  {" "}
                  Update Todo
                </Link>
              </button>
              <button style={{
                marginRight:"20px",
                borderRadius: "4px",
                backgroundColor: "red",
               
              }} onClick={() => deleteTodo(e.id)}>Delete Todo</button>
              {e.status ? (
                <button  style={{
                  marginRight:"20px",
                  borderRadius: "4px",
                  backgroundColor: "green",
                 
                }}
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                  className="completed_Status"
                >
                  COMPLETED
                </button>
              ) : (
                <button  style={{
                  marginRight:"20px",
                  borderRadius: "4px",
                  backgroundColor: "grey",
                 
                }}
                  key={nanoid()}
                  onClick={() => updateStatus(e.id, e.status)}
                
                >
                  MARK AS COMPLETED
                </button>
              )}
              <button style={{
                marginRight:"20px",
                borderRadius: "4px",
              
               
              }}>
                <Link to={`todo/${e.id}`} className="linkTag">
                  {" "}
                  View Details
                </Link>
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
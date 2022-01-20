
import {ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    DELETE_TODO ,
    TOGGLE_TODO
} from "./actionTypes";



export const addTodoLoading =()=>{
    return{
        type: ADD_TODO_LOADING,
    }
}

export const addTodoSuccess =(data)=>{
    return{
        type: ADD_TODO_SUCCESS,
        payload: data
    }
}

export const addTodoError =(err)=>{
    return{
        type: ADD_TODO_ERROR,
         payload:err
    }
}
////

export const getTodoLoading =()=>{
    return{
        type: GET_TODO_LOADING,
    }
}

export const getTodoSuccess =(data)=>{
    return{
        type: GET_TODO_SUCCESS,
        payload: data
    }
}

export const getTodoError =(err)=>{
    return{
        type: GET_TODO_ERROR,
         payload:err
    }
}

export const deleteTodo =(id)=>{
    return{
        type: DELETE_TODO,
         payload:id
    }
}

export const toggleTodo =(id)=>{
    return{
        type: TOGGLE_TODO,
         payload:id
    }
}

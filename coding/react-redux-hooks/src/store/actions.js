import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    GET_COMPLETED_TASKS,
    GET_DETAILS_ERROR,
    GET_DETAILS_LOADING,
    GET_DETAILS_SUCCESS,
    GET_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TOTAL_TASKS,
    REMOVE_TODO,
  } from "./actionTypes";
  
  export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data,
  });
  export const removoTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
  });
  
  export const addTodoLoading = () => ({
    type: ADD_TODO_LOADING,
  });
  export const addTodoSuccess = (data) => ({
    type: ADD_TODO_SUCCESS,
    payload: data,
  });
  export const addTodoError = (data) => ({
    type: ADD_TODO_ERROR,
    payload: data,
  });
  
  export const getTodoLoading = () => ({
    type: GET_TODO_LOADING,
  });
  export const getTodoSuccess = (data) => ({
    type: GET_TODO_SUCCESS,
    payload: data,
  });
  export const getTodoError = (data) => ({
    type: GET_TODO_ERROR,
    payload: data,
  });
  
  export const getDetailsLoading = () => ({
    type: GET_DETAILS_LOADING,
  });
  export const getDetailsSuccess = (data) => ({
    type: GET_DETAILS_SUCCESS,
    payload: data,
  });
  export const getDetailsError = (data) => ({
    type: GET_DETAILS_ERROR,
    payload: data,
  });
  export const getTotalTasks = (data) => ({
    type: GET_TOTAL_TASKS,
    payload: data,
  });
  export const getCompletedTasks = (data) => ({
    type: GET_COMPLETED_TASKS,
    payload: data,
  });
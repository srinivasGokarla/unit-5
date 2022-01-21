import {
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_LOADING,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    GET_DETAILS_LOADING,
    GET_DETAILS_SUCCESS,
    GET_DETAILS_ERROR,
    GET_TOTAL_TASKS,
    GET_COMPLETED_TASKS,
  } from "./actionTypes";
  
  export const reducer = (
    state = {
      loading: false,
      todos: [],
      error: false,
      details: {},
      loadingDetails: false,
      totalTask: 0,
      completedTasks: 0,
    },
    { type, payload }
  ) => {
    switch (type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, payload],
        };
      case ADD_TODO_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          todos: [...state.todos, payload],
          loading: false,
        };
      case ADD_TODO_ERROR:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case GET_TODO_LOADING:
        return {
          ...state,
          loading: true,
        };
      case GET_TODO_SUCCESS:
        return {
          ...state,
          todos: payload,
          loading: false,
        };
      case GET_TODO_ERROR:
        return {
          ...state,
          loading: false,
          error: payload,
        };
      case GET_DETAILS_LOADING:
        return {
          ...state,
          loadingDetails: true,
        };
      case GET_DETAILS_SUCCESS:
        return {
          ...state,
          details: payload,
          loadingDetails: false,
        };
      case GET_DETAILS_ERROR:
        return {
          ...state,
          loadingDetails: false,
          error: payload,
        };
      case GET_TOTAL_TASKS:
        return {
          ...state,
          totalTask: payload,
        };
      case GET_COMPLETED_TASKS:
        return {
          ...state,
          completedTasks: payload,
        };
      default:
        return state;
    }
  };


import {   ADD_FORM_LOADING , 
    ADD_FORM_SUCCESS,
     ADD_FORM_ERROR  } from "./actionType";



const addFormLoading =()=>{
    return{
        type: ADD_FORM_LOADING,
    }
}

const addFormSuccess =(data)=>{
    return{
        type: ADD_FORM_SUCCESS,
        payload: data
    }
}

const addFormError =(err)=>{
    return{
        type: ADD_FORM_ERROR,
        payload: err
    }
}


export { 
    addFormLoading , addFormSuccess , addFormError
     }
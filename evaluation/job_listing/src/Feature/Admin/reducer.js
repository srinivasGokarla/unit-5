import { ADD_FORM_LOADING ,
    ADD_FORM_SUCCESS,
     ADD_FORM_ERROR  } from "./actionType";

const reducer =(state = { loading:false, jobs:[] ,error:false } ,{type,payload})=>{

   switch(type){
     
       case ADD_FORM_LOADING:
           return{
               ...state,
               loading :true
           }
       
        case ADD_FORM_SUCCESS:
               return{
                   ...state,
                   loading :false ,
                   jobs: [...state.jobs, payload]
               }
               
       case ADD_FORM_ERROR:
                   return{
                       ...state,
                       loading :false ,
                       error : true
                   }

       default :
         return state   
   }
}

export {reducer}
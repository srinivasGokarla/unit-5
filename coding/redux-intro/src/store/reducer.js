import { ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    GET_TODO_LOADING,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    DELETE_TODO,
    TOGGLE_TODO
} from "./actionTypes";

export const reducer =(state = { loading:false, todos:[] ,error:false } ,{type,payload})=>{

    switch(type){
       case ADD_TODO_SUCCESS:
           return{
               ...state,
               loading:false,
               todos:[...state.todos,payload]
           }
        case ADD_TODO_LOADING:
            return{
                ...state,
                loading :true
            }
        case ADD_TODO_ERROR:
            return{
                 ...state,
                 error:true,
                loading:false

            }
         
        case GET_TODO_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    todos:payload
                }
        case GET_TODO_LOADING:
                 return{
                     ...state,
                     loading :true
                 }
         case GET_TODO_ERROR:
                 return{
                      ...state,
                      error:true,
                     loading:false
     
                     }    
        case DELETE_TODO:
            return{
                ...state,
                todos : [...state.todos].filter((el)=> el.id !== payload)
            }
            
        case TOGGLE_TODO:
            return{
                 ...state,
                todos : [...state.todos].map((el)=> el.id === payload ? {...el, status : !el.status }: el)
            }   

        default :
          return state   
    }
}
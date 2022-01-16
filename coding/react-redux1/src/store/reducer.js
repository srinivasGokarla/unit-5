import {ADD_TODO,COUNTER, ADD_TODO_LOADING, ADD_TODO_SUCCESS, ADD_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, GET_TODO_ERROR } from './actionTypes'


//const init = {counter : 0}
//const init = { todos: [] }

const init = { loading: false, todos: [], error: false}
// export const reducer = (state: init, {type, payload}) =>{

export const reducer = (state = init, {type, payload}) =>{
    switch(type){
        case ADD_TODO:
        
            return {
                ...state,
                todos:[...state.todos, payload]
             
          //  counter: state.counter + payload,
            }

            case ADD_TODO_LOADING:
                return{
                    ...state,
                   loading : true
                };

            case ADD_TODO_SUCCESS:
                return{
                    ...state,
                   todos : [ ...state.todos, payload],
                   loading : false,
                };

                case ADD_TODO_ERROR:
                return{
                    ...state,
                   loading : false,
                   error: true,
                };

                case GET_TODO_LOADING:
                    return{
                        ...state,
                     
                       loading : true,
                    };

            case GET_TODO_SUCCESS:
                return{
                    ...state,
                   todos : payload,
                   loading : false,
                };
                
                case GET_TODO_ERROR:
                    return{
                        ...state,
                      
                       loading : false,
                       error: true,
                    };

            case COUNTER:
        
                return {
                    ...state,
            
               counter: state.counter + payload,
              
                }
       
        default:
            return state;
    }
}

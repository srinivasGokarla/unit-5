//actions are always optional
 
import {createStore}  from "redux"

import {reducer} from "./reducer.js";
import { inCount} from "./actions.js"
import {INC_COUNT, DEC_COUNT} from "./actionTypes.js"


//const action = {type: "", payload: ""}, // fixed, payload optional


/*class Store  {
    constructor(reducer, init) {
   this.reducer = reducer;
   this.state = init;
    }

    getState() {
        return this.state
    }
}

*/

// pure function




const init = {count:0, todo: []}

 export const store = createStore(reducer, init); // fixed



console.log(store.getState());

store.dispatch(inCount(1))

store.dispatch(inCount(5));
 store.dispatch({type: DEC_COUNT, payload: 2})

console.log(store.getState());

store.dispatch({
    type: "ADD_TODO",
    payload: { title: "Learn Redux", status: false}
})
store.dispatch({
    type: "ADD_TODO",
    payload: { title: "Learn  React Redux", status: false}
})

console.log(store.getState());

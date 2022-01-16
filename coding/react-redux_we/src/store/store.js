import { createStore, combineReducers } from "redux";
import { reducer as TodoReducer } from "../features/todos/reducer";
import { reducer as CounterReducer } from "../features/counter/reducer";

const rootReducer = combineReducers({
    counterState:CounterReducer,
    todosState:TodoReducer

})
export const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ 
    )


console.log("entirestore",store.getState())
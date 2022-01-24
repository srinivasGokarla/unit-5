import { createStore} from "redux";
import { reducer  } from "./reducer";
//import { reducer as CounterReducer } from "../features/counter/reducer";


export const store = createStore(reducer) 


//console.log("entirestore",store.getState())
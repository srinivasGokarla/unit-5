import { createStore } from "redux";

import { reducer } from "../FEATURE/Admin/reducer";

export const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__())
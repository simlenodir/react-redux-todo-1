import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducers } from "./reducers/index";

export const store = createStore(rootReducers, composeWithDevTools());

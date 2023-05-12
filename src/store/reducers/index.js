import { combineReducers } from "redux";
import { todoReducers } from "./todo";

export const rootReducers = combineReducers({ todoReducers });

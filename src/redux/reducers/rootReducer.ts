import { combineReducers } from "redux";
import { todoReducer } from "./todo/todoReducer";

const rootReducer = combineReducers({ notesState: todoReducer });
export default rootReducer;

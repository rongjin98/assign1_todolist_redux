import { createStore, combineReducers } from "redux";
import { toDoReducer } from "./reducers/toDoReducer";
import { keywordReducer } from "./reducers/keywordReducer";

const reducer = combineReducers({
  toDoList: toDoReducer,
  keyword: keywordReducer,
});

const initialState = {
  toDoList: [],
  keyword: "",
};
const store = createStore(reducer, initialState);
store.subscribe(() => console.log("My store state is: ", store.getState()));

export default store;

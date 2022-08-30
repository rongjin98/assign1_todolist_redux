import { createStore, combineReducers } from "redux";
import { toDoReducer } from "./reducers/toDoReducer";
import { keywordReducer } from "./reducers/keywordReducer";
// const reducer = combineReducers({
//   productList: productListReducer, //the variable name that will show on the redux, "productList"
//   productDetails: productDetailReducer,
//   cart: cartReducer,
// });

const reducer = combineReducers({
  toDoList: toDoReducer,
  keyword: keywordReducer,
});

const initialState = {
  toDoList: [],
  keyword: "",
  //   searchKeyWords: "ddd",
};
const store = createStore(reducer, initialState);
store.subscribe(() => console.log("My store state is: ", store.getState()));

export default store;

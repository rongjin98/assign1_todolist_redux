import {
  ADD_TO_DO,
  GET_TO_DO,
  DELETE_TO_DO,
  PATCH_TO_DO,
} from "../const/toDoConstant";
import CRUD from "../../Helper/CRUD";

export const toDoReducer = (state = [], action) => {
  const toDo = action.payload?.toDo;
  const url = action.payload?.link;

  switch (action.type) {
    case GET_TO_DO:
      return toDo;

    case ADD_TO_DO:
      state.push(toDo);
      CRUD.postToDo(url, toDo);
      return state;

    case DELETE_TO_DO:
      state.filter((ele) => ele.id !== toDo.id);
      CRUD.deleteToDo(url, toDo.id);
      return state;

    case PATCH_TO_DO:
      state = state.map((element) => {
        return element.id === toDo.id ? toDo : element;
      });
      CRUD.patchToDo(url, toDo.id, toDo);
      return state;

    default:
      return state;
  }
};

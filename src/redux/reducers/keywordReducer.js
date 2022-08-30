import { SET_KEYWORD } from "../const/keywordConstant";

export const keywordReducer = (state = "", action) => {
  if (action.type === SET_KEYWORD) {
    return action.payload;
  }
  return state;
};

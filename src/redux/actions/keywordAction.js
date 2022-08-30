import { SET_KEYWORD } from "../const/keywordConstant";

export const setKeyWord = (keyword) => {
  return {
    type: SET_KEYWORD,
    payload: keyword,
  };
};

import {
  ADD_TO_DO,
  GET_TO_DO,
  DELETE_TO_DO,
  PATCH_TO_DO,
} from "../const/toDoConstant";

//Use Middle Ware
// export const getToDoAction = async (url) => {
//   var toDos = [];
//   await fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       console.log(data);
//       toDos = data;
//     });

//   return {
//     type: GET_TO_DO,
//     payload: {
//       toDo: toDos,
//     },
//   };
// };

export const getToDoAction = (toDoList) => {
  return {
    type: GET_TO_DO,
    payload: {
      toDo: toDoList,
    },
  };
};

export const addToDoAction = (url, newTodo) => {
  return {
    type: ADD_TO_DO,
    payload: {
      toDo: newTodo,
      link: url,
    },
  };
};

export const deleteToDoAction = (url, targetToDo) => {
  return {
    type: DELETE_TO_DO,
    payload: {
      toDo: targetToDo,
      link: url,
    },
  };
};

export const patchToDoAction = (url, targetToDo) => {
  return {
    type: PATCH_TO_DO,
    payload: {
      toDo: targetToDo,
      link: url,
    },
  };
};

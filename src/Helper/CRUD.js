class CRUD {
  static getToDos = (url) => {
    return fetch(url).then((resp) => resp.json());
  };

  static postToDo = (url, data) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  static patchToDo = (url, _id, newToDo) => {
    let toDoPath = url + "/" + _id;
    return fetch(toDoPath, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    });
  };

  static deleteToDo = (url, _id) => {
    let toDoPath = url + "/" + _id;
    return fetch(toDoPath, {
      method: "DELETE",
    });
  };
}

export default CRUD;

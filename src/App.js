import HomePage from "./Pages/HomePage";
// import SearchPage from "./Pages/SearchPage";
import CRUD from "./Helper/CRUD";
import { React, useState, useEffect } from "react";
import { getToDoAction } from "./redux/actions/toDoActions";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const URL = {
    BASE_URL: "http://localhost:3000",
    postsPath: "/todos",
  };

  const END_URL = URL.BASE_URL + URL.postsPath;
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      // dispatch(getToDoAction(END_URL));
      CRUD.getToDos(END_URL).then((data) => {
        dispatch(getToDoAction(data));
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <HomePage url={END_URL} />
      {/* <SearchPage toDoList={toDoList} url={END_URL} lastId={lastId} /> */}
    </main>
  );
}

export default App;

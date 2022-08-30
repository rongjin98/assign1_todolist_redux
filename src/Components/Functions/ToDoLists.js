import React from "react";
import ToDo from "./ToDo";
import { useSelector } from "react-redux";

const ToDoLists = ({ url }) => {
  // console.log("The toDoList is now: ", toDoList);
  let toDoList = useSelector((state) => state.toDoList);
  const keyword = useSelector((state) => state.keyword);
  const filterToDos = (keyword) => {
    return toDoList.filter((todo) => todo.title.includes(keyword));
  };

  toDoList = filterToDos(keyword);

  return (
    <section className='to-do-lists'>
      {toDoList.map((todo, index) => {
        return <ToDo key={index} element={todo} url={url} />;
      })}
    </section>
  );
};

export default ToDoLists;

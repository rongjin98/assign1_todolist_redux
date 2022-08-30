import React from "react";
import AddToDo from "../Components/Functions/AddToDo";
import SearchToDo from "../Components/Functions/SearchToDo";
import ToDoLists from "../Components/Functions/ToDoLists";

const HomePage = ({ url }) => {
  return (
    <>
      <section className='create-to-do'>
        <AddToDo url={url} />
        <SearchToDo />
      </section>
      <ToDoLists url={url} />
    </>
  );
};

export default HomePage;

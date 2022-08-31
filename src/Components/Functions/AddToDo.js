import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoAction } from "../../redux/actions/toDoActions";

const AddToDo = ({ url }) => {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList);

  var lastId;
  if (toDoList && toDoList.length > 0) {
    lastId = toDoList[toDoList.length - 1].id;
  }

  const SubmitHandler = (event) => {
    const _content = event.target[0].value;
    const _id = lastId + 1;
    const to_do = {
      id: _id,
      title: _content,
      completed: false,
    };
    dispatch(addToDoAction(url, to_do));
  };

  return (
    <form className='form-control addtodo' onSubmit={SubmitHandler}>
      <input
        className='input-box'
        name='input-box'
        type='text'
        placeholder='Add Your To-Dos'
      />
      <button className='submit btn-blue' type='sumbit'>
        submit
      </button>
    </form>
  );
};

export default AddToDo;

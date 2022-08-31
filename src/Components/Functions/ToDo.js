import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  patchToDoAction,
  deleteToDoAction,
} from "../../redux/actions/toDoActions";

const ToDo = ({ element, url }) => {
  const EDIT_ICON = "✒️";
  const DELETE_ICON = "🗑️";

  const [titleState, setTitleState] = useState(element.title);
  const [completeState, setCompleteState] = useState(element.completed);
  const [exist, setExist] = useState(true);
  const dispatch = useDispatch();
  let _id = element.id;
  let activated = false;

  useEffect(() => {
    setCompleteState(element.completed);
    setTitleState(element.title);
    setExist(true);
  }, [element]);

  const contentHandler = () => {
    const newToDo = { ...element, completed: !completeState };
    setCompleteState((prev) => !prev);
    dispatch(patchToDoAction(url, newToDo));
  };

  const editHandler = () => {
    toggleElement();
    if (activated) {
      const newToDo = { ...element, title: titleState };
      dispatch(patchToDoAction(url, newToDo));
    }
  };

  const deleteHandler = () => {
    dispatch(deleteToDoAction(url, element));
    setExist(false);
  };

  const titleHandler = (event) => {
    setTitleState(event.target.value);
  };

  const toggleElement = () => {
    const pTag = document.getElementById(_id);
    const inputTag = document.querySelector(`.content-input-${_id}`);
    pTag.classList.toggle("none");
    inputTag.classList.toggle("none");
    activated = !activated;
  };

  return !exist ? null : (
    <article
      className={`to-do-card ${completeState}`}
      value={completeState}
      name={`to-do-card-${element.id}`}
    >
      <p
        className={`card-content ${completeState}`}
        value={completeState}
        name={`content-${element.id}`}
        id={element.id}
        onClick={contentHandler}
      >
        {titleState}
      </p>
      <input
        className={`content-input-${element.id} none`}
        value={titleState}
        onChange={titleHandler}
        name={`content-${element.id}`}
      />
      <button
        className='btn-blue edit'
        name={`edit-${element.id}`}
        onClick={editHandler}
      >
        {EDIT_ICON}
      </button>
      <button
        className='btn-red delete'
        name={`delete-${element.id}`}
        onClick={deleteHandler}
      >
        {DELETE_ICON}
      </button>
    </article>
  );
};

export default ToDo;

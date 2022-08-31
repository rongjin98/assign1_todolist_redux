import React from "react";
import { useDispatch } from "react-redux";
import { setKeyWord } from "../../redux/actions/keywordAction";

const SearchToDo = () => {
  const dispatch = useDispatch();
  const searchHandler = (event) => {
    event.preventDefault();
    const keyword = event.target[0].value;
    dispatch(setKeyWord(keyword));
  };

  return (
    <section className='search-form-container'>
      <form className='form-control search' onSubmit={searchHandler}>
        <input className='input-box search' name='input-box' type='text' />
        <button className='search btn-blue' type='submit'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchToDo;

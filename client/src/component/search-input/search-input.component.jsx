import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSubmited } from "../../redux/search/search.actions";
import "./search-input.styles.css";
import { fetchBooksStartAsync } from "../../redux/fetch/fetch.actions";

const SearchInput = ({ handleSubmit, handleChange, classNames }) => {
  const submit = (event) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <div
      className={`
          search-form ${classNames}
      `}
    >
      <form onSubmit={submit}>
        <input
          onChange={handleChange}
          type="text"
          name="Search"
          placeholder="Search your book"
          id=""
        />
      </form>
    </div>
  );
};

export default SearchInput;

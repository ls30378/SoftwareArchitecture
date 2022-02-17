import "./header.styles.css";

import { useEffect, useState } from "react";

import { ReactComponent as MusicLogo } from "../../assets/Music.svg";
import SearchInput from "../search-input/search-input.component";

import { useSelector, useDispatch } from "react-redux";
import {
  hideSearch,
  searchChanged,
  showSearch,
  toggleSearch,
  toggleSubmited,
  searchSubmited,
} from "../../redux/search/search.actions";
import {
  fetchBooksStart,
  fetchBooksStartAsync,
} from "../../redux/fetch/fetch.actions";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isChanged = useSelector((state) => state.search.changed);
  const dispatch = useDispatch();
  const [classNames, setNames] = useState("active");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      handleSubmit();
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  const handleSubmit = () => {
    dispatch(searchSubmited());
    dispatch(fetchBooksStartAsync(`books/${searchTerm}`));
  };
  const handleChange = (event) => {
    if (event.target.value === "") {
      dispatch(toggleSearch());
      dispatch(toggleSubmited());
    } else {
      setSearchTerm(event.target.value);
      dispatch(searchChanged());
    } // console.log(isChanged);
  };
  const handleClick = () => {
    dispatch(showSearch());
    dispatch(toggleSubmited());
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div
      className={`
      header ${isChanged ? "" : classNames}
    `}
    >
      <div onClick={handleClick} className="brand">
        LIBRARIUM
      </div>

      <SearchInput
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        classNames={isChanged ? "" : classNames}
      />
      <div className="ambient-music">
        <MusicLogo
          onClick={() => {
            dispatch(hideSearch());
            navigate("/music");
          }}
        />
      </div>
    </div>
  );
};

export default Header;

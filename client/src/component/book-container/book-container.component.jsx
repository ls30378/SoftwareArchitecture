import "./book-container.styles.css";
import { useEffect, useState } from "react";
import BookCard from "../book-card/book-card.component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBooksStartAsync } from "../../redux/fetch/fetch.actions";
import Container from "../list-book/list-book.container";
import { useSelector } from "react-redux";
import ListBook from "../list-book/list-book.component";
import ListBookContainer from "../list-book/list-book.container";

const BookContainer = ({ searchField }) => {
  const [monsters, setMonster] = useState();
  const [filtered, setFiltered] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isChanged = useSelector((state) => state.search.changed);
  const isSubmited = useSelector((state) => state.search.submited);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  // useEffect(() => {
  //   //   fetch("https://jsonplaceholder.typicode.com/users")
  //   //     .then((response) => response.json())
  //   //     .then((monster) => setMonster(monster));

  //   dispatch(
  //     fetchBooksStartAsync("https://jsonplaceholder.typicode.com/users")
  //   );
  // }, []);
  useEffect(() => {
    console.log("mysearch" + searchTerm);
  }, [searchTerm]);

  return (
    <div className={`book-container ${isChanged ? "" : "hidden"} `}>
      {/* {monsters
        ? monsters.map((m) => (
            <BookCard
              key={m.id}
              value={m.id}
              title={m.name}
              image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            />
          ))
        : null} */}
      {isChanged && isSubmited ? <ListBookContainer /> : null}
    </div>
  );
};

export default BookContainer;

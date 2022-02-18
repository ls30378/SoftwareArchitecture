import "./book-container.styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListBookContainer from "../list-book/list-book.container";

const BookContainer = ({ searchField }) => {
  const isChanged = useSelector((state) => state.search.changed);
  const isSubmited = useSelector((state) => state.search.submited);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    console.log("mysearch" + searchTerm);
  }, [searchTerm]);

  return (
    <div className={`book-container ${isChanged ? "" : "hidden"} `}>
      {isChanged && isSubmited ? <ListBookContainer /> : null}
    </div>
  );
};

export default BookContainer;

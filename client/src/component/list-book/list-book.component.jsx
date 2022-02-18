import { useSelector } from "react-redux";
import { selectBooks } from "../../redux/fetch/fetch.selector";

import "./list-book.styles.css";
import BookCard from "../book-card/book-card.component";

const ListBook = () => {
  const list = useSelector(selectBooks);

  return (
    <>
      {Array.isArray(list) && list.length ? (
        list.map((l) => (
          <BookCard key={l.id} id={l.id} title={l.titulli} image={l.image} />
        ))
      ) : (
        <h2>NOT FOUND</h2>
      )}
    </>
  );
};

export default ListBook;

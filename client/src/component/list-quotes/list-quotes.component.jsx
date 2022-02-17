import { useSelector } from "react-redux";
import { selectQuotes } from "../../redux/quote-fetch/quote-fetch.selector";

const ListQuotes = () => {
  const list = useSelector(selectQuotes);
  return (
    <>
      {list ? (
        <p>
          {list.text} - {list.author}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default ListQuotes;

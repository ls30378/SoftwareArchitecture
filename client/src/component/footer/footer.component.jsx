import { useEffect } from "react";
import "./footer.styles.css";
import { useDispatch } from "react-redux";
import { fetchQuotesStartAsync } from "../../redux/quote-fetch/quote-fetch.actions";
import ListQuotesContainer from "../list-quotes/list-quotes.container";
const Footer = () => {
  const dispatch = useDispatch();
  const random = Math.floor(Math.random() * 999) + 1;
  useEffect(() => {
    dispatch(fetchQuotesStartAsync("https://type.fit/api/quotes", random));
  }, [dispatch, random]);
  return (
    <div
      className="
    footer "
    >
      <ListQuotesContainer />
    </div>
  );
};

export default Footer;

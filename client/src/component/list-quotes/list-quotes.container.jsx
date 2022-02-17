import { selectIsQuoteFetching } from "../../redux/quote-fetch/quote-fetch.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ListQuotes from "./list-quotes.component";
import WithSpinner from "../with-spinner/with-spinner.component";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsQuoteFetching,
});

const ListQuotesContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ListQuotes);

export default ListQuotesContainer;

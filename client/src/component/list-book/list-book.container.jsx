import { selectIsBookFetching } from "../../redux/fetch/fetch.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import ListBook from "./list-book.component";
import WithSpinner from "../with-spinner/with-spinner.component";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsBookFetching,
});

const ListBookContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ListBook);

export default ListBookContainer;

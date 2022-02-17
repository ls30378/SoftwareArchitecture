import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../../with-spinner/with-spinner.component";
import BrowseBook from "./browse-book.component";
import { selectIsDetailsFetching } from "../../../redux/details/fetch.selector";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDetailsFetching,
});

const ListDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(BrowseBook);

export default ListDetailContainer;

import { selectIsCommentFetching } from "../../redux/comment-fetch/fetch.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import ListComment from "./list-comment.component";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCommentFetching,
});

const ListCommentContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ListComment);

export default ListCommentContainer;

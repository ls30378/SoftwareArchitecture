import { fetchCommentStartAsync } from "../../redux/comment-fetch/fetch.actions";
import "./comment-container.styles.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ListCommentContainer from "./list-comment.container";
import axios from "axios";

const CommentContainer = ({ bookid }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommentStartAsync(bookid));
  });

  const submitComment = async (event) => {
    event.preventDefault();

    const data = {
      emri: event.target.emri.value,
      komenti: event.target.komenti.value,
    };

    await axios.post(`http://localhost:4001/comment/post/${bookid}`, data);
  };
  return (
    <div className="comment-container">
      <div className="comment-cards">
        <ListCommentContainer />
      </div>
      <form onSubmit={submitComment}>
        <label htmlFor="komenti">Komenti</label>
        <textarea
          style={{ resize: "none" }}
          name="Komenti"
          id="komenti"
          cols="70"
          rows="10"
        ></textarea>
        <div className="comment-bottom">
          <button type="submit" className="comment-btn">
            Post
          </button>
          <div>
            <label htmlFor="emri">Emri</label>
            <input required type="text" name="Emri" id="emri" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentContainer;

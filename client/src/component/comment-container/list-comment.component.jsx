import { useSelector } from "react-redux";
import { selectComments } from "../../redux/comment-fetch/fetch.selector";

import CommentCard from "./comment-card.component";

const ListComment = () => {
  const list = useSelector(selectComments);

  return (
    <>
      {Array.isArray(list) && list.length ? (
        list.map((l) => (
          <CommentCard key={l.id} emri={l.emri} komenti={l.komenti} />
        ))
      ) : (
        <h2>There is no comment!</h2>
      )}
    </>
  );
};

export default ListComment;

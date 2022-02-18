import "./comment-card.styles.css";

const CommentCard = ({ emri, komenti }) => {
  return (
    <div className="comment-card">
      <h2 className="emri">{emri}</h2>
      <h3 className="komenti">{komenti}</h3>
    </div>
  );
};

export default CommentCard;

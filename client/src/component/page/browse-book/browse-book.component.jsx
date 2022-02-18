import "./browse-book.styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import CommentContainer from "../../comment-container/comment-container.component";
import { useSelector } from "react-redux";
import { selectDetails } from "../../../redux/details/fetch.selector";

const BrowseBook = () => {
  const list = useSelector(selectDetails);
  const { bookid } = useParams();
  const [values, setValues] = useState(3.6);
  const [hide, setHidden] = useState(true);

  const rate = async (event, newValue) => {
    console.log(newValue, bookid);
    const data = { vleresime: newValue, libri_id: bookid };
    await axios.post("http://localhost:8003/api/books/vleresime", data);
    await setVleresime(newValue);
    await alert("Thanks for rating");
  };
  const [vleresimet, setVleresime] = useState(0);
  useEffect(async () => {
    await setVleresime(list[3].vleresime);
  }, list);
  return (
    <>
      {Array.isArray(list) && list.length ? (
        <div className="book-detail-container">
          <div className="book-page">
            <div className="book-cover">
              <img src={list[0].image} alt="book cover" />
              {
                <Rating
                  name="simple-controlled"
                  value={vleresimet}
                  onChange={rate}
                  size="large"
                />
              }
            </div>
            <div className="book-details">
              <h2 className="book-title">{list[0].titulli}</h2>
              <div className="author">
                <h3
                  onClick={() => setHidden(!hide)}
                  className="book-author"
                >{`${list[1].emri} ${list[1].mbiemri}`}</h3>
                <p
                  className={`book-description ${hide ? "hidden" : ""}`}
                >{`${list[1].biografi}`}</p>
              </div>
              <p className="book-description">{`${list[0].description}`}</p>
            </div>
          </div>
          <h2>Comments</h2>
          <CommentContainer bookid={bookid} />
        </div>
      ) : null}
    </>
  );
};

export default BrowseBook;

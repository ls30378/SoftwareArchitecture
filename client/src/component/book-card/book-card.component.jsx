import "./book-card.styles.css";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookCard = ({ id, title, image, value }) => {
  const [values, setValues] = useState(value);
  const navigate = useNavigate();
  const handleClick = () => {
    const encodedTitle = encodeURI(id);
    console.log(encodedTitle);
    navigate(`/book/${encodedTitle}`);
  };

  const rate = async (event, newValue) => {
    console.log(newValue, id);
    const data = { vleresime: newValue, libri_id: id };
    await axios.post("http://localhost:8003/api/books/vleresime", data);
    await console.log(data);
  };
  return (
    <div className="book-card">
      <div className="card-back">
        <div
          onClick={handleClick}
          style={{ backgroundImage: `url(${image})` }}
          className="card"
        ></div>
        <div className="stars">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={rate}
            size="large"
          />
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};

export default BookCard;

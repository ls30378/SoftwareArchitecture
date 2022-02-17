import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsStartAsync } from "../../../redux/details/fetch.actions";
import ListDetailContainer from "./list-detail.container";
import { selectIsDetailsFetching } from "../../../redux/details/fetch.selector";
import { useParams } from "react-router-dom";
const ListDetail = () => {
  const isLoading = useSelector(selectIsDetailsFetching);
  const { bookid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((monster) => setMonster(monster));
    console.log(bookid);
    dispatch(fetchDetailsStartAsync(`books/id/${bookid}`));
  }, [bookid]);
  return (
    <>
      <ListDetailContainer />
    </>
  );
};

export default ListDetail;

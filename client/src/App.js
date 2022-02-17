import Header from "./component/header/header.component";
import Footer from "./component/footer/footer.component";
import { useEffect, useState } from 'react';
import BookContainer from "./component/book-container/book-container.component";
import { Routes, Route } from "react-router-dom";
import BrowseBook from "./component/page/browse-book/browse-book.component";
import { useDispatch } from "react-redux";
import { toggleSearch } from "./redux/search/search.actions";
import MusicPage from "./component/page/music-page/music-page.component";
import ListDetail from "./component/page/browse-book/list-detail.component";

const App = () => {
  const [searchField, setSearch] = useState('');
  const [quote, setQuote] = useState({});
  const [isHidden, setHidden] = useState(true);
  // useEffect(() => {
  //   setQuote(fetch().then(res => res.json()).then(rJson => rJson[2]).then(res => console.log(res)));
  //   setHidden(false);
  // }, [])
  return (
    <div>
      <Header setSearch={setSearch} />

      <Routes>
        <Route exact path='/' element={<BookContainer searchField={searchField} />} />

        <Route exact path='/book/:bookid' element={
          <ListDetail />
        } />

        <Route exact path='/music' element={<MusicPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
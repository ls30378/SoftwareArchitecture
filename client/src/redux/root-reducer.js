import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from "./search/search.reducer";
import fetchReducer from "./fetch/fetch.reducer";
import fetchQuoteReducer from "./quote-fetch/quote-fetch.reducer";
import detailsReducer from "./details/fetch.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
        'search'
    ]
}



const rootReducer = combineReducers({
    search: searchReducer,
    fetch: fetchReducer,
    quotes: fetchQuoteReducer,
    details: detailsReducer


});

export default persistReducer(persistConfig, rootReducer);
import FetchQuotesActionTypes from "./quote-fetch.types";

const INITIAL_STATE = {
    list: null,
    isFetching: false,
    errorMessage: undefined
};

const fetchQuoteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchQuotesActionTypes.FETCH_QUOTES_START:
            return {
                ...state,
                isFetching: true
            };
        case FetchQuotesActionTypes.FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.payload
            };
        case FetchQuotesActionTypes.FETCH_QUOTES_FAILURE:
            return {
                state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default fetchQuoteReducer;
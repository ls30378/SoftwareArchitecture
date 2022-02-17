import FetchQuotesActionTypes from "./quote-fetch.types";


export const fetchQuotesStart = () => ({
    type: FetchQuotesActionTypes.FETCH_QUOTES_START
});

export const fetchQuotesSuccess = quotesMap => ({
    type: FetchQuotesActionTypes.FETCH_QUOTES_SUCCESS,
    payload: quotesMap
});

export const fetchQuotesFailure = errorMessage => ({
    type: FetchQuotesActionTypes.FETCH_QUOTES_FAILURE,
    payload: errorMessage
})

export const fetchQuotesStartAsync = (url, random) => {
    return dispatch => {
        dispatch(fetchQuotesStart());

        fetch(url).then((res) => res.json()).then(resJson => {
            dispatch(fetchQuotesSuccess(resJson[random]));
            return dispatch;
        }).catch(error => dispatch(fetchQuotesFailure(error.message)))

    };
};
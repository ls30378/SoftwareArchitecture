import FetchActionTypes from "./fetch.types";


export const fetchBooksStart = () => ({
    type: FetchActionTypes.FETCH_BOOKS_START
});

export const fetchBooksSuccess = booksMap => ({
    type: FetchActionTypes.FETCH_BOOKS_SUCCESS,
    payload: booksMap
});

export const fetchBooksFailure = errorMessage => ({
    type: FetchActionTypes.FETCH_BOOKS_FAILURE,
    payload: errorMessage
})

export const fetchBooksStartAsync = (url) => {
    return dispatch => {
        dispatch(fetchBooksStart());

        fetch(`http://localhost:8003/api/${url}`).then((res) => res.json()).then(resJson => {
            dispatch(fetchBooksSuccess(resJson));
            return dispatch;
        }).catch(error => dispatch(fetchBooksFailure(error.message)))

    };
};
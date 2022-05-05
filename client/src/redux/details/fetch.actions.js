import DetailsActionTypes from "./fetch.types";


export const fetchDetailsStart = () => ({
    type: DetailsActionTypes.FETCH_DETAILS_START
});

export const fetchDetailsSuccess = booksMap => ({
    type: DetailsActionTypes.FETCH_DETAILS_SUCCESS,
    payload: booksMap
});

export const fetchDetailsFailure = errorMessage => ({
    type: DetailsActionTypes.FETCH_DETAILS_FAILURE,
    payload: errorMessage
})

export const fetchDetailsStartAsync = (url) => {
    return dispatch => {
        dispatch(fetchDetailsStart());

        fetch(`http://localhost:8080/api/main/${url}`).then((res) => res.json()).then(resJson => {
            dispatch(fetchDetailsSuccess(resJson));
            return dispatch;
        }).catch(error => dispatch(fetchDetailsFailure(error.message)))

    };
};
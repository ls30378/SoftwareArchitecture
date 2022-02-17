import FetchActionTypes from "./fetch.types";

const INITIAL_STATE = {
    list: null,
    isFetching: false,
    errorMessage: undefined
};

const fetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchActionTypes.FETCH_BOOKS_START:
            return {
                ...state,
                isFetching: true
            };
        case FetchActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.payload
            };
        case FetchActionTypes.FETCH_BOOKS_FAILURE:
            return {
                state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default fetchReducer;
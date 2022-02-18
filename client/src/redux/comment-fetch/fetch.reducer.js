import FetchActionTypes from "./fetch.types";

const INITIAL_STATE = {
    list: [],
    isFetching: false,
    errorMessage: undefined
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchActionTypes.FETCH_COMMENT_START:
            return {
                ...state,
                isFetching: true
            };
        case FetchActionTypes.FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.payload
            };
        case FetchActionTypes.FETCH_COMMENT_FAILURE:
            return {
                state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default commentReducer;
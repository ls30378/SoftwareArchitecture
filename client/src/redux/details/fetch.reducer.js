import DetailsActionTypes from './fetch.types'

const INITIAL_STATE = {
    list: null,
    isFetching: false,
    errorMessage: undefined
};

const detailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DetailsActionTypes.FETCH_DETAILS_START:
            return {
                ...state,
                isFetching: true
            };
        case DetailsActionTypes.FETCH_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                list: action.payload
            };
        case DetailsActionTypes.FETCH_DETAILS_FAILURE:
            return {
                state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default detailsReducer;
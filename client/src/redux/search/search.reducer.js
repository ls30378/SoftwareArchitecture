import SearchActionTypes from "./search.types";

const INITIAL_STATE = {
    changed: false,
    submited: false,
    searchTerm: []
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_CHANGED:
            return {
                ...state,
                changed: true
            }
        case SearchActionTypes.TOGGLE_SEARCH:
            return {
                ...state,
                changed: !state.changed
            }
        case SearchActionTypes.HIDE_SEARCH:
            return {
                ...state,
                changed: true
            }
        case SearchActionTypes.SHOW_SEARCH:
            return {
                ...state,
                changed: false
            }
        case SearchActionTypes.SEARCH_SUBMITED:
            return {
                ...state,
                submited: true,
                searchTerm: action.payload
            }
        case SearchActionTypes.TOGGLE_SUBMITED:
            return {
                ...state,
                submited: !state.submited
            }
        default:
            return state;
    }
}

export default searchReducer;
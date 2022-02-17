import SearchActionTypes from "./search.types";

export const searchChanged = () => ({
    type: SearchActionTypes.SEARCH_CHANGED
})

export const toggleSearch = () => ({
    type: SearchActionTypes.TOGGLE_SEARCH
})

export const hideSearch = () => ({
    type: SearchActionTypes.HIDE_SEARCH
})

export const showSearch = () => ({
    type: SearchActionTypes.SHOW_SEARCH
})

export const searchSubmited = () => ({
    type: SearchActionTypes.SEARCH_SUBMITED
})

export const toggleSubmited = () => ({
    type: SearchActionTypes.TOGGLE_SUBMITED
})
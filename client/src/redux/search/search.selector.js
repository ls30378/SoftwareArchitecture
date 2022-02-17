import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchChanged = createSelector(
    [selectSearch],
    search => search.hidden
)

export const selectSearchSubmited = createSelector(
    [selectSearch],
    search => search.submited
)

export const selectSearchTerm = createSelector(
    [selectSearch],
    search => search.searchTerm
)
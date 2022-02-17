import { createSelector } from 'reselect';

const selectFetch = state => state.fetch;

export const selectBooks = createSelector(
    [selectFetch],
    fetch => fetch.list
);

export const selectIsBookFetching = createSelector(
    [selectFetch],
    fetch => fetch.isFetching
)

export const selectIsBookLoaded = createSelector(
    [selectFetch],
    fetch => !!fetch.list
)
import { createSelector } from 'reselect';

const selectFetch = state => state.details;

export const selectDetails = createSelector(
    [selectFetch],
    details => details.list
);

export const selectIsDetailsFetching = createSelector(
    [selectFetch],
    details => details.isFetching
)

export const selectIsDetailsLoaded = createSelector(
    [selectFetch],
    details => !!details.list
)
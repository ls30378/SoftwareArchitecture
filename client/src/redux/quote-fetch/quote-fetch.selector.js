import { createSelector } from 'reselect';

const selectQuote = state => state.quotes;

export const selectQuotes = createSelector(
    [selectQuote],
    quotes => quotes.list
);

export const selectIsQuoteFetching = createSelector(
    [selectQuote],
    quotes => quotes.isFetching
)

export const selectIsQuoteLoaded = createSelector(
    [selectQuote],
    quotes => !!quotes.list
)
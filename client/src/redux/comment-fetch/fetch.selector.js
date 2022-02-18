import { createSelector } from 'reselect';

const selectComment = state => state.comment;

export const selectComments = createSelector(
    [selectComment],
    comment => comment.list
);

export const selectIsCommentFetching = createSelector(
    [selectComment],
    comment => comment.isFetching
)

export const selectIsCommentLoaded = createSelector(
    [selectComment],
    comment => !!comment.list
)
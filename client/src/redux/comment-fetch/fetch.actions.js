import FetchActionTypes from "./fetch.types";


export const fetchCommentStart = () => ({
    type: FetchActionTypes.FETCH_COMMENT_START
});

export const fetchCommentSuccess = commentMap => ({
    type: FetchActionTypes.FETCH_COMMENT_SUCCESS,
    payload: commentMap
});

export const fetchCommentFailure = errorMessage => ({
    type: FetchActionTypes.FETCH_COMMENT_FAILURE,
    payload: errorMessage
})

export const fetchCommentStartAsync = (url) => {
    return dispatch => {
        dispatch(fetchCommentStart());

        fetch(`http://localhost:4001/comment/post/${url}`).then((res) => res.json()).then(resJson => {
            console.log(resJson)
            dispatch(fetchCommentSuccess(resJson));
            return dispatch;
        }).catch(error => dispatch(fetchCommentFailure(error.message)))

    };
};
import jsonPlaceHolder from "../../Api/jsonPlaceHolder";

export const fetchPosts = () =>{
    return async (dispatch) =>{
        const response = await jsonPlaceHolder.get('/posts');
        dispatch({
            type: "FETCH_POSTS",
            payload: response,
        });
    };
};

export const selectPost = ()=>{
    return {
        type: "SELECT_POST"
    }
};
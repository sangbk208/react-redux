import {combineReducers} from 'redux';

const fetchPostsReducer = (fetchPosts = null ,action) =>{
    console.log(fetchPosts);
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        default:
            return fetchPosts;
    }
}

export default combineReducers({
    fetchPosts: fetchPostsReducer,
});
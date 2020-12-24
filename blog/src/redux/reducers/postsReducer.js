export const fetchPostsReducer = (fetchPosts = null ,action) =>{
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;
        default:
            return fetchPosts;
    }
}

export const fetchUserReducer = (fetchUser = [] ,action) =>{
    switch (action.type) {
        case "FETCH_USER":
            return [...fetchUser, action.payload];
        default:
            return fetchUser;
    }
}



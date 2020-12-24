import {combineReducers} from 'redux';
import { fetchPostsReducer, fetchUserReducer } from './postsReducer';


export default combineReducers({
    fetchPostsData: fetchPostsReducer,
    fetchUserData: fetchUserReducer,
});
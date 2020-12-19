import {combineReducers} from 'redux';
const songsReducer = () => {
    return[
        {
            title: 'Anh Khong Doi Qua',
            duration: '4:05'
        },
        {
            title: 'Con Co Be Be',
            duration: '3:05'
        },
        {
            title: 'Yeu',
            duration: '4:35'
        },
        {
            title: 'Ghen',
            duration: '3:55'
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action)=>{
    switch (action.type) {
        case "SONG_SELECTED":
            return action.payload;
        default:
            return selectedSong;
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Baby", duration: "2.34" },
    { title: "Maamaa", duration: "5.34" },
    { title: "Painer", duration: "5.54" },
    { title: "Alone haa", duration: "3.54" },
  ];
};

const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer,
});

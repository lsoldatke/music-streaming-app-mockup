import './App.css'
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import {useState} from "react";
import playlistsData from './data/playlists.json'
import songsData from './data/songs.json'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PlaylistView from "./components/PlaylistView/PlaylistView.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  const [playlists] = useState(playlistsData);
  const [songs] = useState(songsData);
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(songs[currentlyPlayingIndex]);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function playNextSong() {
    if (currentlyPlayingIndex !== currentlyPlaying.length - 1) {
      setCurrentlyPlayingIndex(currentlyPlayingIndex + 1);
      setCurrentlyPlaying(songs[currentlyPlayingIndex]);
    }
  }

  function playPreviousSong() {
    if (currentlyPlayingIndex !== 0) {
      setCurrentlyPlayingIndex(currentlyPlayingIndex - 1);
      setCurrentlyPlaying(songs[currentlyPlayingIndex]);
    }
  }

  function changeSong(songId) {
    const song = songs.find(song => song.id === songId);
    console.log(song);

    setCurrentlyPlaying(song);
  }

  function logIn(formData) {
    setUserData(formData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen playlists={playlists}
                                             currentlyPlaying={currentlyPlaying}
                                             onNextSong={playNextSong}
                                             onPreviousSong={playPreviousSong}
                                             userName={userData.email}/>}/>
        <Route path="/playlists/:id" element={<PlaylistView playlists={playlists}
                                                            songs={songs}
                                                            currentlyPlaying={currentlyPlaying}
                                                            onNextSong={playNextSong}
                                                            onPreviousSong={playPreviousSong}
                                                            onSongSelected={changeSong}/>}/>
        <Route path="/login" element={<Login onLogin={logIn}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

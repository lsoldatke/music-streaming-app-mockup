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
  const [currentlyPlayingTrackIndex, setCurrentlyPlayingTrackIndex] = useState(0);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(songs[currentlyPlayingTrackIndex]);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function playNextSong() {
    if (currentlyPlayingTrackIndex !== currentlyPlayingTrack.length - 1) {
      setCurrentlyPlayingTrackIndex(currentlyPlayingTrackIndex + 1);
      setCurrentlyPlayingTrack(songs[currentlyPlayingTrackIndex]);
    }
  }

  function playPreviousSong() {
    if (currentlyPlayingTrackIndex !== 0) {
      setCurrentlyPlayingTrackIndex(currentlyPlayingTrackIndex - 1);
      setCurrentlyPlayingTrack(songs[currentlyPlayingTrackIndex]);
    }
  }

  function changeSong(songId) {
    const song = songs.find(song => song.id === songId);
    console.log(song);

    setCurrentlyPlayingTrack(song);
  }

  function logIn(formData) {
    setUserData(formData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen playlists={playlists}
                                             currentlyPlayingTrack={currentlyPlayingTrack}
                                             onSkipNext={playNextSong}
                                             onSkipPrevious={playPreviousSong}
                                             userName={userData.email}/>}/>
        <Route path="/playlists/:id" element={<PlaylistView playlists={playlists}
                                                            songs={songs}
                                                            currentlyPlayingTrack={currentlyPlayingTrack}
                                                            onSkipNext={playNextSong}
                                                            onSkipPrevious={playPreviousSong}
                                                            onSongSelected={changeSong}/>}/>
        <Route path="/login" element={<Login onLogin={logIn}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

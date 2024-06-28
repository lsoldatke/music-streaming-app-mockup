import './App.css'
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import {useState} from "react";
import playlistsData from './data/playlists.json'
import songsData from './data/songs.json'

function App() {
  const [playlists] = useState(playlistsData);
  const [songs, setSongs] = useState(songsData);
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(songs[currentlyPlayingIndex]);

  function playPause() {}
  function playNextSong() {
    setCurrentlyPlayingIndex(currentlyPlayingIndex + 1);
  }
  function playPreviousSong() {
    setCurrentlyPlayingIndex(currentlyPlayingIndex - 1);
  }

  return (
    <HomeScreen
      playlists={playlists}
      currentlyPlaying={currentlyPlaying}
      onPlayPause={playPause}
      onNextSong={playNextSong}
      onPreviousSong={playPreviousSong}
    />
  )
}

export default App

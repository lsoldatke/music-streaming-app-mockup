import {useState} from "react";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import "./App.css";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import Login from "./components/Login/Login.jsx";
import PlaylistView from "./components/PlaylistView/PlaylistView.jsx";
import playlistsData from "./data/playlists.json";
import songsData from "./data/songs.json";

function App() {
  const [playlists] = useState(playlistsData);
  const [songs] = useState(songsData);
  const [currentlyPlayingTrackIndex, setCurrentlyPlayingTrackIndex] =
    useState(0);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(
    songs[currentlyPlayingTrackIndex]
  );
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function playNextSong() {
    if (currentlyPlayingTrackIndex !== songs.length - 1) {
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

  function playSong(songId) {
    const song = songs.find((song) => song.id === songId);

    setCurrentlyPlayingTrack(song);
  }

  function logIn(formData) {
    setUserData(formData);
  }

  function PlaylistViewRouteWrapper({playlists, songs}) {
    const {id} = useParams();
    const numId = parseInt(id, 10);
    const selectedPlaylist = playlists.find(playlist => playlist.id === numId);
    const playlistSongs = songs.filter(song => selectedPlaylist.songIds.includes(song.id));

    return (
      <PlaylistView
        playlist={selectedPlaylist}
        songs={playlistSongs}
        currentlyPlayingTrack={currentlyPlayingTrack}
        onSongSelected={playSong}
        onSkipPrevious={playPreviousSong}
        onSkipNext={playNextSong}
      />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              playlists={playlists}
              currentlyPlayingTrack={currentlyPlayingTrack}
              userName={userData.email}
              onSkipPrevious={playPreviousSong}
              onSkipNext={playNextSong}
            />
          }
        />
        <Route
          path="/playlists/:id"
          element={<PlaylistViewRouteWrapper playlists={playlists} songs={songs}/>}
        />
        <Route path="/login" element={<Login onLogin={logIn}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css'
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import {useState} from "react";
import playlistsData from '../public/data/playlists.json'

function App() {
  const [playlists] = useState(playlistsData);

  return (
    <HomeScreen
      playlists={playlists}
    />
  )
}

export default App

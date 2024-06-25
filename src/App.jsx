import './App.css'
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import {useState} from "react";

function App() {
  const playlistsData = [
    {
      id: 1,
      name: 'My Playlist 1',
      description: "My test playlist 1",
      coverArtUrl: ''
    },
    {
      id: 2,
      name: 'My Playlist 2',
      description: "My test playlist 2",
      coverArtUrl: ''
    },
    {
      id: 3,
      name: 'My Playlist 3',
      description: "My test playlist 3",
      coverArtUrl: ''
    },
    {
      id: 4,
      name: 'My Playlist 4',
      description: "My test playlist 4",
      coverArtUrl: ''
    },
    {
      id: 5,
      name: 'My Playlist 5',
      description: "My test playlist 5",
      coverArtUrl: ''
    },
    {
      id: 6,
      name: 'My Playlist 6',
      description: "My test playlist 6",
      coverArtUrl: ''
    },
  ]

  const [playlists] = useState(playlistsData);

  return (
    <HomeScreen
      playlists={playlists}
    />
  )
}

export default App

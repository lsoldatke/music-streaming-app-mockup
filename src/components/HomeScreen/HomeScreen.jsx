import Header from '../Header/Header'
import Browser from "../Browser/Browser.jsx";
import FeaturedContent from "../FeaturedContent/FeaturedContent.jsx";
import Player from "../Player/Player.jsx";
import styles from './HomeScreen.module.css'

function HomeScreen({playlists, currentlyPlaying, onNextSong, onPreviousSong}) {
  return (
    <>
      <Header/>
      <main>
        <Browser playlists={playlists}/>
        <FeaturedContent playlists={playlists}/>
        <Player
          currentlyPlaying={currentlyPlaying}
          onNextSong={onNextSong}
          onPreviousSong={onPreviousSong}
        />
      </main>
    </>
  )
}

export default HomeScreen;

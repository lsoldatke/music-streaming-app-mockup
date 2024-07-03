import Header from '../Header/Header'
import Browser from "../Browser/Browser.jsx";
import FeaturedContent from "../FeaturedContent/FeaturedContent.jsx";
import Player from "../Player/Player.jsx";
import styles from './HomeScreen.module.css'

function HomeScreen({playlists, currentlyPlayingTrack, onSkipNext, onSkipPrevious, userName}) {
  return (
    <>
      <Header showSearchButton={true} userName={userName}/>
      <main>
        <Browser playlists={playlists}/>
        <FeaturedContent playlists={playlists}/>
        <Player
          currentlyPlayingTrack={currentlyPlayingTrack}
          onSkipNext={onSkipNext}
          onSkipPrevious={onSkipPrevious}
        />
      </main>
    </>
  )
}

export default HomeScreen;

import Header from '../Header/Header'
import Browser from "../Browser/Browser.jsx";
import FeaturedContent from "../FeaturedContent/FeaturedContent.jsx";
import Player from "../Player/Player.jsx";

function HomeScreen({playlists}) {
  return (
    <>
      <Header/>
      <main>
        <Browser playlists={playlists}/>
        <FeaturedContent playlists={playlists}/>
        <Player />
      </main>
    </>
  )
}

export default HomeScreen;

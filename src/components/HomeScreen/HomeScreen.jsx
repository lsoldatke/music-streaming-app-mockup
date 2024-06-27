import Header from '../Header/Header'
import Browser from "../Browser/Browser.jsx";
import FeaturedContent from "../FeaturedContent/FeaturedContent.jsx";
import styles from './HomeScreen.module.css'

function HomeScreen({playlists}) {
  return (
    <>
      <Header/>
      <main>
        <Browser playlists={playlists}/>
        <FeaturedContent playlists={playlists}/>
      </main>
    </>
  )
}

export default HomeScreen;

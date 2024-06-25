import Header from '../Header/Header'
import Browser from "../Browser/Browser.jsx";

function HomeScreen({playlists}) {
  return (
    <>
      <Header/>
      <Browser playlists={playlists}/>
    </>
  )
}

export default HomeScreen;

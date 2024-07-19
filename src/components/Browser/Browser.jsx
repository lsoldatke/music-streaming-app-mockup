import styles from './Browser.module.css';
import browserPlaylistStyles from '../Playlist/BrowserPlaylist.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";
import Playlist from "../Playlist/Playlist.jsx";
import {Link} from "react-router-dom";


function Browser({playlists}) {
  return (
    <nav className={styles.browser}>
      <header className={styles.browserHeader}>
        <BiLibrary size={24}/>
        <h2 className={styles.title}>Library</h2>
        <button className={styles.addButton}>
          <IoMdAdd/>
        </button>
      </header>
      <div className={styles.browserContent}>
        {playlists.map((playlist, index) => (
          <Link to={`/playlists/${playlist.id}`} key={index}>
            <Playlist styles={browserPlaylistStyles} playlist={playlist}/>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Browser;

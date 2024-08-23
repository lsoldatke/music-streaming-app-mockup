import styles from './Browser.module.css';
import browserPlaylistStyles from '../Playlist/BrowserPlaylist.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";
import Playlist from "../Playlist/Playlist.jsx";
import {Link} from "react-router-dom";


function Browser({playlists}) {
  return (
    <div className={styles.browser}>
      <div className={styles.header}>
        <BiLibrary className={styles.libraryIcon}/>
        <h2 className={styles.title}>Library</h2>
        <div className={styles.tools}>
          <button className={styles.addButton}>
            <IoMdAdd className={styles.addIcon}/>
          </button>
        </div>
      </div>
      <div>
        {playlists.map((playlist, index) => (
          <Link to={`/playlists/${playlist.id}`} key={index}>
            <Playlist playlist={playlist} styles={browserPlaylistStyles}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Browser;

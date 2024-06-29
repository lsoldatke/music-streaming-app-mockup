import styles from './Browser.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";
import BrowserPlaylist from "../BrowserPlaylist/BrowserPlaylist.jsx";


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
          <BrowserPlaylist key={index} playlist={playlist}/>
        ))}
      </div>
    </nav>
  )
}

export default Browser;

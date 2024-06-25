import styles from './Browser.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";


function Browser({playlists}) {
  return (
    <nav className={styles.browser}>
      <header className={styles.browserHeader}>
        <BiLibrary size={24}/>
        <h2>Library</h2>
        <button className={styles.addButton}>
          <IoMdAdd/>
        </button>
      </header>
      <div className={styles.browserContent}>
        {playlists.map((playlist, index) => (
          <div key={index} className={styles.playlist}>
            <img className={styles.playlistCoverArt} src={playlist.coverArtUrl} alt={`Playlist ${playlist.name} cover art`} />
            <div className={styles.playlistInfo}>
              <h3 className={styles.playlistTitle}>{playlist.name}</h3>
              <p className={styles.playlistDescription}>{playlist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Browser;

import styles from './Browser.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";


function Browser({playlists}) {
  function trimString(str) {
    const words = str.split(' ');
    const trimmed = words.slice(0, 4);

    return trimmed.join(' ');
  }

  function onPlaylistClick() {
    console.log("onPlaylistClick");
  }

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
          <div key={index} className={styles.playlist} onClick={onPlaylistClick}>
            <img className={styles.playlistCoverArt} src={playlist.coverArtUrl} alt={`Playlist ${playlist.title} cover art`} />
            <div className={styles.playlistInfo}>
              <h3 className={styles.playlistTitle}>{trimString(playlist.title)}</h3>
              <p className={styles.playlistAuthor}>{`Playlist - ${playlist.author}`}</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Browser;

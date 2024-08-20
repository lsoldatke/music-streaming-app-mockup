import styles from './Song.module.css'

function Song({song: {id, title, author, albumCoverArtUrl}, onSongSelected}) {
  return (
    <div className={styles.song} onClick={() => onSongSelected(id)}>
      <img className={styles.coverArt} src={albumCoverArtUrl} alt="Album cover art"/>
      <div className={styles.songInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
}

export default Song;

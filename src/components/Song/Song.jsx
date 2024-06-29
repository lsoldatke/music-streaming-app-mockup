import styles from './Song.module.css'

function Song({song, onSongSelected}) {
  return (
    <div className={styles.song} onClick={() => onSongSelected(song.id)}>
      <img className={styles.coverArt} src={song.albumCoverArtUrl} alt="Album cover art"/>
      <div className={styles.songInfo}>
        <h3>{song.title}</h3>
        <p>{song.author}</p>
      </div>
    </div>
  );
}

export default Song;

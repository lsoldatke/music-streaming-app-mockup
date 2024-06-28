import styles from './Player.module.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";

function Player({currentlyPlaying, onPlayPause, onNextSong, onPreviousSong}) {
  return (
    <div className={styles.player}>
      <div className={styles.trackInfo}>
        <img className={styles.playlistCoverArt} src={currentlyPlaying.albumCoverArtUrl} alt="Song album cover art" />
        <div className={styles.songInfo}>
          <h4 className={styles.songTitle}>{currentlyPlaying.title}</h4>
          <p className={styles.songArtist}>{currentlyPlaying.author}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <MdOutlineSkipPrevious
          className={styles.previousTrackButton}
          size={30}
          color="#9342d8"
          onClick={onPreviousSong}
        />
        <FaRegCirclePlay
          className={styles.playTrackButton}
          size={30}
          color="#9342d8"
          onClick={onPlayPause}
        />
        <MdOutlineSkipNext
          className={styles.nextTrackButton}
          size={30}
          color="#9342d8"
          onClick={onNextSong}
        />
      </div>
    </div>
  );
}

export default Player;

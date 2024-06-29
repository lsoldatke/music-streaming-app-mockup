import styles from './Player.module.css'
import {FaRegCirclePlay} from "react-icons/fa6";
import {MdOutlineSkipNext, MdOutlineSkipPrevious} from "react-icons/md";
import {FaRegPauseCircle} from "react-icons/fa";
import {useState} from "react";

function Player({currentlyPlaying, onNextSong, onPreviousSong}) {
  const [isPlaying, setIsPlaying] = useState(false);

  function playPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.player}>
      <div className={styles.trackInfo}>
        <img className={styles.playlistCoverArt} src={currentlyPlaying.albumCoverArtUrl} alt="Song album cover art"/>
        <div className={styles.songInfo}>
          <h4 className={styles.songTitle}>{currentlyPlaying.title}</h4>
          <p className={styles.songArtist}>{currentlyPlaying.author}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <MdOutlineSkipPrevious
          className={styles.previousTrackButton}
          size={40}
          color="#9342d8"
          onClick={onPreviousSong}
        />

        {isPlaying ? <FaRegPauseCircle
          className={styles.playTrackButton}
          size={40}
          color="#9342d8"
          onClick={playPause}
        /> : <FaRegCirclePlay
          className={styles.playTrackButton}
          size={40}
          color="#9342d8"
          onClick={playPause}
        />
        }

        <MdOutlineSkipNext
          className={styles.nextTrackButton}
          size={40}
          color="#9342d8"
          onClick={onNextSong}
        />
      </div>
    </div>
  );
}

export default Player;

import {useState} from "react";
import {FaRegPauseCircle} from "react-icons/fa";
import {FaRegCirclePlay, FaRepeat, FaShuffle} from "react-icons/fa6";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {MdOutlineSkipNext, MdOutlineSkipPrevious} from "react-icons/md";
import {PiQueue} from "react-icons/pi";
import styles from "./Player.module.css";
import {trimTitle} from "../../utils.js";

function Player({currentlyPlayingTrack, onSkipPrevious, onSkipNext}) {
  const [isPlaying, setIsPlaying] = useState(false);

  function playPause() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className={styles.player}>
      <div className={styles.trackInfo}>
        <img className={styles.albumArt} src={currentlyPlayingTrack.albumCoverArtUrl}
             alt="Album art"/>
        <div className={styles.trackTextInfo}>
          <p className={styles.trackTitle}>{trimTitle(currentlyPlayingTrack.title)}</p>
          <p className={styles.trackAuthor}>{currentlyPlayingTrack.author}</p>
        </div>
      </div>
      <div className={`${styles.playControls} ${styles.controls}`}>
        <FaShuffle
          className={styles.shuffleButton}
          size={20}
          color="#9342d8"
        />
        <MdOutlineSkipPrevious
          className={styles.skipPreviousButton}
          onClick={onSkipPrevious}
          size={40}
          color="#9342d8"
        />

        {isPlaying ? <FaRegPauseCircle
          className={styles.pauseButton}
          onClick={playPause}
          size={40}
          color="#9342d8"
        /> : <FaRegCirclePlay
          className={styles.playButton}
          onClick={playPause}
          size={40}
          color="#9342d8"
        />
        }

        <MdOutlineSkipNext
          className={styles.skipNextButton}
          onClick={onSkipNext}
          size={40}
          color="#9342d8"
        />
        <FaRepeat
          className={styles.repeatButton}
          size={20}
          color="#9342d8"
        />
      </div>
      <div className={`${styles.additionalControls} ${styles.controls}`}>
        <PiQueue
          className={styles.queueButton}
          size={30}
          color="#9342d8"
        />
        <IoMdInformationCircleOutline
          className={styles.infoButton}
          size={30}
          color="#9342d8"
        />
      </div>
    </div>
  );
}

export default Player;

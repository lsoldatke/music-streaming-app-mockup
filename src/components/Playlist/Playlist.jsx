import {trimTitle} from "../../utils.js";

function Playlist({playlist, styles, onPlaylistClick}) {
  return (
    <div className={styles.playlist} onClick={onPlaylistClick}>
      <img className={styles.image} src={playlist.coverArtUrl}
           alt={`${playlist.title} playlist image`}/>
      <div>
        <h3 className={styles.title}>{trimTitle(playlist.title)}</h3>
        <p className={styles.author}>{`By ${playlist.author}`}</p>
      </div>
    </div>
  );
}

export default Playlist;

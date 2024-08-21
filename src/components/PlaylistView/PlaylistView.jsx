import styles from "./PlaylistView.module.css";
import Header from "../Header/Header.jsx";
import Player from "../Player/Player.jsx";
import Song from "../Song/Song.jsx";

function PlaylistView({playlist, songs, currentlyPlayingTrack, onSongSelected, onSkipPrevious, onSkipNext}) {
  return (
    <>
      <Header/>
      <div className={styles.playlistView}>
        <div className={styles.playlistInfo}>
          <img className={styles.image} src={playlist.coverArtUrl} alt={`${playlist.title} playlist image`}/>
          <div className={styles.playlistTextInfo}>
            <h2 className={styles.title}>{playlist.title}</h2>
            <p className={styles.author}>{`Playlist by ${playlist.author}`}</p>
          </div>
        </div>
        <div className={styles.songs}>
          {songs.map((song, index) => (
            <Song key={index} song={song} onSongSelected={onSongSelected}/>
          ))}
        </div>
      </div>
      <Player
        currentlyPlayingTrack={currentlyPlayingTrack}
        onSkipPrevious={onSkipPrevious}
        onSkipNext={onSkipNext}
      />
    </>
  );
}

export default PlaylistView;

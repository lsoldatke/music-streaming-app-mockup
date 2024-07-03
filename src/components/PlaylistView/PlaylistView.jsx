import styles from './PlaylistView.module.css'
import {useParams} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Player from "../Player/Player.jsx";
import Song from "../Song/Song.jsx";

function PlaylistView({playlists, songs, currentlyPlayingTrack, onSkipNext, onSkipPrevious, onSongSelected}) {
  const {id} = useParams();
  const playlistId = parseInt(id, 10);
  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const playlistSongs = songs.filter(song => playlist.songIds.includes(song.id));

  return (
    <>
      <Header/>
      <div className={styles.playlistView}>
        <h2 className={styles.playlistTitle}>{playlist.title}</h2>
        <p className={styles.playlistAuthor}>{`Playlist by ${playlist.author}`}</p>
        <div className={styles.songs}>
          {playlistSongs.map((song, index) => (
            <Song key={index} song={song} onSongSelected={onSongSelected}/>
          ))}
        </div>
      </div>
      <Player
        currentlyPlayingTrack={currentlyPlayingTrack}
        onSkipNext={onSkipNext}
        onSkipPrevious={onSkipPrevious}
      />
    </>
  );
}

export default PlaylistView;

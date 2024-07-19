function Playlist({styles, playlist, onPlaylistClick}) {
  function trimString(str) {
    const words = str.split(' ');
    const trimmed = words.slice(0, 4);

    return trimmed.join(' ');
  }

  return (
    <div className={styles.playlist} onClick={onPlaylistClick}>
      <img className={styles.playlistCoverArt} src={playlist.coverArtUrl}
           alt={`Playlist ${playlist.title} cover art`}/>
      <div className={styles.playlistInfo}>
        <h3 className={styles.playlistTitle}>{trimString(playlist.title)}</h3>
        <p className={styles.playlistAuthor}>{`By ${playlist.author}`}</p>
      </div>
    </div>
  );
}

export default Playlist;

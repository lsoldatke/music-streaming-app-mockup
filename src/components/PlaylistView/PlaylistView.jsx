import styles from './PlaylistView.module.css'
import {useParams} from "react-router-dom";

function PlaylistView({playlists}) {
  const {playlistId} = useParams();

  // return (
  //   {playlists.filter(playlist => playlistId === playlist.id).map(playlist => (
  //     <div>
  //       <p>{playlist.id}</p>
  //       <p>{playlist.title}</p>
  //     </div>
  //     ))}
  // );
}

export default PlaylistView;

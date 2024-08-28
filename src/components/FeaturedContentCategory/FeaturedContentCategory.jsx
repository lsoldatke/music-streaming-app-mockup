import styles from './FeaturedContentCategory.module.css'
import featuredContentPlaylistStyles from '../Playlist/FeaturedContentPlaylist.module.css'
import Playlist from "../Playlist/Playlist.jsx";
import {Link} from "react-router-dom";

function FeaturedContentCategory({title, playlists}) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {playlists.map((playlist, index) => index % 2 === 0 ?
          <Link to={`/playlists/${playlist.id}`} key={index}>
            <Playlist key={index} playlist={playlist}
                      styles={featuredContentPlaylistStyles}/>
          </Link> : null
        )}
      </div>
    </div>
  );
}

export default FeaturedContentCategory;

import styles from './FeaturedContentCategory.module.css'
import FeaturedContentPlaylist from "../FeaturedContentPlaylist/FeaturedContentPlaylist.jsx";
import {Link} from "react-router-dom";

function FeaturedContentCategory({title, playlists}) {
  return (
    <div className={styles.featuredContentCategory}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <div className={styles.content}>
        {playlists.map((playlist, index) => index % 2 === 0 ?
          <Link to={`/playlists/${playlist.id}`} key={index}>
            <FeaturedContentPlaylist className={styles.element} key={index} playlist={playlist}/>
          </Link> : null
        )}
      </div>
    </div>
  )
}

export default FeaturedContentCategory;

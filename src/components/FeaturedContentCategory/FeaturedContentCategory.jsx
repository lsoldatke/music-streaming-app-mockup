import styles from './FeaturedContentCategory.module.css'
import FeaturedContentPlaylist from "../FeaturedContentPlaylist/FeaturedContentPlaylist.jsx";
import featuredContent from "../FeaturedContent/FeaturedContent.jsx";

function FeaturedContentCategory({title, playlists}) {
  return (
    <div className={styles.featuredContentCategory}>
      <h2>{title}</h2>
      <div className={styles.content}>
        {playlists.map((playlist, index) => index % 2 === 0 ?
        <FeaturedContentPlaylist key={index} playlist={playlist}/> : null
      )}
      </div>
    </div>
  )
}

export default FeaturedContentCategory;

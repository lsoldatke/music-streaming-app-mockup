import styles from './FeaturedContent.module.css';
import FeaturedContentCategory from "../FeaturedContentCategory/FeaturedContentCategory.jsx";

function FeaturedContent({playlists}) {
  return (
    <div className={styles.featuredContent}>
      <FeaturedContentCategory title="Recommended for you" playlists={playlists}/>
      <FeaturedContentCategory title="Most popular" playlists={playlists}/>
      <FeaturedContentCategory title="Growing in popularity" playlists={playlists}/>
    </div>
  );
}

export default FeaturedContent;

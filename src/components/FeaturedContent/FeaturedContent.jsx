import styles from './FeaturedContent.module.css';
import FeaturedContentCategory from "../FeaturedContentCategory/FeaturedContentCategory.jsx";

function FeaturedContent({playlists}) {
  return (
    <main className={styles.content}>
      <FeaturedContentCategory title='Recommended for you' playlists={playlists}/>
      <FeaturedContentCategory title='Most popular' playlists={playlists}/>
    </main>
  );
}

export default FeaturedContent;

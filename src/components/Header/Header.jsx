import styles from './Header.module.css';
import {FaSearch} from 'react-icons/fa';
import {Link} from "react-router-dom";

function Header() {
  function onProfilePicClick() {
    console.log("onProfilePicClick");
  }

  return (
    <header className={styles.logo}>
      <Link className={styles.title} to="/">
        <h1>React Player</h1>
      </Link>
      <button className={styles.searchButton}>
        <FaSearch size={22} color='#9342d8'/>
      </button>
      <img className={styles.profilePic}
           src="http://dummyimage.com/40x40.png/ff4444/ffffff"
           alt="Profile picture"
           onClick={onProfilePicClick}
      />
    </header>
  )
}

export default Header;

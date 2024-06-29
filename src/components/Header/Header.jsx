import styles from './Header.module.css';
import {FaSearch} from 'react-icons/fa';
import {Link} from "react-router-dom";
import {useState} from "react";

function Header({showSearchButton, userName}) {
  const [isProfilePicHovered, setIsProfilePicHovered] = useState(false);

  function profilePicHovered() {
    setIsProfilePicHovered(true);
  }

  function profilePicNotHovered() {
    setIsProfilePicHovered(false);
  }

  return (
    <header className={styles.logo}>
      <Link className={styles.title} to="/">
        <h1>React Player</h1>
      </Link>

      {showSearchButton &&
        <button className={styles.searchButton}>
          <FaSearch size={22} color='#9342d8'/>
        </button>
      }

      <Link to="/login" className={styles.profile}>
        <div className={styles.profileInfo}>
          {isProfilePicHovered &&
            <p className={styles.userName}>{userName}</p>
          }
          <img className={styles.profilePic}
               onMouseEnter={profilePicHovered}
               onMouseLeave={profilePicNotHovered}
               src="http://dummyimage.com/40x40.png/ff4444/ffffff"
               alt="Profile picture"
          />
        </div>
      </Link>
    </header>
  )
}

export default Header;

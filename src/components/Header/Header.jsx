import styles from './Header.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import AppTitle from "../AppTitle/AppTitle.jsx";

function Header({showSearchButton, userName}) {
  const [isProfilePicHovered, setIsProfilePicHovered] = useState(false);

  function profilePicHovered() {
    setIsProfilePicHovered(true);
  }

  function profilePicNotHovered() {
    setIsProfilePicHovered(false);
  }

  return (
    <div className={styles.header}>
      <AppTitle/>
      <SearchBar/>
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
    </div>
  )
}

export default Header;

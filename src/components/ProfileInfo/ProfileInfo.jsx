import styles from "./ProfileInfo.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function ProfileInfo({username}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to="/login" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.profileInfo}>
        {isHovered &&
          <p className={styles.username}>{username}</p>
        }
        <img className={styles.profilePicture} src="http://dummyimage.com/40x40.png/ff4444/ffffff"
             alt="Profile picture"
        />
      </div>
    </Link>
  );
}

export default ProfileInfo;

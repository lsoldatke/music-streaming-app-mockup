import styles from './Header.module.css';
import SearchBar from "../SearchBar/SearchBar.jsx";
import AppTitle from "../AppTitle/AppTitle.jsx";
import ProfileInfo from "../ProfileInfo/ProfileInfo.jsx";

function Header({username}) {
  return (
    <div className={styles.header}>
      <AppTitle/>
      <SearchBar/>
      <ProfileInfo username={username}/>
    </div>
  );
}

export default Header;

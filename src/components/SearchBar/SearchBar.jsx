import {useState} from "react";
import styles from "./SearchBar.module.css";
import {FaSearch} from "react-icons/fa";

function SearchBar() {
  const [searchedPhrase, setSearchedPhrase] = useState('');

  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" placeholder="Search for something..."/>
      <button className={styles.searchButton}><FaSearch/></button>
    </div>
  );
}

export default SearchBar;

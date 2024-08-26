import {useState} from "react";
import styles from "./SearchBar.module.css";
import {FaSearch} from "react-icons/fa";

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchedPhrase, setSearchedPhrase] = useState('');

  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} type="text" onMouseEnter={() => setIsExpanded(true)}
             onMouseLeave={() => setIsExpanded(false)} placeholder="Search for something..."/>
      <button className={styles.searchButton}><FaSearch/></button>
    </div>
  );
}

export default SearchBar;

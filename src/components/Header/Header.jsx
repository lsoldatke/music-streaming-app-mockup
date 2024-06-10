import styles from './Header.module.css';
import {FaSearch} from 'react-icons/fa';

function Header() {
  return (
    <header className={styles.logo}>
      <h1>React Player</h1>
      <button>
        <FaSearch size={22} color='#9342d8'/>
      </button>
    </header>
  )
}

export default Header;

import styles from './Browser.module.css';
import {BiLibrary} from "react-icons/bi";
import {IoMdAdd} from "react-icons/io";


function Browser() {
  return (
    <nav>
      <header>
        <BiLibrary size={24}/>
        <h2>Library</h2>
        <IoMdAdd className={styles.addButton}/>
      </header>
      <div></div>
    </nav>
  )
}

export default Browser;

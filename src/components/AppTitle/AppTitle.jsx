import styles from "./AppTitle.module.css";
import {Link} from "react-router-dom";

function AppTitle() {
  return (
    <Link to="/">
      <h1 className={styles.appTitle}>React Player</h1>
    </Link>
  );
}

export default AppTitle;

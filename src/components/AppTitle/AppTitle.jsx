import styles from "./AppTitle.module.css";
import {Link} from "react-router-dom";

function AppTitle() {
  return (
    <Link to="/" className={styles.appTitle}>
      <h1>React Player</h1>
    </Link>
  );
}

export default AppTitle;

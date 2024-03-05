import { Link } from "react-router-dom";
import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <div className={styles.item}>
          <img src="./logo.png" alt="widewings logo" />
          <h2>Flyaway</h2>
        </div>
      </Link>
    </div>
  );
}

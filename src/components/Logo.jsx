import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
    return (
      <Link to={"/"} className={styles.logo}>
        <img src="/avatar-sk1.png" alt="My Travel Spots logo" className={styles.logo} />
      </Link>
    );
}

export default Logo;

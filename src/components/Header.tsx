import { NavLink } from "react-router-dom";
import styles from "../styles/PageNav.module.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className="flex flex-row justify-between">
        <li className="mx-12 text-2xl font-bold uppercase">
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li className="mx-12 text-2xl font-bold uppercase">
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

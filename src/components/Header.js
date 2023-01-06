import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav id={styles.navbar}>
        <div className="container">
          <h1 className={styles.logo}>
            <NavLink to="/welcome">HNZ</NavLink>
          </h1>
          <ul>
            <li>
              <NavLink to="/welcome" activeClassName={styles.current}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={styles.current}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName={styles.current}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

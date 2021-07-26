import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as FFF } from "../../icons/icon.svg";
import { ReactComponent as LLL } from "../../icons/login.svg";
import { ReactComponent as Logo } from "../../icons/Frame.svg";
import { ReactComponent as LLLL } from "../../icons/Group1.svg";

import styles from "./NavBar.module.scss";

const NavBar = () => (
  <nav className={styles.container}>
    <div className={styles.navbar}>
      <Link to="/users" className={styles.navbar__logo}>
        <Logo />
      </Link>
      <div className={styles.navbar__menu}>
        <FFF />
        <Link to="table_tablick" className={styles.navbar__menu__table_tablick}>
          <LLLL />
        </Link>
      </div>
      <div className={styles.navbar__log}>
        <LLL />
      </div>
    </div>
  </nav>
);

export default NavBar;

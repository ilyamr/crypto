import React from "react";

import { ReactComponent as Logo } from "../../icons/Frame.svg";
import { ReactComponent as LLLL } from "../../icons/Group1.svg";
import { ReactComponent as FFF } from "../../icons/icon.svg";
import { ReactComponent as LLL } from "../../icons/login.svg";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <Logo />
        </div>
        <div className={styles.navbar__menu}>
          <FFF />
          <LLLL />
        </div>
        <div className={styles.navbar__log}>
          <LLL />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

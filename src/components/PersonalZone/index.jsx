import React from "react";
import PropTypes from "prop-types";

import UserComponent from "../UserComponent";

import styles from "./PersonalZone.module.scss";

const PersonalZone = ({ main, children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.main__header}>
        <p className={styles.main__header__page_title}>
          {main ? "Overview" : "Main"}
        </p>
        <UserComponent />
      </div>
      <div>{children}</div>
    </main>
  );
};

PersonalZone.propTypes = {
  main: PropTypes.bool,
  children: PropTypes.any,
};

PersonalZone.defaultProps = {
  main: false,
};

export default PersonalZone;

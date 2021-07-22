import React from "react";

import styles from "./CrypContainer.module.scss";

const CrypContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default CrypContainer;

import React from "react";
import PropTypes from "prop-types";

import { renderGainers, renderRow } from "../../utils";
import { DropDown } from "../index";

import styles from "./CryptoTable.module.scss";

const CryptoTable = ({ tablickIsDown }) => {
  return (
    <div className={styles.tablick}>
      <div className={styles.tablick__filtered}>
        <p className={styles.tablick__filtered__title}>
          Market is down {tablickIsDown}
        </p>
        <div className={styles.tablick__filtered_btns}>
          <DropDown renderRow={renderRow} />
          <DropDown renderRow={renderGainers} />
        </div>
      </div>
      <div className={styles.tablick__titles}>
        <p className={styles.tablick__titles__name}>Name</p>
        <p className={styles.tablick__titles__price}>Price</p>
        <p className={styles.tablick__titles__chanee}>Chanee</p>
        <p className={styles.tablick__titles__market}>Market Cap</p>
        <p className={styles.tablick__titles__watch}>Watch</p>
      </div>
    </div>
  );
};

CryptoTable.propTypes = {
  tablickIsDown: PropTypes.string,
};

CryptoTable.defaultProps = {
  tablickIsDown: "0.80%",
};

export default CryptoTable;

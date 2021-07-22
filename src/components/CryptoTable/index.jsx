import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as UserArrow } from "../../icons/userclickicon.svg";

import styles from "./CryptoTable.module.scss";

const CryptoTable = ({ tablickIsDown, tablick_count }) => {
  return (
    <div className={styles.tablick}>
      <div className={styles.tablick__filtered}>
        <p className={styles.tablick__filtered__title}>
          Market is down {tablickIsDown}
        </p>
        <div className={styles.tablick__filtered_btns}>
          <button
            value={tablick_count}
            className={styles.tablick__filtered_btns__count}
          >
            {tablick_count}h <UserArrow />
          </button>
          <button className={styles.tablick__filtered_btns__sortid}>
            Top gainers <UserArrow />
          </button>
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
  tablick_count: PropTypes.string,
};

CryptoTable.defaultProps = {
  tablickIsDown: "0.80%",
  tablick_count: "24",
};

export default CryptoTable;

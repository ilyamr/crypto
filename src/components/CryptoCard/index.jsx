import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Setting } from "../../icons/threepuls.svg";

import styles from "./CryptoCard.module.scss";

const CryptoCard = ({ cryptovalute, cryptoSort, crypChangeUSD, procent }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__cryp_sort}>
        <p className={styles.card__cryp_sort__value}>
          {cryptovalute} {cryptoSort}
        </p>
        <Setting />
      </div>
      <span className={styles.card__changes}>$ {crypChangeUSD}</span>
      <div className={styles.card__procent_block}>
        <div className={styles.card__procent_block__valute}>
          <img src="/images/btc.png" alt="ddd" />
        </div>
        <p className={styles.card__procent_block__value}>{procent}</p>
      </div>
    </div>
  );
};

CryptoCard.propTypes = {
  children: PropTypes.any,
  procent: PropTypes.string,
  cryptoSort: PropTypes.string,
  cryptovalute: PropTypes.string,
  crypChangeUSD: PropTypes.string,
};

CryptoCard.defaultProps = {
  cryptoSort: "ETH",
  procent: "+ 0.14%",
  cryptovalute: "1.25",
  crypChangeUSD: "2948.04",
};

export default CryptoCard;

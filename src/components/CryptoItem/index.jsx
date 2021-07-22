import React, { useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Watch } from "../../icons/watch.svg";

import styles from "./CryptoItem.module.scss";

const CryptoItem = ({ title, subname, src, price, chanee, market_cap }) => {
  const [watch, setWatch] = useState(false);

  const favoriteCrypto = () => {
    setWatch(!watch);
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__name}>
        <div className={styles.item__name__logo}>
          <img
            alt="i"
            src={`/images/${src}`}
            className={styles.item__name__logo__img}
          />
        </div>
        <div className={styles.item__name__block}>
          <p className={styles.item__name__block__title}>{title}</p>
          <span className={styles.item__name__block__subname}>{subname}</span>
        </div>
      </div>
      <p className={styles.item__price}>${price}</p>
      <p className={styles.item__chanee}>{chanee}%</p>
      <p className={styles.item__market}>${market_cap}</p>
      <button onClick={favoriteCrypto} className={styles.item__watch}>
        <Watch className={watch ? styles.item__watch__icon : null} />
      </button>
    </div>
  );
};

CryptoItem.propTypes = {
  src: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  chanee: PropTypes.string,
  subname: PropTypes.string,
  market_cap: PropTypes.string,
};

CryptoItem.defaultProps = {
  src: "band-protocol.png",
  price: "0.0184",
  subname: "BAND",
  chanee: "+13.38",
  market_cap: "399.8",
  title: "Band Protocol",
};

export default CryptoItem;

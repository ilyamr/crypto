import React from "react";
import shortid from "shortid";

import {
  CryptoItem,
  CryptoCard,
  CryptoTable,
  StatistickTable,
} from "../../components";
import { cryptodata } from "../../utils";

import styles from "./TablickContainer.module.scss";

const TablickContainer = () => {
  const renderItems = cryptodata.map((item) => (
    <CryptoItem
      key={shortid.generate()}
      src={item.src}
      price={item.price}
      subname={item.subname}
      chanee={item.chanee}
      market_cap={item.market_cap}
      title={item.title}
    />
  ));

  return (
    <div className={styles.visual}>
      <div className={styles.visual__statick_cards}>
        <StatistickTable />
        <CryptoCard />
        <CryptoCard />
        <CryptoCard />
      </div>
      <div className={styles.visual__tablick}>
        <div className={styles.visual__tablick__container}>
          <CryptoTable />
          {renderItems}
        </div>
        <div className={styles.visual__tablick__cards_container}>
          <CryptoCard />
          <CryptoCard />
        </div>
      </div>
    </div>
  );
};

export default TablickContainer;

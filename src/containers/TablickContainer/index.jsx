import React, { useState, useEffect } from "react";
import shortid from "shortid";

import {
  CryptoItem,
  CryptoCard,
  CryptoTable,
  StatistickTable,
} from "../../components";
import { useWindowSize } from "../../hooks";
import { cryptodata, cryptocard } from "../../utils";

import styles from "./TablickContainer.module.scss";

const TablickContainer = () => {
  const [diplayRender, setDiplayRender] = useState(2);

  const windowSize = useWindowSize().windowWidth;

  useEffect(() => {
    if (windowSize <= 950) {
      setDiplayRender(cryptocard.length);
    } else if (windowSize >= 950) {
      setDiplayRender(2);
    }
  }, [windowSize]);

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

  const renderCrypto = cryptocard
    .slice(0, diplayRender)
    .map((item) => (
      <CryptoCard
        key={item.id}
        src={item.src}
        procent={item.procent}
        cryptoSort={item.cryptoSort}
        cryptovalute={item.cryptovalute}
        crypChangeUSD={item.crypChangeUSD}
      />
    ));

  const renderCryptoCard = cryptocard
    .slice(diplayRender)
    .map((item) => (
      <CryptoCard
        key={item.id}
        src={item.src}
        procent={item.procent}
        cryptoSort={item.cryptoSort}
        cryptovalute={item.cryptovalute}
        crypChangeUSD={item.crypChangeUSD}
      />
    ));

  return (
    <div className={styles.visual}>
      <div className={styles.visual__statick_cards}>
        <StatistickTable />
        <div className={styles.visual__statick_cards__card}>{renderCrypto}</div>
      </div>
      <div className={styles.visual__tablick}>
        <div className={styles.visual__tablick__container}>
          <CryptoTable />
          {renderItems}
        </div>
        <div className={styles.visual__tablick__cards_container}>
          {renderCryptoCard}
        </div>
      </div>
    </div>
  );
};

export default TablickContainer;

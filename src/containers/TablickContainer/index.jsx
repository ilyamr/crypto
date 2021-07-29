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
  const [otherApi, setOtherApi] = useState([]);

  const RUARL = "https://api.coingecko.com/api/v3/coins";

  useEffect(() => {
    fetch(RUARL)
      .then((response) => response.json())
      .then((resp) => setOtherApi(resp));
  }, []);

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

  const renderCrypto = otherApi.slice(0, diplayRender).map((item) => {
    const chaneeHandler = () => {
      if (
        item.market_data.price_change_percentage_24h.toString().slice(0, 1) !==
        "-"
      ) {
        return `+${item.market_data.price_change_percentage_24h}`;
      } else {
        return item.market_data.price_change_percentage_24h;
      }
    };
    return (
      <CryptoCard
        key={item.id}
        src={item.image.small}
        procent={chaneeHandler()}
        cryptoSort={item.symbol}
        cryptovalute={item.market_data.market_cap_rank}
        crypChangeUSD={item.market_data.current_price.usd}
      />
    );
  });

  const renderCryptoCard = otherApi.slice(diplayRender).map((item) => {
    const chaneeHandler = () => {
      if (
        item.market_data.price_change_percentage_24h.toString().slice(0, 1) !==
        "-"
      ) {
        return `+${item.market_data.price_change_percentage_24h}`;
      } else {
        return item.market_data.price_change_percentage_24h;
      }
    };
    return (
      <CryptoCard
        key={item.id}
        src={item.image.small}
        procent={chaneeHandler()}
        cryptoSort={item.symbol}
        cryptovalute={item.market_data.market_cap_rank}
        crypChangeUSD={item.market_data.current_price.usd}
      />
    );
  });

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

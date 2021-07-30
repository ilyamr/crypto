import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CryptoItem,
  CryptoCard,
  CryptoTable,
  StatistickTable,
} from "../../components";
import { useWindowSize } from "../../hooks";
import { authActions } from "../../store/actions";
import { cryptoSelector } from "../../store/selectors";

import styles from "./TablickContainer.module.scss";

const TablickContainer = () => {
  const [displayRender, setDisplayRender] = useState(2);

  const selectCrypto = useSelector(cryptoSelector.cryptoApi);
  const selectCryptoProcent = useSelector(cryptoSelector.cryptoProcent);

  const dispatch = useDispatch();

  const windowSize = useWindowSize().windowWidth;

  useEffect(() => {
    dispatch(authActions.getCoinList());
    dispatch(authActions.getCoinProcent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (windowSize <= 950) {
      setDisplayRender(selectCrypto.length);
    } else if (windowSize >= 950) {
      setDisplayRender(2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  const renderItems = selectCrypto.map((item) => {
    const chaneeHandler = () => {
      if (
        item.market_data.price_change_percentage_24h.toString().slice(0, 1) !==
        "-"
      ) {
        return `+ ${item.market_data.price_change_percentage_24h}`;
      } else if (
        item.market_data.price_change_percentage_24h.toString().slice(0, 1) ===
        "-"
      ) {
        return `${item.market_data.price_change_percentage_24h
          .toString()
          .slice(0, 1)} ${item.market_data.price_change_percentage_24h
          .toString()
          .slice(1)}`;
      }
    };
    return (
      <CryptoItem
        key={item.id}
        title={item.name}
        subname={item.symbol}
        src={item.image.small}
        chanee={chaneeHandler()}
        price={item.market_data.current_price.usd}
        market_cap={item.market_data.market_cap_rank}
      />
    );
  });

  const renderCrypto = selectCrypto.slice(0, displayRender).map((item) => {
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
        cryptoSort={item.symbol}
        procent={chaneeHandler()}
        cryptovalute={item.market_data.market_cap_rank}
        crypChangeUSD={item.market_data.current_price.usd}
      />
    );
  });

  const renderCryptoCard = selectCrypto.slice(displayRender).map((item) => {
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
        cryptoSort={item.symbol}
        procent={chaneeHandler()}
        cryptovalute={item.market_data.market_cap_rank}
        crypChangeUSD={item.market_data.current_price.usd}
      />
    );
  });

  return (
    <div className={styles.visual}>
      {selectCrypto.length ? (
        <>
          <div className={styles.visual__statick_cards}>
            <StatistickTable />
            <div className={styles.visual__statick_cards__card}>
              {renderCrypto}
            </div>
          </div>
          <div className={styles.visual__tablick}>
            <div className={styles.visual__tablick__container}>
              <CryptoTable
                tablickIsDown={
                  selectCryptoProcent !== 0
                    ? `Market is down ${selectCryptoProcent}%`
                    : "No information about global procent"
                }
              />
              {renderItems}
            </div>
            <div className={styles.visual__tablick__cards_container}>
              {renderCryptoCard}
            </div>
          </div>
        </>
      ) : (
        <img
          alt="animation"
          className={styles.visual__animation}
          src="http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
        />
      )}
    </div>
  );
};

export default TablickContainer;

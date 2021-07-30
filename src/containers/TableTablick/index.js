import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../store/actions";
import { cryptoSelector } from "../../store/selectors";
import { PersonalZone, CryptoTable, CryptoItem } from "../../components";

import styles from "./TableTablick.module.scss";

const TableTablick = () => {
  const selectCrypto = useSelector(cryptoSelector.cryptoApi);
  const selectCryptoProcent = useSelector(cryptoSelector.cryptoProcent);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.getCoinList());
    dispatch(authActions.getCoinProcent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItems = selectCrypto?.map((item) => {
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

  return (
    <PersonalZone main>
      <div className={styles.table_tablick}>
        {selectCrypto.length ? (
          <>
            <CryptoTable
              tablickIsDown={
                selectCryptoProcent !== 0
                  ? `Market is down ${selectCryptoProcent}%`
                  : "No information about global procent"
              }
            />
            {renderItems}
          </>
        ) : (
          <img
            alt="d"
            className={styles.table_tablick__animation}
            src="http://habrastorage.org/files/7cd/799/944/7cd79994458f4fc6a9345aa7444650a3.png"
          />
        )}
      </div>
    </PersonalZone>
  );
};

export default TableTablick;

import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import { PersonalZone, CryptoTable, CryptoItem } from "../../components";

import styles from "./TableTablick.module.scss";

const TableTablick = () => {
  const [otherApi, setOtherApi] = useState([]);

  // const dispatch = useDispatch();

  const RUARL = "https://api.coingecko.com/api/v3/coins";

  useEffect(() => {
    fetch(RUARL)
      .then((response) => response.json())
      .then((resp) => setOtherApi(resp));
  }, []);

  const renderItems = otherApi?.map((item) => {
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
        {otherApi.length ? (
          <>
            <CryptoTable />
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

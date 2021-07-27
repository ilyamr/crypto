import React from "react";
import shortid from "shortid";

import { cryptodata } from "../../utils";
import { PersonalZone, CryptoTable, CryptoItem } from "../../components";

import styles from "./TableTablick.module.scss";

const TableTablick = () => {
  const renderItems = cryptodata.map((item) => (
    <CryptoItem
      src={item.src}
      price={item.price}
      title={item.title}
      chanee={item.chanee}
      subname={item.subname}
      key={shortid.generate()}
      market_cap={item.market_cap}
    />
  ));

  // https://api.coingecko.com/api/v3/coins/list  ||||||||
  // (title: name) (subname: symbol) (id: id)
  // Coin title         + TODAY
  // Coin subname       + TODAY
  // Coin id            + TODAY
  // https://api.coingecko.com/api/v3/coins/${id}  ||||||
  // (src: image)  (market_cap: market_cap_rank) (chanee: market_data.price_change_percentage_24h)
  // Coin img           + TODAY
  // Coin market cap    + TODAY
  // Coin chanee ach    + TODAY
  // Coin price         +++(price: tickers[0].converted_last.usd)
  /////////////////////////////////////////////////////

  return (
    <PersonalZone main>
      <div className={styles.table_tablick}>
        <CryptoTable />
        {renderItems}
      </div>
    </PersonalZone>
  );
};

export default TableTablick;

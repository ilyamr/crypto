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

  const bbbb = [];
  console.log(bbbb);

  //exchange: 2,---- derivatives: 2, exchange_rates: `1`, global: 1
  // Coin name          -
  // Coin id            -
  // Coin img           +  "derivatives 2" ::::  image
  // Coin chanee ach
  // Coin price         +  "global: 1, exchange"
  // Coin market cap
  /////////////////////////////////////////////////////
  //              PRIMARY           array[ALL].length === 6
  // Coin name                  Bit Coin
  // Coin id                    BTC
  // Coin img                   https://url/image/size....
  // Coin chanee ach            + && - 7.5%
  // Coin price                 $56.9
  // Coin market cap            $399.8M
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

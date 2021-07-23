import React from "react";

import {
  // Login,
  NavBar,
  // Register,
  PersonalZone,
  CrypContainer,
} from "./components";
import { TablickContainer } from "./containers";

import styles from "./globalStyles.module.scss";

const App = () => {
  return (
    <CrypContainer>
      <section className={styles.global}>
        <NavBar />
        <PersonalZone>
          <TablickContainer />
        </PersonalZone>
      </section>
      {/* <div className={styles.log_in}>
        <Register />
        <Login />
      </div> */}
    </CrypContainer>
  );
};

export default App;

import React from "react";

import { CrypContainer, NavBar, PersonalZone } from "./components";
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
    </CrypContainer>
  );
};

export default App;

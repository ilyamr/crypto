import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Registr, LogIn, TablickContainer } from "./containers";
import { NavBar, PersonalZone, CrypContainer } from "./components";

import styles from "./globalStyles.module.scss";

const App = () => {
  return (
    <CrypContainer>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registr />
          </Route>
          <Route path="/users">
            <section className={styles.global}>
              <NavBar />
              <PersonalZone>
                <TablickContainer />
              </PersonalZone>
            </section>
          </Route>
        </Switch>
      </Router>
    </CrypContainer>
  );
};

export default App;

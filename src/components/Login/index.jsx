import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../utils";

import styles from "./Login.module.scss";

const Login = ({ emailValue, emailChange, passwordValue, passwordChange }) => {
  return (
    <section>
      <div className={styles.login}>
        <h1 className={styles.login__title}>Login</h1>
        <input
          value={emailValue}
          onChange={emailChange}
          type="text"
          placeholder="Email"
          className={styles.login__email}
        />
        <input
          value={passwordValue}
          onChange={passwordChange}
          type="password"
          placeholder="Password"
          className={styles.login__password}
        />
        <button className={styles.login__log_btn}>Login</button>
        <button className={styles.login__reg_btn}>Register</button>
        <span className={styles.login__frgt_btn}>Forgot Password</span>
      </div>
    </section>
  );
};

Login.propTypes = {
  emailChange: PropTypes.func,
  emailValue: PropTypes.string,
  passwordChange: PropTypes.func,
  passwordValue: PropTypes.string,
};

Login.defaultProps = {
  emailValue: "",
  emailChange: noop,
  passwordValue: "",
  passwordChange: noop,
};

export default Login;

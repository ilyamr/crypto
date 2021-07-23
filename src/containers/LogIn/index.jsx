import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { noop } from "../../utils";

import styles from "./Login.module.scss";

const Login = ({ emailValue, emailChange, passwordValue, passwordChange }) => {
  const [ourUser, setOurUser] = useState(false);

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <input
        type="text"
        value={emailValue}
        placeholder="Email"
        onChange={emailChange}
        className={styles.login__email}
      />
      <input
        type="password"
        value={passwordValue}
        placeholder="Password"
        onChange={passwordChange}
        clas
        sName={styles.login__password}
      />
      <Link className={styles.login__log_btn} to="/users">
        Login
      </Link>
      <Link to="/registration" className={styles.login__reg_btn}>
        Register
      </Link>
      <span className={styles.login__frgt_btn}>Forgot Password</span>
    </div>
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

import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import { noop } from "../../utils";

import styles from "./Login.module.scss";

const Login = () => {
  const [ourUser, setOurUser] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const emailHandler = (e) => {
    setEmailValue(e.target.value.trim());
  };

  const passwordHandler = (e) => {
    setPasswordValue(e.target.value.trim());
  };

  useEffect(() => {
    if (emailValue.trim() !== "" && passwordValue.trim() !== "") {
      setOurUser(!ourUser);
    }
  }, [emailValue, passwordValue]);

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <input
        type="email"
        value={emailValue}
        placeholder="Email"
        onChange={emailHandler}
        className={styles.login__email}
      />
      <input
        type="password"
        value={passwordValue}
        placeholder="Password"
        onChange={passwordHandler}
        className={styles.login__password}
      />
      <Link
        className={ourUser ? styles.login__log_btn : styles.login__disabled_btn}
        title={ourUser ? "Allow" : "Disabled"}
        to={ourUser ? "/users" : ""}
        type="button"
      >
        Login
      </Link>
      <Link className={styles.login__reg_btn} to="/registration">
        Register
      </Link>
      {/* <span className={styles.login__frgt_btn}>Forgot Password</span> */}
    </div>
  );
};

// Login.propTypes = {
//  passwordValue: PropTypes.string,
// };

// Login.defaultProps = {
//  passwordChange: noop,
// };

export default Login;

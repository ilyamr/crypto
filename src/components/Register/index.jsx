import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../utils";

import styles from "./Register.module.scss";

const Register = ({
  regEmailValue,
  regEmailChange,
  regPasswordValue,
  regPasswordChange,
}) => {
  return (
    <section>
      <div className={styles.register}>
        <h1 className={styles.register__title}>Register</h1>
        <button className={styles.register__upload}>
          <span className={styles.register__upload__title}>Upload Image</span>
        </button>
        <input
          value={regEmailValue}
          onChange={regEmailChange}
          type="text"
          placeholder="Email"
          className={styles.register__email}
        />
        <input
          value={regPasswordValue}
          onChange={regPasswordChange}
          type="password"
          placeholder="Password"
          className={styles.register__password}
        />
        <button className={styles.register__log_btn}>Login</button>
        <button className={styles.register__reg_btn}>Register</button>
      </div>
    </section>
  );
};

Register.propTypes = {
  regEmailChange: PropTypes.func,
  regEmailValue: PropTypes.string,
  regPasswordChange: PropTypes.func,
  regPasswordValue: PropTypes.string,
};

Register.defaultProps = {
  regEmailValue: "",
  regEmailChange: noop,
  regPasswordValue: "",
  regPasswordChange: noop,
};

export default Register;

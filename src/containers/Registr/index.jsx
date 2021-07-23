import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { noop } from "../../utils";
import { UploadPhoto } from "../../components";

import styles from "./Register.module.scss";

const Register = ({
  regEmailValue,
  regEmailChange,
  regPasswordValue,
  regPasswordChange,
}) => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <UploadPhoto />
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
      <Link to="/users" className={styles.register__log_btn}>
        Login
      </Link>
      <Link to="/registration" className={styles.register__reg_btn}>
        Register
      </Link>
    </div>
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

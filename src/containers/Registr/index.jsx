import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { UploadPhoto } from "../../components";

import styles from "./Register.module.scss";

const Register = () => {
  const [register, setRegister] = useState(false);

  const [regEmailValue, setRegEmailValue] = useState("");
  const [regPasswordValue, setRegPasswordValue] = useState("");

  const regEmailChange = (e) => {
    setRegEmailValue(e.target.value);
  };

  const regPasswordChange = (e) => {
    setRegPasswordValue(e.target.value);
  };

  useEffect(() => {
    if (regEmailValue.trim() !== "" && regPasswordValue.trim() !== "") {
      setRegister(true);
    } else if (regEmailValue.trim() === "" || regPasswordValue.trim() === "") {
      setRegister(false);
    }
  }, [regEmailValue, regPasswordValue]);

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <UploadPhoto />
      <input
        value={regEmailValue}
        onChange={regEmailChange}
        type="email"
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
      <Link
        to={register ? "/users" : "/registration"}
        className={
          register ? styles.register__reg_btn : styles.register__disabled_btn
        }
      >
        Registration
      </Link>
    </div>
  );
};

export default Register;

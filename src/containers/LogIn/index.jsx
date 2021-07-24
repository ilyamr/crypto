import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Eye } from "../../icons/eye.svg";
import { ReactComponent as EyeDisabled } from "../../icons/eyedisabled.svg";

import styles from "./Login.module.scss";

const Login = () => {
  const [ourUser, setOurUser] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("@gmail.com");

  const emailHandler = (e) => {
    setEmailValue(e.target.value.trim());
  };

  const passwordHandler = (e) => {
    setPasswordValue(e.target.value.trim());
  };

  useEffect(() => {
    if (emailValue.trim() !== "" && passwordValue.trim() !== "") {
      setOurUser(true);
    } else if (emailValue.trim() === "" || passwordValue.trim() === "") {
      setOurUser(false);
    }
  }, [emailValue, passwordValue]);

  const isHoverHandler = () => {
    setIsHover(!isHover);
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <form className={styles.login__form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={emailValue}
          placeholder="Email"
          onChange={emailHandler}
          className={styles.login__form__email}
        />

        <div className={styles.login__form__pswblock}>
          <input
            value={passwordValue}
            placeholder="Password"
            maxLength="10"
            size="6"
            onChange={passwordHandler}
            type={isHover ? "text" : "password"}
            className={styles.login__form__pswblock__password}
          />

          {isHover ? (
            <Eye
              type="button"
              onClick={isHoverHandler}
              className={styles.login__form__pswblock_eye}
            />
          ) : (
            <EyeDisabled
              type="button"
              onClick={isHoverHandler}
              className={styles.login__form__pswblock_eye}
            />
          )}
        </div>
        <Link
          className={
            ourUser
              ? styles.login__form__log_btn
              : styles.login__form__disabled_btn
          }
          title={ourUser ? "Allow" : "Disabled"}
          to={ourUser ? "/users" : ""}
          type="button"
        >
          Login
        </Link>
      </form>

      <Link className={styles.login__reg_btn} to="/registration">
        Register
      </Link>
    </div>
  );
};

export default Login;

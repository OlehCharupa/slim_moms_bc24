import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./../Registration/Registration.module.css";

import s from "./../Registration/form.module.css";
import { loginOperations } from "./../../redux/operations/loginOperations";
const Login = () => {
  const logState = {
    email: "",
    password: "",
  };

  const [logForm, setLogForm] = useState(logState);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setLogForm((prev) => ({ ...prev, email: e.target.value }));
    if (emailDirty) {
      setEmailDirty(false);
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value) {
      setEmailError("Поле email не может быть пустым");
    } else if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setLogForm((prev) => ({ ...prev, password: e.target.value }));
    if (passwordDirty) {
      setPasswordDirty(false);
    }
    if (!e.target.value) {
      setPasswordError("Пароль не может быть пустым");
    } else if (e.target.value.length < 6 || e.target.value.length > 16) {
      setPasswordError("Пароль должен быть длинее 6 символов и короче 16");
    } else {
      setPasswordError("");
    }
  };

  const handleBlur = ({ target }) => {
    switch (target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginOperations(logForm)); //отправлять на функцию запросна на бэк
    setLogForm(logState);
  };

  const { email, password } = logForm;

  return (
    <section className={style.section} style={{ zIndex: 50 }}>
      <h2 className={style.title}>Вход</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          <p className={style.input__title}>Email *</p>
          <input
            className={
              emailDirty && emailError ? style.input_err : s.inp__style
            }
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
            onBlur={handleBlur}
          />
        </label>

        <div className={style.contaner__err}>
          {emailDirty && emailError && (
            <p className={style.err__message}>{emailError}</p>
          )}
        </div>

        <label className={style.label}>
          <p className={style.input__title}>Пароль *</p>
          <input
            className={
              passwordDirty && passwordError ? style.input_err : s.inp__style
            }
            type="password"
            name="password"
            value={password}
            onChange={passwordHandler}
            onBlur={handleBlur}
          />
        </label>

        <div className={style.contaner__err}>
          {passwordDirty && passwordError && (
            <p className={style.err__message}>{passwordError}</p>
          )}
        </div>

        <div className={s.btn_block_flex}>
          <button disabled={!formValid} className={s.btn__in} type="submit">
            Вход
          </button>
          <button className={s.btn__reg}>Регистрация</button>
        </div>
      </form>
    </section>
  );
};

export default Login;

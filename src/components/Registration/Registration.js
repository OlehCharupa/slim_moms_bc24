import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registrationOperations } from "./../../redux/operations/registrationOperations";

import s from "./form.module.css";
import style from "./Registration.module.css";

const Registration = () => {
  const regState = {
    username: "",
    email: "",
    password: "",
  };

  const [regForm, setRegForm] = useState(regState);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Поле Еmail не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [nameError, setNameError] = useState("Поле 'Имя' не может быть пустым");
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);
  const nameHandler = (e) => {
    setRegForm((prev) => ({ ...prev, username: e.target.value }));
    if (!e.target.value) {
      setNameDirty(true);
      setNameError("Поле 'Имя' не может быть пустым");
    } else {
      setNameError("");
    }
  };
  const emailHandler = (e) => {
    setRegForm((prev) => ({ ...prev, email: e.target.value }));
    if (emailDirty) {
      setEmailDirty(false);
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value) {
      setEmailError("Поле еmail не может быть пустым");
    } else if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setRegForm((prev) => ({ ...prev, password: e.target.value }));
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
      case "name":
        setNameDirty(true);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationOperations(regForm));
    setRegForm(regState);
  };

  const { username, email, password } = regForm;

  return (
    <section className={style.section}>
      <h2 className={style.title}>Регистрация</h2>

      <form onSubmit={handleSubmit} className={style.form}>
        <label className={style.label}>
          <p className={style.input__title}>Имя *</p>
          <input
            className={nameDirty && nameError ? style.input_err : s.inp__style}
            type="text"
            name="username"
            value={username}
            onChange={nameHandler}
            onBlur={handleBlur}
          />
        </label>
        {/* дублировать стиль в ошибку и дописать лабел */}
        <div className={style.contaner__err}>
          {nameDirty && nameError && (
            <p className={style.err__message}>{nameError}</p>
          )}
        </div>

        <label className={style.label}>
          <p className={style.input__title}>Email *</p>
          <input
            className={
              emailDirty && emailError ? style.input_err : s.inp__style
            }
            type="0"
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
          <button className={s.btn__in} type="button">
            Вход
          </button>

          <button disabled={!formValid} className={s.btn__reg} type="submit">
            Регистрация
          </button>
        </div>
      </form>
    </section>
  );
};

export default Registration;
// import s from "./form.module.css";
// const Form = () => {
//   console.log(s);
//   return (
//     <div className={s.form__s}>
//       <p className={s.login_text}>вход</p>
//       <input
//         className={`${s.inp__style} ${s.s__login}`}
//         type="text"
//         placeholder="Логин *"
//       />
//       <input
//         className={`${s.inp__style} ${s.s__reg}`}
//         type="text"
//         placeholder="Пароль *"
//       />
//       <div className={s.btn_block_flex}>
//         <button className={s.btn__in}>Вход</button>
//         <button className={s.btn__reg}>Регистрация</button>
//       </div>
//     </div>
//   );
// };
// export default Form;

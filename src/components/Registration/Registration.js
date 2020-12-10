import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { registrationOperations } from "../../redux/operations/registrationOperations";
import { resetErrorRequest } from "../../redux/slice/errorRequestSlice";

import style from "./Registration.module.css";

const Registration = () => {
	const regState = {
		username: "",
		email: "",
		password: "",
	}

	const [regForm, setRegForm] = useState(regState)
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [nameDirty, setNameDirty] = useState(false)
	const [emailError, setEmailError] = useState("Поле Еmail не может быть пустым")
	const [passwordError, setPasswordError] = useState("Пароль не может быть пустым")
	const [nameError, setNameError] = useState("Поле 'Имя' не может быть пустым")
	const [formValid, setFormValid] = useState(false)
	const stateError = useSelector(state => state.errorRequest)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		if (nameError || emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [emailError, passwordError, stateError])
	const nameHandler = (e) => {
		dispatch(resetErrorRequest());
		setRegForm((prev) => ({ ...prev, username: e.target.value }))
		if (emailDirty) {
			setEmailDirty(false)
		}
		if (!e.target.value) {
			setNameError("Поле 'Имя' не может быть пустым")
		} else {
			setNameError("")
		}
	}
	const emailHandler = (e) => {
		dispatch(resetErrorRequest());
		setRegForm((prev) => ({ ...prev, email: e.target.value }))
		if (emailDirty) {
			setEmailDirty(false)
		}
		// eslint-disable-next-line no-useless-escape
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!e.target.value) {
			setEmailError("Поле еmail не может быть пустым")
		} else if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("Некорректный email")
		} else {
			setEmailError("")
		}
	}

	const passwordHandler = (e) => {
		dispatch(resetErrorRequest());
		setRegForm((prev) => ({ ...prev, password: e.target.value }))
		if (passwordDirty) {
			setPasswordDirty(false)
		}
		if (!e.target.value) {
			setPasswordError("Пароль не может быть пустым")
		} else if (e.target.value.length < 6 || e.target.value.length > 16) {
			setPasswordError("Пароль должен быть длинее 6 символов и короче 16")
		} else {
			setPasswordError("")
		}
	}
	const handleBlur = ({ target }) => {
		switch (target.name) {
			case "username":
				setNameDirty(true)
				break
			case "email":
				setEmailDirty(true)
				break
			case "password":
				setPasswordDirty(true)
				break
				default: return
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	
		dispatch(registrationOperations(regForm))
		setRegForm(regState)
	}


	const { username, email, password } = regForm

	const openPage = () => {
		history.push('/login')
	}
	return (
		<section className={style.section}>
			<h2 className={style.title}>Регистрация</h2>
			<div className={style.contaner__err}>
				{!!(stateError.indexOf('409') + 1) && <p className={style.err__message__state}>Такой email уже зарегестрирован!</p>}
				{!!(stateError.indexOf('400') + 1) && <p className={style.err__message__state}>Извините, проблеммы с сервером, повторите попытку позже!</p>}
			</div>
			<form onSubmit={handleSubmit} className={style.form}>
				<label className={style.label}>
					<p className={style.input__title}>Имя *</p>
					<input
						className={(nameDirty && nameError) ? style.input_err : style.input}
						type="text"
						name="username"
						value={username}
						onChange={nameHandler}
						onBlur={handleBlur}
					/>
				</label>

				<div className={style.contaner__err}>
					{nameDirty && nameError && <p className={style.err__message}>{nameError}</p>}
				</div>

				<label className={style.label}>
					<p className={style.input__title}>Email *</p>
					<input
						className={(emailDirty && emailError) ? style.input_err : style.input}
						type="0"
						name="email"
						value={email}
						onChange={emailHandler}
						onBlur={handleBlur}
					/>
				</label>
				<div className={style.contaner__err}>
					{emailDirty && emailError && <p className={style.err__message}>{emailError}</p>}
				</div>

				<label className={style.label}>
					<p className={style.input__title}>Пароль *</p>
					<input
						className={(passwordDirty && passwordError) ? style.input_err : style.input}
						type="password"
						name="password"
						value={password}
						onChange={passwordHandler}
						onBlur={handleBlur}
					/>
				</label>

				<div className={style.contaner__err}>
					{passwordDirty && passwordError && <p className={style.err__message}>{passwordError}</p>}
				</div>

				<div className={style.con__btns}>
					<button className={style.login__btn} type="button" onClick={openPage}>
						Вход
					</button>

					<button
						disabled={!formValid}
						className={style.registration__btn}
						type="submit">
						Регистрация
					</button>
				</div>
			</form>
		</section >
	)
}

export default Registration

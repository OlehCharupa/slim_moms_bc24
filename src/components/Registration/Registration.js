import React, { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"

import style from './Registration.module.css'

const Registration = () => {
	const regState = {
		name: "",
		email: "",
		password: "",
	}

	const [regForm, setRegForm] = useState(regState)
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [nameDirty, setNameDirty] = useState(false)
	const [emailError, setEmailError] = useState("Емейл не может быть пустым")
	const [passwordError, setPasswordError] = useState("Пароль не может быть пустым")
	const [nameError, setNameError] = useState("Поле 'Имя' не может быть пустым")
	const [formValid, setFormValid] = useState(false)
	// const dispatch = useDispatch()

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	})
	const nameHandler = (e) => {
		setRegForm((prev) => ({ ...prev, name: e.target.value }))
		if (!e.target.value) {
			setNameDirty(true)
			setNameError("Поле 'Имя' не может быть пустым")
		} else {
			setNameError("")
		}
	}
	const emailHandler = (e) => {
		setRegForm((prev) => ({ ...prev, email: e.target.value }))
		if (emailDirty) {
			setEmailDirty(false)
		}
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (!e.target.value) {
			setEmailError("Емейл не может быть пустым")
		} else if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("Некорректный емейл")
		} else {
			setEmailError("")
		}
	}

	const passwordHandler = (e) => {
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
			case "email":
				setEmailDirty(true)
				break
			case "password":
				setPasswordDirty(true)
				break
			case "name":
				setNameDirty(true)
				break
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// dispatch(authOperations.Registration(regForm));//отправлять на функцию запросна на бэк
		setRegForm(regState)
	}

	const { name, email, password } = regForm

	return (
		<section className={style.section}>
			<h2 className={style.title}>Регистрация</h2>

			<form onSubmit={handleSubmit} className={style.form}>
				<label className={style.label}>
					<p className={style.input__title}>Имя *</p>
					<input
						className={(nameDirty && nameError) ? style.input_err : style.input}
						type="text"
						name="name"
						value={name}
						onChange={nameHandler}
						onBlur={handleBlur}
					/>
				</label>

				<div className={style.contaner__err}>
					{nameDirty && nameError && <p className={style.err__message}>{nameError}</p>}
				</div>

				<label className={style.label}>
					<p className={style.input__title}>Логин *</p>
					<input
						className={(emailDirty && emailError) ? style.input_err : style.input}
						type="email"
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
					<button className={style.login__btn} type="button">
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

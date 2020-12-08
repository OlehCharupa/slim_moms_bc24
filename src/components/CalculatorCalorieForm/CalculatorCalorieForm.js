import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calorie from "./CalculatorCalorieForm.module.css";
import {userIdSelector, userTokenSelector} from '../../redux/selectors/selectors'

import { DailyCaloriesFormOperation, DailyCaloriesFormOperationById } from "../../redux/operations/DailyCaloriesFormOperation";

const CalculatorCalorieForm = () => {
  const [values, setValues] = useState({
    weight: "",
    height: "",
    age: "",
    desiredWeight: "",
    bloodType: "1",
  });

  const [errors, setErrors] = useState({
    height: `Поле не заполнено`,
    age: `Поле не заполнено`,
    weight: `Поле не заполнено`,
    desiredWeight: `Поле не заполнено`,
  });

  const [focused, setFocused] = useState({
    height: false,
    age: false,
    weight: false,
    desiredWeight: false,
  });

  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const userId = useSelector(state => userIdSelector(state))
  const userToken = useSelector(state => userTokenSelector(state))

  const blurHandler = (e) => {
    const { name } = e.target;
    switch (name) {
      case `height`:
        setFocused((prev) => ({...prev, [name]: true }));
        break;
      case `age`:
        setFocused((prev) => ({...prev, [name]: true }));
        break;
      case `weight`:
        setFocused((prev) => ({...prev, [name]: true }));
        break;
      case `desiredWeight`:
        setFocused((prev) => ({...prev, [name]: true }));
        break;
        default: return;
    }
  };

  const inputHeandler = ({ target }) => {
    const { name, value } = target;
    setValues((state) => ({ ...state, [name]: value }));
    if (!Number.isInteger(value / 1)) {
        setErrors(prev=>({...prev, [name]: `Введите целое число` }));
      } else if(Number(value) < 0){
        setErrors(prev=>({...prev, [name]: `Введите положительное число` }));
    } else if(!value){
      setErrors(prev=>({...prev, [name]: `Поле не заполнено` }));
    } else if( name === `height`){
      if(Number(value) < 100){
        setErrors(prev=>({...prev, [name]: `Введённое число меньше допустимого` }));
      } else if(Number(value) > 250){
        setErrors(prev=>({...prev, [name]: `Введённое число больше допустимого` }));
      } else {
        setErrors(prev=>({...prev, [name]: false }));
      }
    } else if( name === `weight`){
      if(Number(value) < 20){
        setErrors(prev=>({...prev, [name]: `Введённое число меньше допустимого` }));
      } else if(Number(value) > 500){
        setErrors(prev=>({...prev, [name]: `Введённое число больше допустимого` }));
      } else {
        setErrors(prev=>({...prev, [name]: false }));
      }
    } else if( name === `age`){
      if(Number(value) < 18){
        setErrors(prev=>({...prev, [name]: `Введённое число меньше допустимого` }));
      } else if(Number(value) > 100){
        setErrors(prev=>({...prev, [name]: `Введённое число больше допустимого` }));
      } else {
        setErrors(prev=>({...prev, [name]: false }));
      }
    } else if( name === `desiredWeight`){
      if(Number(value) < 20){
        setErrors(prev=>({...prev, [name]: `Введённое число меньше допустимого` }));
      } else if(Number(value) > 500){
        setErrors(prev=>({...prev, [name]: `Введённое число больше допустимого` }));
      } else {
        setErrors(prev=>({...prev, [name]: false }));
      }
    }
  };

  useEffect(()=>{
    Object.values(errors).every(item => item === false) ? setDisable(false) : setDisable(true)
  },[errors])

  const submitHeandler = (e) => {
    e.preventDefault();
    userToken ? dispatch(DailyCaloriesFormOperationById(values, userId, userToken)) : dispatch(DailyCaloriesFormOperation(values));
  };
  
  return (
    <form className={Calorie.form} onSubmit={submitHeandler}>
{(errors.height && focused.height) && <p>{errors.height}</p>}
      <label className={Calorie.label}>
        <input
          type="text"
          name="height"
          value={values.height}
          onBlur={e=>blurHandler(e)}
          onChange={inputHeandler}
          size="23"
          placeholder="Рост *"
          className={Calorie.input}
        />
      </label>
{(errors.age && focused.age) && <p>{errors.age}</p>}
      <label className={Calorie.label}>
        <input
          type="text"
          name="age"
          value={values.age}
          onBlur={e=>blurHandler(e)}
          onChange={inputHeandler}
          size="23"
          placeholder="Возраст *"
          className={Calorie.input}
        />
      </label>
{(errors.weight && focused.weight) && <p>{errors.weight}</p>}
      <label className={Calorie.label}>
        <input
          type="text"
          name="weight"
          value={values.weight}
          onBlur={e=>blurHandler(e)}
          onChange={inputHeandler}
          size="23"
          placeholder="Текущий вес *"
          className={Calorie.input}
        />
      </label>
      <div className={Calorie.box}>
{(errors.desiredWeight && focused.desiredWeight) && <p>{errors.desiredWeight}</p>}
        <label className={Calorie.label}>
          <input
            type="text"
            name="desiredWeight"
            value={values.desiredWeight}
            onBlur={e=>blurHandler(e)}
            onChange={inputHeandler}
            size="23"
            placeholder="Желаемый вес *"
            className={Calorie.input}
          />
        </label>
        <label className={Calorie.label}>
          <p className={Calorie.text}>Группа крови *</p>
          <ul className={Calorie.list}>
            <li className={Calorie.item}>
              <label className={Calorie.blood__lebel}>
                <input
                  type="radio"
                  name="bloodType"
                  checked={values.bloodType === "1"}
                  value="1"
                  onChange={inputHeandler}
                  className={Calorie.bloodInput}
                />
                <span className={Calorie.checkmark}>
                  <span className={Calorie.number}>1</span>
                </span>
              </label>
            </li>
            <li className={Calorie.item}>
              <label className={Calorie.blood__lebel}>
                <input
                  type="radio"
                  name="bloodType"
                  checked={values.bloodType === "2"}
                  value="2"
                  onChange={inputHeandler}
                  className={Calorie.bloodInput}
                />
                <span className={Calorie.checkmark}>
                  {" "}
                  <span className={Calorie.number}>2</span>
                </span>
              </label>
            </li>
            <li className={Calorie.item}>
              <label className={Calorie.blood__lebel}>
                <input
                  type="radio"
                  name="bloodType"
                  checked={values.bloodType === "3"}
                  value="3"
                  onChange={inputHeandler}
                  className={Calorie.bloodInput}
                />
                <span className={Calorie.checkmark}>
                  <span className={Calorie.number}>3</span>
                </span>
              </label>
            </li>
            <li className={Calorie.item}>
              <label className={Calorie.blood__lebel}>
                <input
                  type="radio"
                  name="bloodType"
                  checked={values.bloodType === "4"}
                  value="4"
                  onChange={inputHeandler}
                  className={Calorie.bloodInput}
                />
                <span className={Calorie.checkmark}>
                  <span className={Calorie.number}>4</span>
                </span>
              </label>
            </li>
          </ul>
        </label>
      </div>
      <button type="submit" className={Calorie.btn} disabled={disable}>
        Похудеть
      </button>
    </form>
  );
};

export default CalculatorCalorieForm;

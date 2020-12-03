import React, { useState }  from 'react';
import Calorie from './CalculatorCalorieForm.module.css'

const formInitialState = {
    weight: '',
    height: '',
    age: '',
    desiredWeight: '',
    bloodType: ''
}

const CalculatorCalorieForm = () => {
    const [form, setForm] = useState(formInitialState);

    const inputHeandler = ({ target }) => {
        const { name, value } = target;
        setForm(state => ({ ...state, [name]: value }))
    }
    const submitHeandler = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <form className={Calorie.form} onSubmit={submitHeandler}>
                <label className={Calorie.label}>
                    <input type='text' name='height' value={form.height} onChange={inputHeandler} size='23' placeholder='Рост *' className={Calorie.input} />
                </label>
                <label className={Calorie.label}>
                    <input type='text' name='age' value={form.age} onChange={inputHeandler} size='23' placeholder='Возраст *' className={Calorie.input} />
                </label>
                <label className={Calorie.label}>
                    <input type='text' name='weight' value={form.weight} onChange={inputHeandler} size='23' placeholder='Текущий вес *' className={Calorie.input} />
                </label>
                <div className={Calorie.box}>
                    <label className={Calorie.label}>
                        <input type='text' name='desiredWeight' value={form.desiredWeight} onChange={inputHeandler} size='23' placeholder='Желаемый вес *' className={Calorie.input} />
                    </label>
                    <label className={Calorie.label}>
                        <p className={Calorie.text}>Группа крови *</p>
                        <ul className={Calorie.list}>
                            <li className={Calorie.item}>
                                <label className={Calorie.blood__lebel}>
                                    <input type="radio" name="bloodType" checked={form.bloodType === '1'} value='1' onChange={inputHeandler} className={Calorie.bloodInput} />
                                    <span className={Calorie.checkmark}><span className={Calorie.number}>1</span></span>
                                </label>
                            </li>
                            <li className={Calorie.item}>
                                <label className={Calorie.blood__lebel}>
                                    <input type="radio" name="bloodType" checked={form.bloodType === '2'} value='2' onChange={inputHeandler} className={Calorie.bloodInput} />
                                    <span className={Calorie.checkmark}> <span className={Calorie.number}>2</span></span>
                                </label>
                            </li>
                            <li className={Calorie.item}>
                                <label className={Calorie.blood__lebel}>
                                    <input type="radio" name="bloodType" checked={form.bloodType === '3'} value='3' onChange={inputHeandler} className={Calorie.bloodInput} />
                                    <span className={Calorie.checkmark}><span className={Calorie.number}>3</span></span>
                                </label>
                            </li>
                            <li className={Calorie.item}>
                                <label className={Calorie.blood__lebel}>
                                    <input type="radio" name="bloodType" checked={form.bloodType === '4'} value='4' onChange={inputHeandler} className={Calorie.bloodInput} />
                                    <span className={Calorie.checkmark}><span className={Calorie.number}>4</span></span>
                                </label>
                            </li>
                        </ul>
                    </label>
                </div>
                <button type='submit' className={Calorie.btn}>Похудеть</button>
            </form>
    );
};

export default CalculatorCalorieForm;
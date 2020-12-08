import Login from "../../Login/Login";
import s from "./form.module.css";
const Form = () => {
  console.log(s);
  return (
    <div className={s.form__s}>
      <Login />
    </div>
  );
};
export default Form;

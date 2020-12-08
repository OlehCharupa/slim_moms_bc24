import s from "./form.module.css";
import Registration from "./../../Registration/Registration";
const Form = () => {
  console.log(s);
  return (
    <div className={s.form__s}>
      <Registration />
    </div>
  );
};
export default Form;

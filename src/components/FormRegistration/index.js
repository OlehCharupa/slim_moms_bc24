import Header from "../Header/Header";
import Logo from "./../Logo";
import Form from "./form";
import Imgs from "./imgs";
import form from "./style.module.css";
const RegistrationPage = () => {
  return (
    <div className={form.main__log}>
      <div className={form.TopBar}>
        {/* <div className={form.logoNav}>
          <Logo />
        </div> */}
        {/* <div className={form.in_nav_btn}>
          <p className={form.activ__btn}>Вход</p>{" "}
          <p className={form.none_active_btn}>Регистрация</p>
        </div> */}
      </div>
      <Form />
      <Imgs />
    </div>
  );
};
export default RegistrationPage;

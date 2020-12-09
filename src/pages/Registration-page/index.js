import Imgs from "./imgs";
import form from "./../Login-page/style.module.css";
import Registration from "../../components/Registration/Registration";
const RegistrationPage = () => {
  return (
    <div className={form.main__log}>
      <Registration />
      <Imgs />
    </div>
  );
};
export default RegistrationPage;

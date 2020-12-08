import Imgs from "./imgs";
import form from "./style.module.css";
import Login  from "../../components/Login/Login"
const ValidationPage = () => {
  return (
    <div className={form.main__log}>
      <Login/>
      <Imgs />
    </div>
  );
};
export default ValidationPage;

import Imgs from "./imgs";
import form from "./style.module.css";
import Login from "../../components/Login/Login"
import Container from "../../components/Container/Container";
const ValidationPage = () => {
  return (
    <Container>
      <div className={form.main__log}>
        <Login />
        <Imgs />
      </div>
    </Container>
  );
};
export default ValidationPage;

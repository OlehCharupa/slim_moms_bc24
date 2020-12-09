import Imgs from "./imgs";
import form from "./style.module.css";
import Registration from "../../components/Registration/Registration"
import Container from "../../components/Container/Container";
const RegistrationPage = () => {
  return (
    <Container>
      <div className={form.main__log}>
        <Registration />
        <Imgs />
      </div>
    </Container>
  );
};
export default RegistrationPage;

import Logo from "../../logo";
import img from "./style.module.css";
const Imgs = () => {
  return (
    <>
      <div className={img.LogoImg}>
        <Logo />{" "}
      </div>
      {/* <div className={img.LogoText}></div> */}
      <div className={img.LeafImg}></div>
      <div className={img.BananaImg}></div>
      <div className={img.SBerryImg}></div>
      <div className={img.VectorImg}></div>
    </>
  );
};
export default Imgs;

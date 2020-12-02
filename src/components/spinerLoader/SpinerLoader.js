import React from "react";
import { useWindowWidth } from "@react-hook/window-size";
import Loader from "react-loader-spinner";
import style from "./SpinerLoader.module.css";

const SpinerLoader = () => {
  const onlyWidth = useWindowWidth();
  return (
    <Loader
      className={style.loader}
      type="Circles"
      color="#FC842D"
      height={onlyWidth < 768 ? 70 : 100}
      width={onlyWidth < 768 ? 70 : 100}
      timeout={3000} //3 secs
    />
  );
};

export default SpinerLoader;

import React from "react";

import style from "./DiaryBgImage.module.css";

const DiaryBgImage = ({ children }) => {
  return <div className={style.bgImageLogin}>{children}</div>;
};

export default DiaryBgImage;

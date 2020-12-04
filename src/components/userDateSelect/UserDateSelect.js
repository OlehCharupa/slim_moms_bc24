/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import calendarIcon from "./calendar.svg";

import style from "./UserDateSelect.module.css";

const UserDateSelect = React.forwardRef((props, ref) => (
  <div ref={ref} className={style.currentdate__wrapper} onClick={props.onClick}>
    {/* <p className={style.currentdate__value}>{newDate}</p> */}
    <p className={style.currentdate__value}>{props.value}</p>
    <img src={calendarIcon} width="18" height="20" alt="calendar" />
  </div>
));

export default UserDateSelect;

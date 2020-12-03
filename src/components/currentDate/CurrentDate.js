import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import moment from "moment";
import UserDateSelect from "../userDateSelect/UserDateSelect";
import { getCurrentDay } from "../../redux/slice/currentDateInfoSlice";
import { getDateInfoOperation } from "../../redux/operations/currentDateInfoOperations";

registerLocale("ru", ru);

const CurrentDate = () => {
  const [startDate, setStartDate] = useState(new Date());
 
  const dispatch = useDispatch();
  const reguestData = moment(startDate).format().split("T")[0];

  useEffect(()=>{
    // dispatch(getDateInfoOperation(reguestData))
    dispatch(getCurrentDay(reguestData))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[startDate])
  const ref = React.createRef();
  return (
 
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<UserDateSelect ref={ref} />}
      dateFormat="dd.MM.yyyy"
      locale="ru"
      />
      
  );
};

export default CurrentDate;

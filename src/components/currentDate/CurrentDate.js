import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import moment from "moment";
import UserDateSelect from "../userDateSelect/UserDateSelect";
import { getCurrentDay } from "../../redux/slice/currentDateInfoSlice";
import { getDateInfoOperation } from "../../redux/operations/currentDateInfoOperations";
import { currentDateSelector } from "../../redux/selectors/dateInfoSelectors";
import style from './CurrentDate.module.css'

registerLocale("ru", ru);

const CurrentDate = () => {
  const persistedDate = useSelector((state) => currentDateSelector(state));
  const startpersistedDate = new Date(persistedDate);
  const [startDate, setStartDate] = useState(persistedDate? startpersistedDate: new Date());
  const dispatch = useDispatch();
  // ====================не видаляти! ===============================
  const persistedToken = useSelector(state => state.token)
  // =================================================================

  const reguestDate = moment(startDate).format().split("T")[0];
    useEffect(() => {
    dispatch(getCurrentDay(reguestDate));
    dispatch(getDateInfoOperation(reguestDate, persistedToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  const ref = React.createRef();
  return (
    <div className={style.calendar__wrapper}>

    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<UserDateSelect ref={ref} />}
      dateFormat="dd.MM.yyyy"
      locale="ru"
      />
      </div>
  );
};

export default CurrentDate;

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Calendar.module.css";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <DatePicker
      id="date"
      name="date"
      selected={selectedDate}
      onChange={setSelectedDate}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking Date*"
      className={s.calendarInput}
      calendarClassName={s.calendar}
    />
  );
};

export default Calendar;

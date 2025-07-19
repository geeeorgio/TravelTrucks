import toast from "react-hot-toast";
import CustomButton from "../../CustomStyledComponents/CustomButton/CustomButton";
import s from "./BookingForm.module.css";
import Calendar from "./Calendar/Calendar";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    comment: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value.trim() || !e.target.email.value.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!formData.date) {
      toast.error("Please select a booking date");
      return;
    }

    e.currentTarget.reset();
    setFormData({ name: "", email: "", date: null, comment: "" });
    toast.success("Booking request sent!");
  };

  return (
    <div className={s.bookingFormWrapper}>
      <div className={s.formHeader}>
        <p className={s.bookingFormTitle}>Book your camper now</p>
        <p className={s.bookingFormDescription}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={s.formWrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
          <label htmlFor="name" className={s.label}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Name*"
              className={s.input}
            />
          </label>
          <label htmlFor="email" className={s.label}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleFormChange}
              className={s.input}
            />
          </label>

          <label htmlFor="date" className={s.label}>
            <Calendar
              selectedDate={formData.date}
              setSelectedDate={handleDateChange}
            />
          </label>

          <label htmlFor="comment" className={s.label}>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleFormChange}
              placeholder="Comment*"
              className={`${s.input} ${s.textarea}`}
            ></textarea>
          </label>
          <CustomButton type="submit">Send</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

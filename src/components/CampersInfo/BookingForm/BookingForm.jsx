import toast from "react-hot-toast";
import CustomButton from "../../CustomStyledComponents/CustomButton/CustomButton";
import s from "./BookingForm.module.css";

const BookingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value.trim() || !e.target.email.value.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    e.currentTarget.reset();
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
              placeholder="Name"
              className={s.input}
            />
          </label>
          <label htmlFor="email" className={s.label}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={s.input}
            />
          </label>
          <label htmlFor="email" className={s.label}>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Booking Date"
              className={s.input}
            />
          </label>
          <label htmlFor="comment" className={s.label}>
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
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

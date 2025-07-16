import { Link } from "react-router-dom";
import s from "./CustomButton.module.css";

const CustomButton = ({ type, to, children }) => {
  return (
    <Link to={to}>
      <button className={s.button} type={type}>
        {children}
      </button>
    </Link>
  );
};

export default CustomButton;

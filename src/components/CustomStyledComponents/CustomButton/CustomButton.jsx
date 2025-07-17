import { useNavigate } from "react-router-dom";
import s from "./CustomButton.module.css";

const CustomButton = ({ type, to, onClick, children }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    if (!to) return;

    navigate(to);
  };

  return (
    <button
      className={s.button}
      type={type}
      onClick={onClick ? onClick : handleNavigation}
    >
      {children}
    </button>
  );
};

export default CustomButton;

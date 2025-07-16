import iconsSvg from "../../../assets/icons/sprite.svg";
import s from "./CustomIcons.module.css";

const CustomIcons = ({ className, iconId }) => {
  const fullLink = `${iconsSvg}#icon-${iconId}`;

  return (
    <svg className={className || s.logo}>
      <use href={fullLink}></use>
    </svg>
  );
};

export default CustomIcons;

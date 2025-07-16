import { Link } from "react-router-dom";
import iconsSvg from "../../../assets/icons/sprite.svg";
import s from './PageLogo.module.css'

const PageLogo = () => {
  return (
    <Link to={"/"}>
      <svg className={s.logo} width="136" height="15">
        <use href={`${iconsSvg}#icon-logo`}></use>
      </svg>
    </Link>
  );
};

export default PageLogo;

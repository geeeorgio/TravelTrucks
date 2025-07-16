import { NavLink } from "react-router-dom";

import s from "./NavBar.module.css";

const NavBar = () => {
  const changeStyle = ({ isActive }) => (isActive ? s.active : s.item);

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={"/"} className={changeStyle}>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={"/catalog"} className={changeStyle}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

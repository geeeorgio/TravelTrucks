import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import s from "./MobileMenu.module.css";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const changeStyle = ({ isActive }) => (isActive ? s.active : s.item);

  return (
    <>
      {isMenuOpen && (
        <>
          <div className={s.backdrop} onClick={toggleMenu}></div>

          <div className={s.menu}>
            <button className={s.closeBtn} onClick={toggleMenu}>
              <FaTimes className={s.closeIcon} />
            </button>

            <nav className={s.nav}>
              <ul className={s.list}>
                <li className={s.item}>
                  <NavLink to="/" className={changeStyle} onClick={toggleMenu}>
                    Home
                  </NavLink>
                </li>
                <li className={s.item}>
                  <NavLink
                    to="/catalog"
                    className={changeStyle}
                    onClick={toggleMenu}
                  >
                    Catalog
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default MobileMenu;

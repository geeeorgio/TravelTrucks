import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import PageLogo from "../PageLogo/PageLogo";
import NavBar from "../NavBar/NavBar";
import MobileMenu from "../MobileMenu/MobileMenu";

import s from "./PageHeader.module.css";

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className={s.header}>
      <PageLogo />

      <button type="button" className={s.mobileMenuButton} onClick={toggleMenu}>
        <FaBars className={s.menuIcon} />
      </button>

      <NavBar />

      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default PageHeader;

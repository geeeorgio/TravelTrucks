import NavBar from "../NavBar/NavBar";
import PageLogo from "../PageLogo/PageLogo";

import s from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={s.header}>
        <PageLogo />
        <NavBar />
    </header>
  );
};

export default PageHeader;

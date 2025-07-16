import { Link } from "react-router-dom";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";

import s from "./PageLogo.module.css";

const PageLogo = () => {
  return (
    <Link to={"/"}>
      <CustomIcons className={s.logo} iconId={"logo"} />
    </Link>
  );
};

export default PageLogo;

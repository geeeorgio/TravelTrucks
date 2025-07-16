import { useSelector } from "react-redux";
import CampersListItem from "../CampersListItem/CampersListItem";
import { selectAllCampersList } from "../../redux/campersAll/selectors";
import s from "./CampersList.module.css";

const CampersList = () => {
  const campersList = useSelector(selectAllCampersList);
  console.log(campersList);

  return (
    <ul className={s.list}>
      {campersList.map((camper) => (
        <CampersListItem key={camper.id} item={camper} />
      ))}
    </ul>
  );
};

export default CampersList;

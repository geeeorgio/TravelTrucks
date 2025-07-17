import CampersListItem from "../CampersListItem/CampersListItem";

import s from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  return (
    <ul className={s.list}>
      {campers.map((camper) => (
        <CampersListItem key={camper.id} item={camper} />
      ))}
    </ul>
  );
};

export default CampersList;

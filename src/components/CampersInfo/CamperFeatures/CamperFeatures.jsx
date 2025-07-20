import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../../redux/camperSelected/selectors";
import {
  equipmentFeatures,
  vehicleDetails,
} from "../../../helpers/campersFeaturesMap";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";

import s from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const camper = useSelector(selectCamperDetails);

  if (!camper) {
    return null;
  }

  return (
    <div className={s.featuresSection}>
      <ul className={s.featuresList}>
        {equipmentFeatures.map((feature) => {
          const value = camper[feature.key];
          if (value) {
            return (
              <li key={feature.key} className={s.featureItem}>
                <CustomIcons iconId={feature.icon} className={s.featureIcon} />
                <span>
                  {typeof feature.label === "function"
                    ? feature.label(value)
                    : feature.label}
                </span>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div className={s.vehicleDetails}>
        <p className={s.vehicleDetailsTitle}>Vehicle details</p>
        <ul className={s.vehicleDetailsList}>
          {vehicleDetails.map((detail) => {
            const value = camper[detail.key];
            if (value) {
              return (
                <li key={detail.key} className={s.vehicleItem}>
                  <span>
                    {detail.key[0].toUpperCase().concat(detail.key.slice(1))}
                  </span>
                  <span>
                    {typeof detail.label === "function"
                      ? detail.label(value)
                      : value}
                  </span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;

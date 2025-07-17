import { useSelector } from "react-redux";
import { selectCamperDetails } from "../../../redux/camperSelected/selectors";
import s from "./CamperFeatures.module.css";
import CustomIcons from "../../CustomStyledComponents/CustomIcons/CustomIcons";

const CamperFeatures = () => {
  const camper = useSelector(selectCamperDetails);

  return (
    <div className={s.featuresSection}>
      <ul className={s.featuresList}>
        {camper.transmission && (
          <li className={s.featureItem}>
            <CustomIcons iconId="diagram" className={s.featureIcon} />
            <span>
              {camper.transmission[0]
                .toUpperCase()
                .concat(camper.transmission.slice(1))}
            </span>
          </li>
        )}
        {camper.engine && (
          <li className={s.featureItem}>
            <CustomIcons iconId="fuel" className={s.featureIcon} />
            <span>
              {camper.engine[0].toUpperCase().concat(camper.engine.slice(1))}
            </span>
          </li>
        )}
        {camper.AC && (
          <li className={s.featureItem}>
            <CustomIcons iconId="wind" className={s.featureIcon} />
            <span>AC</span>
          </li>
        )}
        {camper.kitchen && (
          <li className={s.featureItem}>
            <CustomIcons iconId="cup" className={s.featureIcon} />
            <span>Kitchen</span>
          </li>
        )}
        {camper.bathroom && (
          <li className={s.featureItem}>
            <CustomIcons iconId="shower" className={s.featureIcon} />
            <span>Shower</span>
          </li>
        )}
        {camper.microwave && (
          <li className={s.featureItem}>
            <CustomIcons iconId="microwave" className={s.featureIcon} />
            <span>Microwave</span>
          </li>
        )}
        {camper.refrigerator && (
          <li className={s.featureItem}>
            <CustomIcons iconId="fridge" className={s.featureIcon} />
            <span>Refrigerator</span>
          </li>
        )}
        {camper.radio && (
          <li className={s.featureItem}>
            <CustomIcons iconId="radios" className={s.featureIcon} />
            <span>Radio</span>
          </li>
        )}
        {camper.TV && (
          <li className={s.featureItem}>
            <CustomIcons iconId="tv" className={s.featureIcon} />
            <span>TV</span>
          </li>
        )}
        {camper.water && (
          <li className={s.featureItem}>
            <CustomIcons iconId="water" className={s.featureIcon} />
            <span>Water</span>
          </li>
        )}
        {camper.gas && (
          <li className={s.featureItem}>
            <CustomIcons iconId="gas" className={s.featureIcon} />
            <span>Gas</span>
          </li>
        )}
      </ul>

      <div className={s.vehicleDetails}>
        <p className={s.vehicleDetailsTitle}>Vehicle details</p>
        <ul className={s.vehicleDetailsList}>
          {camper.form === "panelTruck" && (
            <li className={s.vehicleItem}>
              <span>Form</span> <span>Van</span>
            </li>
          )}
          {camper.form === "fullyIntegrated" && (
            <li className={s.vehicleItem}>
              <span>Form</span> <span>Fully Integrated</span>
            </li>
          )}
          {camper.form === "alcove" && (
            <li className={s.vehicleItem}>
              <span>Form</span> <span>Alcove</span>
            </li>
          )}
          {camper.length && (
            <li className={s.vehicleItem}>
              <span>Length</span>
              <span>{camper.length}</span>
            </li>
          )}
          {camper.width && (
            <li className={s.vehicleItem}>
              <span>Width</span>
              <span>{camper.width}</span>
            </li>
          )}
          {camper.height && (
            <li className={s.vehicleItem}>
              <span>Height</span>
              <span>{camper.height}</span>
            </li>
          )}
          {camper.tank && (
            <li className={s.vehicleItem}>
              <span>Tank</span>
              <span>{camper.tank}</span>
            </li>
          )}
          {camper.consumption && (
            <li className={s.vehicleItem}>
              <span>Consumption</span>
              <span>{camper.consumption}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;

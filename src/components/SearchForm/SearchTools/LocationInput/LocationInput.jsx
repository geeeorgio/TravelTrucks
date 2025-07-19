import CustomIcons from "../../../CustomStyledComponents/CustomIcons/CustomIcons";
import s from "./LocationInput.module.css";

const LocationInput = ({ placeholder, iconId, value, onChange }) => (
  <div className={s.locationInputWrapper}>
    <label className={s.locationLabel} htmlFor="location">
      Location
      <input
        name="location"
        id="location"
        type="text"
        placeholder={placeholder}
        className={s.locationField}
        value={value}
        onChange={onChange}
      />
      <CustomIcons className={s.locationIcon} iconId={iconId} />
    </label>
  </div>
);

export default LocationInput;

import { useState } from "react";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";
import FilterOption from "../SearchTools/FilterOption/FilterOption";
import LocationInput from "../SearchTools/LocationInput/LocationInput";
import s from "./SearchForm.module.css";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  const handleSubmit = () => {};

  const handleLocationChange = () => {};

  const handleEquipmentChange = () => {};

  const handleVehicleTypeChange = () => {};

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <LocationInput
        placeholder={"Kyiv, Ukraine"}
        iconId={"map"}
        value={location}
        onChange={handleLocationChange}
      />

      <p className={s.filtersTitle}>Filters</p>

      <div className={s.vehicleEquipmentGroup}>
        <p className={s.groupTitle}>Vehicle equipment</p>
        <div className={s.optionsList}>
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"AC"}
            iconId={"wind"}
            text={"AC"}
            checked={selectedEquipment.includes("AC")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"transmission"}
            iconId={"diagram"}
            text={"Automatic"}
            checked={selectedEquipment.includes("transmission")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"kitchen"}
            iconId={"cup"}
            text={"Kitchen"}
            checked={selectedEquipment.includes("kitchen")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"TV"}
            iconId={"tv"}
            text={"TV"}
            checked={selectedEquipment.includes("TV")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"bathroom"}
            iconId={"shower"}
            text={"Bathroom"}
            checked={selectedEquipment.includes("transmission")}
            onChange={handleEquipmentChange}
          />
        </div>
      </div>

      <div className={s.vehicleTypeGroup}>
        <p className={s.groupTitle}>Vehicle type</p>
        <div className={s.typeOptionsList}>
          <FilterOption
            type={"radio"}
            name={"vehicleType"}
            value={"panelTruck"}
            iconId={"1x2"}
            text={"Van"}
            checked={selectedVehicleType === "panelTruck"}
            onChange={handleVehicleTypeChange}
          />
          <FilterOption
            type={"radio"}
            name={"vehicleType"}
            value={"fullyIntegrated"}
            iconId={"grid"}
            text={"Fully Integrated"}
            checked={selectedVehicleType === "fullyIntegrated"}
            onChange={handleVehicleTypeChange}
          />
          <FilterOption
            type={"radio"}
            name={"vehicleType"}
            value={"alcove"}
            iconId={"3x3"}
            text={"Alcove"}
            checked={selectedVehicleType === "alcove"}
            onChange={handleVehicleTypeChange}
          />
        </div>
      </div>

      <button className={s.btn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

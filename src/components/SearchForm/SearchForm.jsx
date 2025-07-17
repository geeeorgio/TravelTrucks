import { useState } from "react";
import FilterOption from "../SearchTools/FilterOption/FilterOption";
import LocationInput from "../SearchTools/LocationInput/LocationInput";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";
import s from "./SearchForm.module.css";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setFormData({
      location: "",
      equipment: [],
      vehicleType: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedEquipment = checked
        ? [...prevData.equipment, value]
        : prevData.equipment.filter((item) => item !== value);

      return {
        ...prevData,
        equipment: updatedEquipment,
      };
    });
  };

  const handleVehicleTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      vehicleType: value,
    }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <LocationInput
        placeholder={"Kyiv, Ukraine"}
        iconId={"map"}
        value={formData.location}
        onChange={handleInputChange}
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
            checked={formData.equipment.includes("AC")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"automatic"}
            iconId={"diagram"}
            text={"Automatic"}
            checked={formData.equipment.includes("automatic")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"manual"}
            iconId={"diagram"}
            text={"Manual"}
            checked={formData.equipment.includes("manual")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"kitchen"}
            iconId={"cup"}
            text={"Kitchen"}
            checked={formData.equipment.includes("kitchen")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"TV"}
            iconId={"tv"}
            text={"TV"}
            checked={formData.equipment.includes("TV")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"bathroom"}
            iconId={"shower"}
            text={"Bathroom"}
            checked={formData.equipment.includes("bathroom")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"diesel"}
            iconId={"fuel"}
            text={"Diesel"}
            checked={formData.equipment.includes("diesel")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"hybrid"}
            iconId={"fuel"}
            text={"Hybrid"}
            checked={formData.equipment.includes("hybrid")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"petrol"}
            iconId={"fuel"}
            text={"Petrol"}
            checked={formData.equipment.includes("petrol")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"microwave"}
            iconId={"microwave"}
            text={"Microwave"}
            checked={formData.equipment.includes("microwave")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"refrigerator"}
            iconId={"fridge"}
            text={"Refrigerator"}
            checked={formData.equipment.includes("refrigerator")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"radio"}
            iconId={"radios"}
            text={"Radio"}
            checked={formData.equipment.includes("radio")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"water"}
            iconId={"water"}
            text={"Water"}
            checked={formData.equipment.includes("water")}
            onChange={handleEquipmentChange}
          />
          <FilterOption
            type={"checkbox"}
            name={"equipment"}
            value={"gas"}
            iconId={"gas"}
            text={"Gas"}
            checked={formData.equipment.includes("gas")}
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
            checked={formData.vehicleType === "panelTruck"}
            onChange={handleVehicleTypeChange}
          />
          <FilterOption
            type={"radio"}
            name={"vehicleType"}
            value={"fullyIntegrated"}
            iconId={"grid"}
            text={"Fully Integrated"}
            checked={formData.vehicleType === "fullyIntegrated"}
            onChange={handleVehicleTypeChange}
          />
          <FilterOption
            type={"radio"}
            name={"vehicleType"}
            value={"alcove"}
            iconId={"3x3"}
            text={"Alcove"}
            checked={formData.vehicleType === "alcove"}
            onChange={handleVehicleTypeChange}
          />
        </div>
      </div>

      <CustomButton type="submit">Search</CustomButton>
    </form>
  );
};

export default SearchForm;

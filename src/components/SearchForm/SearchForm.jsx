import { useState } from "react";
import toast from "react-hot-toast";
import FilterOption from "../SearchTools/FilterOption/FilterOption";
import LocationInput from "../SearchTools/LocationInput/LocationInput";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";

import s from "./SearchForm.module.css";

const SearchForm = ({ setSearchParams, handleResetForm }) => {
  const [formData, setFormData] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
    engineType: "",
    transmissionType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.location &&
      !formData.engineType &&
      !formData.vehicleType &&
      !formData.transmissionType &&
      formData.equipment.length === 0
    ) {
      toast.error("Please choose at least one parameter to search.", {
        icon: "❗",
      });
      return;
    }

    handleResetForm();

    const url = new URLSearchParams();

    if (formData.location) {
      url.set("location", formData.location);
    }

    if (formData.equipment.length > 0) {
      formData.equipment.forEach((item) => {
        url.append(item, true);
      });
    }

    if (formData.vehicleType) {
      url.set("form", formData.vehicleType);
    }

    if (formData.engineType) {
      url.set("engine", formData.engineType);
    }

    if (formData.transmissionType) {
      url.set("transmission", formData.transmissionType);
    }

    setSearchParams(url);
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

  const handleEngineTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      engineType: value,
    }));
  };

  const handleTransmissionTypeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      transmissionType: value,
    }));
  };

  const handleReset = () => {
    if (
      !formData.location &&
      !formData.engineType &&
      !formData.vehicleType &&
      !formData.transmissionType &&
      formData.equipment.length === 0
    ) {
      toast("Form is already empty!", { icon: "👍" });
      return;
    }
    setSearchParams("");
    setFormData({
      location: "",
      equipment: [],
      vehicleType: "",
      engineType: "",
      transmissionType: "",
    });
    handleResetForm();
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
          {[
            { value: "AC", icon: "wind", text: "AC" },
            { value: "kitchen", icon: "cup", text: "Kitchen" },
            { value: "TV", icon: "tv", text: "TV" },
            { value: "bathroom", icon: "shower", text: "Bathroom" },
            { value: "microwave", icon: "microwave", text: "Microwave" },
            { value: "refrigerator", icon: "fridge", text: "Refrigerator" },
            { value: "radio", icon: "radios", text: "Radio" },
            { value: "water", icon: "water", text: "Water" },
            { value: "gas", icon: "gas", text: "Gas" },
          ].map((opt) => (
            <FilterOption
              key={opt.value}
              type={"checkbox"}
              name={"equipment"}
              value={opt.value}
              iconId={opt.icon}
              text={opt.text}
              checked={formData.equipment.includes(opt.value)}
              onChange={handleEquipmentChange}
            />
          ))}
        </div>
      </div>

      <div className={s.vehicleTypeGroup}>
        <p className={s.groupTitle}>Vehicle type</p>
        <div className={s.typeOptionsList}>
          {[
            { value: "panelTruck", icon: "1x2", text: "Van" },
            {
              value: "fullyIntegrated",
              icon: "grid",
              text: "Fully Integrated",
            },
            { value: "alcove", icon: "3x3", text: "Alcove" },
          ].map((opt) => (
            <FilterOption
              key={opt.value}
              type={"radio"}
              name={"vehicleType"}
              value={opt.value}
              iconId={opt.icon}
              text={opt.text}
              checked={formData.vehicleType === opt.value}
              onChange={handleVehicleTypeChange}
            />
          ))}
        </div>
      </div>

      <div className={s.engineTypeGroup}>
        <p className={s.groupTitle}>Engine type</p>
        <div className={s.typeOptionsList}>
          {[
            { value: "diesel", icon: "fuel", text: "Diesel" },
            { value: "hybrid", icon: "fuel", text: "Hybrid" },
            { value: "petrol", icon: "fuel", text: "Petrol" },
          ].map((opt) => (
            <FilterOption
              key={opt.value}
              type={"radio"}
              name={"engineType"}
              value={opt.value}
              iconId={opt.icon}
              text={opt.text}
              checked={formData.engineType === opt.value}
              onChange={handleEngineTypeChange}
            />
          ))}
        </div>
      </div>

      <div className={s.transmissionTypeGroup}>
        <p className={s.groupTitle}>Transmission type</p>
        <div className={s.typeOptionsList}>
          {[
            { value: "automatic", icon: "diagram", text: "Automatic" },
            { value: "manual", icon: "diagram", text: "Manual" },
          ].map((opt) => (
            <FilterOption
              key={opt.value}
              type={"radio"}
              name={"transmissionType"}
              value={opt.value}
              iconId={opt.icon}
              text={opt.text}
              checked={formData.transmissionType === opt.value}
              onChange={handleTransmissionTypeChange}
            />
          ))}
        </div>
      </div>

      <div className={s.buttons}>
        <CustomButton type="submit">Search</CustomButton>
        <CustomButton type="button" onClick={handleReset}>
          Reset
        </CustomButton>
      </div>
    </form>
  );
};

export default SearchForm;

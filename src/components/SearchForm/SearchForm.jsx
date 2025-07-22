import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import FilterOption from "./SearchTools/FilterOption/FilterOption";
import LocationInput from "./SearchTools/LocationInput/LocationInput";
import CustomButton from "../CustomStyledComponents/CustomButton/CustomButton";
import { setReduxSearchParams } from "../../redux/campersAll/slice";
import { urlBuilder } from "../../helpers/urlBuilder";
import { isEmpty } from "../../helpers/validateFormData";
import {
  engineTypeGroup,
  transmissionTypeGroup,
  vehicleEquipmentGroup,
  vehicleTypeGroup,
} from "../../helpers/searchFormOptionsMap";

import s from "./SearchForm.module.css";

const SearchForm = ({
  setUrlParams,
  handleResetForm,
  toggleForm,
  isMobile,
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    location: "",
    equipment: [],
    vehicleType: "",
    engineType: "",
    transmissionType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty(formData)) {
      toast("Please choose search parameter", {
        icon: "❗",
      });
      return;
    }

    handleResetForm();

    const url = urlBuilder(formData);
    setUrlParams(url);
    dispatch(setReduxSearchParams(url.toString()));
    if (isMobile) toggleForm();
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

  const handleReset = () => {
    if (isEmpty(formData)) {
      toast("Form is already empty!", { icon: "👍" });
      return;
    }

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
          {vehicleEquipmentGroup.map((option) => (
            <FilterOption
              key={option.value}
              type={"checkbox"}
              name={"equipment"}
              value={option.value}
              iconId={option.icon}
              text={option.text}
              checked={formData.equipment.includes(option.value)}
              onChange={handleEquipmentChange}
            />
          ))}
        </div>
      </div>

      <div className={s.vehicleTypeGroup}>
        <p className={s.groupTitle}>Vehicle type</p>
        <div className={s.typeOptionsList}>
          {vehicleTypeGroup.map((option) => (
            <FilterOption
              key={option.value}
              type={"radio"}
              name={"vehicleType"}
              value={option.value}
              iconId={option.icon}
              text={option.text}
              checked={formData.vehicleType === option.value}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      <div className={s.engineTypeGroup}>
        <p className={s.groupTitle}>Engine type</p>
        <div className={s.typeOptionsList}>
          {engineTypeGroup.map((option) => (
            <FilterOption
              key={option.value}
              type={"radio"}
              name={"engineType"}
              value={option.value}
              iconId={option.icon}
              text={option.text}
              checked={formData.engineType === option.value}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      <div className={s.transmissionTypeGroup}>
        <p className={s.groupTitle}>Transmission type</p>
        <div className={s.typeOptionsList}>
          {transmissionTypeGroup.map((option) => (
            <FilterOption
              key={option.value}
              type={"radio"}
              name={"transmissionType"}
              value={option.value}
              iconId={option.icon}
              text={option.text}
              checked={formData.transmissionType === option.value}
              onChange={handleInputChange}
            />
          ))}
        </div>
      </div>

      <div className={s.buttons}>
        <CustomButton type="submit">Search</CustomButton>
        <CustomButton type="reset" onClick={handleReset}>
          Reset
        </CustomButton>
      </div>
    </form>
  );
};

export default SearchForm;

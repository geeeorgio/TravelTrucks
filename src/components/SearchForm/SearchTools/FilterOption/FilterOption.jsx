import CustomIcons from "../../../CustomStyledComponents/CustomIcons/CustomIcons";
import s from "./FilterOption.module.css";

const FilterOption = ({
  type,
  name,
  value,
  iconId,
  text,
  checked,
  onChange,
}) => {
  const labelClass = checked
    ? `${s.filterOption} ${s.checked}`
    : s.filterOption;

  return (
    <label htmlFor={`${name}-${value}`} className={labelClass}>
      <input
        id={`${name}-${value}`}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      <CustomIcons className={s.filterIcon} iconId={iconId} />
      <span>{text}</span>
    </label>
  );
};

export default FilterOption;

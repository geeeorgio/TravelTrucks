import { vehicleEquipmentGroup } from "./searchFormOptionsMap";

export const parseUrlToFormData = (urlParamsObject) => {
  const initialFormData = {
    location: urlParamsObject.get("location") || "",
    vehicleType: urlParamsObject.get("form") || "",
    engineType: urlParamsObject.get("engine") || "",
    transmissionType: urlParamsObject.get("transmission") || "",
    equipment: [],
  };

  const nonEquipmentKeys = [
    "location",
    "form",
    "engine",
    "transmission",
    "page",
    "limit",
  ];
  const allEquipmentKeys = vehicleEquipmentGroup.map((option) => option.value);

  for (const [key, value] of urlParamsObject.entries()) {
    if (
      !nonEquipmentKeys.includes(key) &&
      value === "true" &&
      allEquipmentKeys.includes(key)
    ) {
      initialFormData.equipment.push(key);
    }
  }

  return initialFormData;
};

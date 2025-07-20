export const isEmpty = (formData) => {
  return (
    !formData.location &&
    !formData.engineType &&
    !formData.vehicleType &&
    !formData.transmissionType &&
    formData.equipment.length === 0
  );
};

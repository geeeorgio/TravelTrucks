export const urlBuilder = (formData) => {
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

  return url;
};

export const searchParamsString = (reduxParams, urlParams) => {
  const searchParamsString =
    reduxParams !== "" ? reduxParams : urlParams.toString();

  return searchParamsString;
};

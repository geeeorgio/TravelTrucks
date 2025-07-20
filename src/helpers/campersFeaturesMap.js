export const equipmentFeatures = [
  {
    key: "transmission",
    icon: "diagram",
    label: (value) => value[0].toUpperCase().concat(value.slice(1)),
  },
  {
    key: "engine",
    icon: "fuel",
    label: (value) => value[0].toUpperCase().concat(value.slice(1)),
  },
  { key: "AC", icon: "wind", label: "AC" },
  { key: "kitchen", icon: "cup", label: "Kitchen" },
  { key: "bathroom", icon: "shower", label: "Bathroom" },
  { key: "microwave", icon: "microwave", label: "Microwave" },
  { key: "refrigerator", icon: "fridge", label: "Refrigerator" },
  { key: "radio", icon: "radios", label: "Radio" },
  { key: "TV", icon: "tv", label: "TV" },
  { key: "water", icon: "water", label: "Water" },
  { key: "gas", icon: "gas", label: "Gas" },
];

export const vehicleDetails = [
  {
    key: "form",
    label: (value) => {
      if (value === "panelTruck") return "Van";
      if (value === "fullyIntegrated") return "Fully Integrated";
      if (value === "alcove") return "Alcove";
      return value;
    },
  },
  { key: "length", label: (value) => value },
  { key: "width", label: (value) => value },
  { key: "height", label: (value) => value },
  { key: "tank", label: (value) => value },
  { key: "consumption", label: (value) => value },
];

export const camperTags = [
  { key: "AC", icon: "wind", label: "AC" },
  { key: "refrigerator", icon: "fridge", label: "Refrigerator" },
  {
    key: "transmission",
    icon: "diagram",
    label: (value) => value[0].toUpperCase().concat(value.slice(1)),
  },
  {
    key: "engine",
    icon: "fuel",
    label: (value) => value[0].toUpperCase().concat(value.slice(1)),
  },
  { key: "bathroom", icon: "shower", label: "Bathroom" },
  { key: "kitchen", icon: "cup", label: "Kitchen" },
  { key: "TV", icon: "tv", label: "TV" },
  { key: "microwave", icon: "microwave", label: "Microwave" },
  { key: "radio", icon: "radios", label: "Radio" },
  { key: "gas", icon: "gas", label: "Gas" },
  { key: "water", icon: "water", label: "Water" },
];

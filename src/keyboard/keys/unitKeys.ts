import { KeyProps } from "./key";

const capacityUnits: Array<KeyProps> = [
  {
    id: "mL",
    label: "mL",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenMl}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "litre",
    label: "L",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenLitre}",
      method: "write",
    },
    groups: ["units"],
  },
];
const surfaceUnits: Array<KeyProps> = [
  {
    id: "cm2",
    label: "\\text{cm}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\embed{tokenCm2}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "m2",
    label: "\\text{mm}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\embed{tokenM2}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "km2",
    label: "\\text{km}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\embed{tokenKm2}",
      method: "write",
    },
    groups: ["units"],
  },
];

const lengthUnits: Array<KeyProps> = [
  {
    id: "mm",
    label: "mm",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenMm}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "cm",
    label: "cm",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenCm}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "dm",
    label: "dm",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenDm}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "meter",
    label: "m",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenMeter}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "km",
    label: "km",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenKm}",
      method: "write",
    },
    groups: ["units"],
  },
];

const timeUnits: Array<KeyProps> = [
  {
    id: "hours",
    label: "h",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenHour}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "minutes",
    label: "min",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenMin}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "seconds",
    label: "s",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenSecond}",
      method: "write",
    },
    groups: ["units"],
  },
];

export const unitKeysProps: Array<KeyProps> = [
  {
    id: "celsius",
    label: "°C",
    labelType: "tex",
    mathfieldInstructions: {
      content: "^\\circ C",
      method: "write",
    },
    groups: ["units"],
  },

  {
    id: "Hz",
    label: "Hz",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{Hz}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "mol",
    label: "mol",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{mol}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "kJ",
    label: "kJ",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{kJ}",
      method: "write",
    },
    groups: ["units"],
  },

  {
    id: "timesTenPower",
    label: "\\times10^\\square",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\times10^",
      method: "typedText",
    },
    groups: ["units"],
  },
  ...capacityUnits,
  ...surfaceUnits,
  ...timeUnits,
  ...lengthUnits,
];

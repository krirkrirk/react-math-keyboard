import { KeyProps } from "./key";

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
    id: "cm",
    label: "cm",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{cm}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "cm2",
    label: "\\text{cm}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\text{cm}^2",
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
    id: "mL",
    label: "mL",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{mL}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "hours",
    label: "h",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{h}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "minutes",
    label: "min",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{min}",
      method: "write",
    },
    groups: ["units"],
  },
  {
    id: "seconds",
    label: "s",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{s}",
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
];

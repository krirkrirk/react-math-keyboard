import { KeyProps } from "./key";

export const algebraKeysProps: KeyProps[] = [
  {
    id: "equal",
    label: "=",
    labelType: "tex",
    keypressId: "=",
    mathfieldInstructions: {
      content: "=",
      method: "write",
    },
    groups: ["algebra"],
  },
  {
    id: "approx",
    label: "\\approx",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\approx",
      method: "write",
    },
    groups: ["algebra"],
  },
  {
    id: "leq",
    label: "\\leq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\leq",
      method: "write",
    },
    groups: ["algebra"],
  },
  {
    id: "geq",
    label: "\\geq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\geq",
      method: "write",
    },
    groups: ["algebra"],
  },
  {
    id: "inf",
    label: "<",
    labelType: "tex",

    mathfieldInstructions: {
      content: "<",
      method: "write",
    },
    groups: ["algebra"],
    keypressId: "<",
  },
  {
    id: "sup",
    label: ">",
    labelType: "tex",

    mathfieldInstructions: {
      content: ">",
      method: "write",
    },
    groups: ["algebra"],
    keypressId: ">",
  },
  {
    id: "percent",
    label: "\\%",
    labelType: "tex",
    groups: ["algebra"],

    mathfieldInstructions: {
      content: "%",
      method: "write",
    },
    keypressId: "%",
  },
  {
    id: "xsquare",
    label: "x^2",
    labelType: "tex",

    mathfieldInstructions: { content: "x^2", method: "write" },
    groups: ["algebra"],
  },
  {
    id: "xcube",
    label: "x^3",
    labelType: "tex",

    mathfieldInstructions: { content: "x^3", method: "write" },
    groups: ["algebra"],
  },
];

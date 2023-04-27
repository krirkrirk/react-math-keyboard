import { KeyProps } from "./key";

export const algebraKeysProps: KeyProps[] = [
  {
    id: "equal",
    label: "=",
    labelType: "tex",

    mathfieldInstructions: {
      content: "=",
      method: "write",
    },
    group: "algebra",
  },
  {
    id: "approx",
    label: "\\approx",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\approx",
      method: "write",
    },
    group: "algebra",
  },
  {
    id: "leq",
    label: "\\leq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\leq",
      method: "write",
    },
    group: "algebra",
  },
  {
    id: "geq",
    label: "\\geq",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\geq",
      method: "write",
    },
    group: "algebra",
  },
  {
    id: "inf",
    label: "<",
    labelType: "tex",

    mathfieldInstructions: {
      content: "<",
      method: "write",
    },
    group: "algebra",
  },
  {
    id: "sup",
    label: ">",
    labelType: "tex",

    mathfieldInstructions: {
      content: ">",
      method: "write",
    },
    group: "algebra",
  },
];

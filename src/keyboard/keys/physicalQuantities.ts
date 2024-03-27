import { KeyProps } from "./key";

export const physicalQuantities: KeyProps[] = [
  {
    id: "volumeMere",
    label: "V_m",
    labelType: "tex",
    mathfieldInstructions: {
      content: "V_m",
      method: "write",
    },
    groups: ["physicalQuantities"],
  },
  {
    id: "volumeFille",
    label: "V_f",
    labelType: "tex",
    mathfieldInstructions: {
      content: "V_f",
      method: "write",
    },
    groups: ["physicalQuantities"],
  },
  {
    id: "concentrationMere",
    label: "t_m",
    labelType: "tex",
    mathfieldInstructions: {
      content: "t_m",
      method: "write",
    },
    groups: ["physicalQuantities"],
  },
  {
    id: "concentrationFille",
    label: "t_f",
    labelType: "tex",
    mathfieldInstructions: {
      content: "t_f",
      method: "write",
    },
    groups: ["physicalQuantities"],
  },
];

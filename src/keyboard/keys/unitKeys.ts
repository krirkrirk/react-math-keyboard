import { KeyProps } from "./key";

export const unitKeysProps: Array<KeyProps> = [
  {
    id: "cm",
    label: "cm",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{cm}",
      method: "write",
    },
    group: "units",
  },
  {
    id: "cm2",
    label: "\\text{cm}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\text{cm}^2",
      method: "write",
    },
    group: "units",
  },
];

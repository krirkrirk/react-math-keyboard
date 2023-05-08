import { KeyProps } from "./key";

export const wordKeysProps: Array<KeyProps> = [
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
    id: "et",
    label: "et",
    labelType: "raw",

    mathfieldInstructions: {
      content: "\\text{ et }",
      method: "write",
    },
    group: "words",
  },
];

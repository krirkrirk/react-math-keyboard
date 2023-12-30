import { KeyProps } from "./key";

export const wordKeysProps: Array<KeyProps> = [
  {
    id: "ou",
    label: "ou",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\text{ ou }",
      method: "write",
    },
    groups: ["words"],
  },
  {
    id: "et",
    label: "et",
    labelType: "raw",

    mathfieldInstructions: {
      content: "\\text{ et }",
      method: "write",
    },
    groups: ["words"],
  },
  {
    id: "aucun",
    label: "Aucun",
    labelType: "raw",

    mathfieldInstructions: {
      content: "\\text{Aucun}",
      method: "write",
    },
    groups: ["words"],
  },
];

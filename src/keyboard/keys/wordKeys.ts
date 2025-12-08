import { KeyProps } from "./key";

export const wordKeysProps: Array<KeyProps> = [
  {
    id: "ou",
    label: "ou",
    labelType: "raw",
    mathfieldInstructions: {
      content: "\\embed{tokenOu}",
      method: "write",
    },
    groups: ["words"],
  },
  {
    id: "et",
    label: "et",
    labelType: "raw",

    mathfieldInstructions: {
      content: "\\embed{tokenEt}",
      method: "write",
    },
    groups: ["words"],
  },
  {
    id: "aucun",
    label: "Aucun",
    labelType: "raw",

    mathfieldInstructions: {
      content: "\\embed{tokenAucun}",
      method: "write",
    },
    groups: ["words"],
  },
];

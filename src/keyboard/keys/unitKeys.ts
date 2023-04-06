import { KeyCategory, KeyProps } from "./key";

export const unitKeysProps: KeyProps[] = [
  {
    id: "°",
    label: "°",
    labelType: "raw",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "°",
      method: "write",
    },
  },
];

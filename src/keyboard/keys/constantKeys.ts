import { KeyCategory, KeyProps } from "./key";

export const constantKeysIds = ["pi"];
export const constantKeysProps: KeyProps[] = [
  {
    id: "pi",
    label: "\\pi",
    labelType: "tex",
    keyCategory: KeyCategory.constant,
    mathfieldInstructions: {
      content: "\\pi",
      method: "cmd",
    },
  },
  {
    id: "infty",
    label: "\\infty",
    labelType: "tex",
    keyCategory: KeyCategory.constant,
    mathfieldInstructions: {
      content: "\\infty",
      method: "cmd",
    },
  },
];

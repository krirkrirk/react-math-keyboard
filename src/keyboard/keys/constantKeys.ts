import { KeyProps } from "./key";

export const constantKeysIds = ["pi"];
export const constantKeysProps: KeyProps[] = [
  {
    id: "pi",
    label: "\\pi",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\pi",
      method: "cmd",
    },
  },
  {
    id: "infty",
    label: "\\infty",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\infty",
      method: "cmd",
    },
  },
];

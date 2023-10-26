import { KeyProps } from "./key";

export const complexKeysProps: KeyProps[] = [
  {
    id: "overline",
    label: "\\overline{z}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overline",
      method: "cmd",
    },
    groups: ["complex"],
  },
];

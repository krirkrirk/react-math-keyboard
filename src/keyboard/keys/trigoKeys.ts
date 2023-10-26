import { KeyProps } from "./key";

export const trigoKeysProps: KeyProps[] = [
  {
    id: "sin",
    label: "sin",
    labelType: "tex",

    mathfieldInstructions: {
      content: "sin",
      method: "cmd",
    },
    groups: ["trigo"],
  },
  {
    id: "cos",
    label: "cos",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cos",
      method: "cmd",
    },
    groups: ["trigo"],
  },
  {
    id: "tan",
    label: "tan",
    labelType: "tex",

    mathfieldInstructions: {
      content: "tan",
      method: "cmd",
    },
    groups: ["trigo"],
  },
  {
    id: "arccos",
    label: "cos^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\cos^{-1}",
      method: "write",
    },
    groups: ["trigo"],
  },
  {
    id: "arcsin",
    label: "sin^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sin^{-1}",
      method: "write",
    },
    groups: ["trigo"],
  },
  {
    id: "arctan",
    label: "tan^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\tan^{-1}",
      method: "write",
    },
    groups: ["trigo"],
  },
];

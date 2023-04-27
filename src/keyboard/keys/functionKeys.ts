import { KeyProps } from "./key";

export const functionKeysProps: KeyProps[] = [
  {
    id: "log",
    label: "\\log",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\log",
      method: "cmd",
    },
    group: "functions",
  },
  {
    id: "ln",
    label: "\\ln",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\ln",
      method: "cmd",
    },
    group: "functions",
  },
  {
    id: "exp",
    label: "\\exp",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\exp(",
      method: "typedText",
    },
    group: "functions",
  },
  {
    id: "epower",
    label: "e^\\square",
    labelType: "tex",

    mathfieldInstructions: {
      content: "e^",
      method: "typedText",
    },
    group: "functions",
  },
  {
    id: "sin",
    label: "sin",
    labelType: "tex",

    mathfieldInstructions: {
      content: "sin",
      method: "cmd",
    },
    group: "functions",
  },
  {
    id: "cos",
    label: "cos",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cos",
      method: "cmd",
    },
    group: "functions",
  },
  {
    id: "tan",
    label: "tan",
    labelType: "tex",

    mathfieldInstructions: {
      content: "tan",
      method: "cmd",
    },
    group: "functions",
  },
  {
    id: "arccos",
    label: "cos^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\cos^{-1}",
      method: "write",
    },
    group: "functions",
  },
  {
    id: "arcsin",
    label: "sin^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sin^{-1}",
      method: "write",
    },
    group: "functions",
  },
  {
    id: "arctan",
    label: "tan^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\tan^{-1}",
      method: "write",
    },
    group: "functions",
  },
  {
    id: "abs",
    label: "\\left|\\square\\right|",
    labelType: "tex",

    mathfieldInstructions: {
      content: "|",
      method: "cmd",
    },
    group: "functions",
  },
];

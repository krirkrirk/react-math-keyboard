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
  },
  {
    id: "ln",
    label: "\\ln",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\ln",
      method: "cmd",
    },
  },
  {
    id: "exp",
    label: "\\exp",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\exp(",
      method: "typedText",
    },
  },
  {
    id: "epower",
    label: "e^\\square",
    labelType: "tex",

    mathfieldInstructions: {
      content: "e^",
      method: "typedText",
    },
  },
  {
    id: "sin",
    label: "sin",
    labelType: "tex",

    mathfieldInstructions: {
      content: "sin",
      method: "cmd",
    },
  },
  {
    id: "cos",
    label: "cos",
    labelType: "tex",

    mathfieldInstructions: {
      content: "cos",
      method: "cmd",
    },
  },
  {
    id: "tan",
    label: "tan",
    labelType: "tex",

    mathfieldInstructions: {
      content: "tan",
      method: "cmd",
    },
  },
  {
    id: "arccos",
    label: "cos^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\cos^{-1}",
      method: "write",
    },
  },
  {
    id: "arcsin",
    label: "sin^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sin^{-1}",
      method: "write",
    },
  },
  {
    id: "arctan",
    label: "tan^{-1}",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\tan^{-1}",
      method: "write",
    },
  },
  {
    id: "abs",
    label: "\\left|\\square\\right|",
    labelType: "tex",

    mathfieldInstructions: {
      content: "|",
      method: "cmd",
    },
  },
];

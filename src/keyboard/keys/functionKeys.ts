import { KeyCategory, KeyProps } from "./key";

export const functionKeysProps: KeyProps[] = [
  {
    id: "log",
    label: "\\log",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\log",
      method: "cmd",
    },
  },
  {
    id: "ln",
    label: "\\ln",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\ln",
      method: "cmd",
    },
  },
  {
    id: "exp",
    label: "\\exp",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\exp(",
      method: "typedText",
    },
  },
  {
    id: "epower",
    label: "e^\\square",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "e^",
      method: "typedText",
    },
  },
  {
    id: "sin",
    label: "sin",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "sin",
      method: "cmd",
    },
  },
  {
    id: "cos",
    label: "cos",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "cos",
      method: "cmd",
    },
  },
  {
    id: "tan",
    label: "tan",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "tan",
      method: "cmd",
    },
  },
  {
    id: "arccos",
    label: "cos^{-1}",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\cos^{-1}",
      method: "write",
    },
  },
  {
    id: "arcsin",
    label: "sin^{-1}",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\sin^{-1}",
      method: "write",
    },
  },
  {
    id: "arctan",
    label: "tan^{-1}",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: {
      content: "\\tan^{-1}",
      method: "write",
    },
  },
];

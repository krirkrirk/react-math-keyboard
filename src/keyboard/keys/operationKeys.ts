import { KeyProps } from "./key";

export const operationKeysProps: KeyProps[] = [
  {
    id: "plus",
    label: "+",
    labelType: "tex",

    mathfieldInstructions: {
      content: "+",
      method: "write",
    },
    groups: ["basicOperations"],
  },
  {
    id: "minus",
    label: "-",
    labelType: "tex",

    mathfieldInstructions: {
      content: "-",
      method: "write",
    },
    groups: ["basicOperations"],
  },
  {
    id: "times",
    label: "\\times",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\times",
      method: "cmd",
    },
    groups: ["basicOperations"],
  },
  {
    id: "frac",
    label: "\\div",
    labelType: "tex",

    mathfieldInstructions: {
      content: "/",
      method: "cmd",
    },
    groups: ["basicOperations"],
  },
  {
    id: "sqrt",
    label: "\\sqrt{\\ }",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\sqrt",
      method: "cmd",
    },
    groups: ["basicOperations"],
  },
  {
    id: "sqrtCub",
    label: "\\sqrt[3]{\\ }",
    labelType: "tex",

    mathfieldInstructions: {
      content: "\\nthroot3",
      method: "typedText",
    },
    groups: ["otherOperations"],
  },
  {
    id: "square",
    label: "\\square^2",
    labelType: "tex",
    groups: ["basicOperations"],
    mathfieldInstructions: { content: "^2", method: "write" },
  },

  {
    id: "cube",
    label: "\\square^3",
    labelType: "tex",

    mathfieldInstructions: { content: "^3 ", method: "write" },
    groups: ["otherOperations"],
  },

  {
    id: "power",
    label: "\\square^n",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: { content: "^", method: "cmd" },
  },

  {
    id: "leftParenthesis",
    label: "(",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: "(",
      method: "typedText",
    },
  },
  {
    id: "rightParenthesis",
    label: ")",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: ")",
      method: "typedText",
    },
  },

  {
    id: "comma",
    label: "{,}",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: ",",
      method: "write",
    },
  },
  {
    id: "dot",
    label: ".",
    labelType: "tex",
    groups: ["otherOperations"],

    mathfieldInstructions: {
      content: ".",
      method: "write",
    },
  },
  {
    id: "obelus",
    label: "\\div",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: "\\div",
      method: "write",
    },
  },
];

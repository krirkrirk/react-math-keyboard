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
    keypressId: "+",
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
    keypressId: "-",
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
    keypressId: "*",
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
    keypressId: "/",
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
    keypressId: "²",
    backspacesNeededCount: 3,
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
    keypressId: "^",
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
    keypressId: "(",
  },
  {
    id: "leftParenthesisNoLeft",
    label: "(",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: "(",
      method: "write",
    },
    keypressId: "(",
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
    id: "rightParenthesisNoRight",
    label: ")",
    labelType: "tex",
    groups: ["basicOperations"],

    mathfieldInstructions: {
      content: ")",
      method: "write",
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
    keypressId: ",",
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
    keypressId: ".",
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
    keypressId: "/",
  },
];

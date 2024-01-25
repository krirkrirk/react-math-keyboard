import { KeyProps } from "./key";

export const sequenceKeysProps: KeyProps[] = [
  {
    id: "underscore",
    label: "\\square_n",
    labelType: "tex",
    mathfieldInstructions: { content: "_", method: "cmd" },
    groups: ["sequences", "algebra", "proba"],
    keypressId: "_",
  },
  {
    id: "un",
    label: "u_n",
    labelType: "tex",
    mathfieldInstructions: {
      content: "u_n",
      method: "write",
    },
    groups: ["sequences"],
  },
  {
    id: "unplus1",
    label: "u_{n+1}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "u_{n+1}",
      method: "write",
    },
    groups: ["sequences"],
  },
];

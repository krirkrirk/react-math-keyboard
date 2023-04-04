import { KeyCategory, KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";

export type ToolbarTab = {
  id: ToolbarTabIds;
  label: string;
  keys: (KeyId | KeyProps)[];
};

export type ToolbarTabIds =
  | "trigo"
  | "greek"
  | "sets"
  | "sequences"
  | "functions"
  | "polynomial";

export const toolbarTabs: ToolbarTab[] = [
  {
    id: "polynomial",
    label: "x^n",
    keys: ["x", "power", "cube"],
  },
  {
    id: "functions",
    label: "f(x)",
    keys: ["exp", "ln", "log", "epower"],
  },

  {
    id: "trigo",
    label: "f(x)",
    keys: ["pi", "sin", "cos", "tan", "arctan", "arcsin", "arccos"],
  },
  {
    id: "greek",
    label: "\\alpha",
    keys: [
      "alpha",
      "beta",
      "delta",
      "Delta",
      "sigma",
      "theta",
      "tau",
      "lambda",
      "omega",
      "Omega",
      "mu",
      "phi",
      "gamma",
    ],
  },
  {
    id: "sets",
    label: "\\{ ; \\}",
    keys: [
      "cap",
      "cup",
      "lbrace",
      "rbrace",
      "lbracket",
      "rbracket",
      "semicolon",
      "infty",
      "emptyset",
    ],
  },
  {
    id: "sequences",
    label: "u_n",
    keys: [
      "underscore",
      {
        id: "un",
        label: "u_n",
        labelType: "tex",
        keyCategory: KeyCategory.function,
        mathfieldInstructions: {
          content: "u_n",
          method: "write",
        },
      } as KeyProps,
      {
        id: "unplus1",
        label: "u_{n+1}",
        labelType: "tex",
        keyCategory: KeyCategory.function,
        mathfieldInstructions: {
          content: "u_{n+1}",
          method: "write",
        },
      } as KeyProps,
    ],
  },
];

export const defaultTabs: ToolbarTabIds[] = [
  "polynomial",
  "sets",
  "trigo",
  "functions",
  "greek",
  "sequences",
];

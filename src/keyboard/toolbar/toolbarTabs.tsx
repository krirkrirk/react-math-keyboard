import { KeyCategory, KeyProps } from "../keys/key";
import { KeyId } from "../keys/keys";

export type ToolbarTab = {
  id: ToolbarTabIds;
  label: string;
  rawLabel: string;
  keys: (KeyId | KeyProps)[];
};

export type ToolbarTabIds = "trigo" | "greek" | "sets" | "sequences" | "functions" | "polynomial";

export const toolbarTabs: ToolbarTab[] = [
  {
    id: "polynomial",
    label: "x^n",
    rawLabel: "x",
    keys: ["x", "equal", "power", "cube", "y", "t", "n", "z"],
  },
  {
    id: "functions",
    label: "f(x)",
    rawLabel: "f(x)",

    keys: ["exp", "ln", "log", "epower"],
  },

  {
    id: "trigo",
    label: "f(x)",
    rawLabel: "cos(x)",

    keys: ["pi", "°", "sin", "cos", "tan", "arcsin", "arccos", "arctan"],
  },
  {
    id: "greek",
    label: "\\beta",
    rawLabel: "β",

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
    rawLabel: "{... ; ...}",
    keys: ["cap", "cup", "lbrace", "rbrace", "lbracket", "rbracket", "semicolon", "infty", "emptyset"],
  },
  {
    id: "sequences",
    label: "u_n",
    rawLabel: "(Un)",
    keys: [
      "n",
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
      "v",
      "w",
      "z",
    ],
  },
];

export const defaultTabs: ToolbarTabIds[] = ["polynomial", "sets", "trigo", "functions", "greek", "sequences"];

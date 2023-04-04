import { KeyCategory, KeyProps } from "../keys/key";
import { NumericLayoutProps } from "./numericLayout";

const defaultNumericLayoutProps: NumericLayoutProps = {
  // toolbarKeys: ["x", "percent"],
  toolbarProps: {
    keys: [
      "x",
      "pi",
      "power",
      "underscore",
      "exp",
      "ln",
      "log",
      "epower",
      "sin",
      "cos",
      "tan",
      "arctan",
      "arcsin",
      "arccos",
      "cap",
      "cup",
      "lbrace",
      "rbrace",
      "lbracket",
      "rbracket",
      "semicolon",
      "infty",
      "emptyset",
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
  // toolbarKeys: ["x", "percent", "percent", "percent", "percent", "percent", "percent", "percent", "percent", "percent", "percent", "percent", "percent"],
};

export { defaultNumericLayoutProps };

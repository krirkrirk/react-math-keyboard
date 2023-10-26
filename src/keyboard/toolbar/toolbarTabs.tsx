import { KeyProps } from "../keys/key";
import { KeyGroupIds, keyGroups } from "../keys/keyGroup";
import { KeyId } from "../keys/keyIds";
import { allKeysProps } from "../keys/keys";

export type ToolbarTab = {
  id: ToolbarTabIds;
  label: string;
  rawLabel: string;
  keys: (KeyId | KeyProps)[];
};

// export type ToolbarTabIds = "trigo" | "greek" | "sets" | "sequences" | "functions" | "polynomial" | "proba";
export type ToolbarTabIds = KeyGroupIds;
// export const toolbarTabs: ToolbarTab[] = [
//   {
//     id: "polynomial",
//     label: "x^n",
//     rawLabel: "x",
//     keys: ["x", "percent", "equal", "approx", "leq", "geq", "inf", "sup", "cube", "y", "t", "n", "z"],
//   },
//   {
//     id: "functions",
//     label: "f(x)",
//     rawLabel: "f(x)",

//     keys: ["abs", "exp", "ln", "log", "epower", "quote"],
//   },

//   {
//     id: "trigo",
//     label: "f(x)",
//     rawLabel: "cos(x)",

//     keys: ["pi", "degree", "sin", "cos", "tan", "arcsin", "arccos", "arctan"],
//   },
//   {
//     id: "greek",
//     label: "\\beta",
//     rawLabel: "β",

//     keys: [
//       "alpha",
//       "beta",
//       "delta",
//       "Delta",
//       "sigma",
//       "theta",
//       "tau",
//       "lambda",
//       "omega",
//       "Omega",
//       "mu",
//       "phi",
//       "gamma",
//     ],
//   },
//   {
//     id: "sets",
//     label: "\\{ ; \\}",
//     rawLabel: "{... ; ...}",
//     keys: [
//       "belongs",
//       "notin",
//       "cap",
//       "cup",
//       "lbrace",
//       "rbrace",
//       "lbracket",
//       "rbracket",
//       "semicolon",
//       "infty",
//       "emptyset",
//       "naturals",
//       "integers",
//       "decimals",
//       "rationals",
//       "reals",
//       "complex",
//       "ast",
//     ],
//   },
//   {
//     id: "proba",
//     label: "P(A)",
//     rawLabel: "P(A)",

//     keys: ["minProba", "majProba", "cap", "cup", "overlineProba", "underscore", "binom"],
//   },
//   {
//     id: "sequences",
//     label: "u_n",
//     rawLabel: "(Un)",
//     keys: [
//       "n",
//       "underscore",
//       {
//         id: "un",
//         label: "u_n",
//         labelType: "tex",
//         mathfieldInstructions: {
//           content: "u_n",
//           method: "write",
//         },
//       } as KeyProps,
//       {
//         id: "unplus1",
//         label: "u_{n+1}",
//         labelType: "tex",
//         mathfieldInstructions: {
//           content: "u_{n+1}",
//           method: "write",
//         },
//       } as KeyProps,
//       "u",
//       "v",
//       "w",
//       "z",
//     ],
//   },
// ];
export const toolbarTabs = keyGroups.map((group) => {
  return {
    id: group.id,
    label: group.label,
    rawLabel: group.label,
    keys: allKeysProps.filter((key) => key.groups?.includes(group.id)),
  };
});
// export const defaultTabs: ToolbarTabIds[] = ["polynomial", "sets", "trigo", "functions", "proba", "greek", "sequences"];
export const defaultTabs: ToolbarTabIds[] = keyGroups
  .filter(
    (group) =>
      ![
        "basicOperations",
        "utility",
        "minLetters",
        "majLetters",
        "numbers",
        "words",
        "alphabet",
        "atoms",
        "molecules",
      ].includes(group.id)
  )
  .map((group) => group.id);

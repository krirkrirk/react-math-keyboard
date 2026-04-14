import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

export const probaKeysProps: KeyProps[] = (() => {
  const keys: KeyProps[] = [
    {
      id: "overlineProba",
      label: "\\overline{A}",
      labelType: "tex",
      mathfieldInstructions: {
        content: "overline",
        method: "cmd",
      },
      groups: ["proba"],
    },

    {
      id: "minProba",
      label: "p()",
      labelType: "tex",

      mathfieldInstructions: {
        content: "p(",
        method: "typedText",
      },
      groups: ["proba"],
      keypressId: "p",
    },
    {
      id: "majProba",
      label: "P()",
      labelType: "tex",

      mathfieldInstructions: {
        content: "P(",
        method: "typedText",
      },
      groups: ["proba"],
      keypressId: "P",
    },
    {
      id: "binom",
      label: "\\binom{a}{b}",
      labelType: "tex",

      mathfieldInstructions: {
        content: "binom",
        method: "cmd",
      },
      groups: ["proba"],
    },
  ];

  for (let i = 0; i < 26; i++) {
    keys.push({
      id: `overline${String.fromCharCode(65 + i)}` as KeyId,
      label: `\\overline{${String.fromCharCode(65 + i)}}`,
      // keypressId: "°",
      labelType: "tex",
      mathfieldInstructions: {
        content: `\\embed{tokenOverline${String.fromCharCode(65 + i)}}`,
        method: "write",
      },
      groups: ["proba"],
    });
  }
  return keys;
})();

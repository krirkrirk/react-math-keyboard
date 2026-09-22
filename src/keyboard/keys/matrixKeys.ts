import { KeyProps } from "./key";

export const matrixKeysProps: KeyProps[] = (() => {
  const keys: KeyProps[] = [
    //mat 2x2
    {
      id: `mat-2-2`,
      label: `\\left({ {}_{\\square}^{\\square} \\  {}_{\\square}^{\\square} }\\right)`,
      labelType: "tex",
      mathfieldInstructions: {
        content: `\\pmatrix`,
        method: "cmd",
      },
      groups: ["matrix"],
    } as KeyProps,

    //det 2x2
    {
      id: `det-2-2`,
      label: `\\left| { {}_{\\square}^{\\square} \\  {}_{\\square}^{\\square} }\\right|`,
      labelType: "tex",
      mathfieldInstructions: {
        content: `\\vmatrix`,
        method: "cmd",
      },
      groups: ["matrix"],
    } as KeyProps,
  ];

  return keys;
})();

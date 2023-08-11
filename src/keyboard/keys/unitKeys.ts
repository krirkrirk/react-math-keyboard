import { KeyProps } from "./key";

const allPrimaryUnits = [
  //volume
  "mL",
  "cL",
  "dL",
  "L",
  "hL",
  "kL",
  //physique
  "mol",
  "J",
  "kJ",
  "Hz",
  //metres
  "mm",
  "cm",
  "dm",
  "m",
  "km",
  //temps
  "ms",
  "s",
  "h",
  //masse
  "mg",
  "g",
  "kg",
];
export const unitKeysProps: Array<KeyProps> = [
  ...allPrimaryUnits.map((el): KeyProps => {
    return {
      id: el,
      label: el,
      labelType: "raw",
      mathfieldInstructions: {
        content: `\\text{${el}}`,
        method: "write",
      },
      group: "units",
    };
  }),

  {
    id: "cm2",
    label: "\\text{cm}^2",
    labelType: "tex",
    mathfieldInstructions: {
      content: "\\text{cm}^2",
      method: "write",
    },
    group: "units",
  },
];

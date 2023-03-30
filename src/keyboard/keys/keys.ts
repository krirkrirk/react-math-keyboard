import { constantKeysProps } from "./constantKeys";
import { functionKeysProps } from "./functionKeys";
import { greekLettersKeysProps } from "./greekLetters";
import { KeyCategory, KeyProps } from "./key";
import { majLettersKeysProps, minLettersKeysProps } from "./letterKeys";
import { numberKeysProps } from "./numberKeys";
import { operationKeysProps } from "./operationKeys";
import { setKeysProps } from "./setKeys";
import { utilityKeysProps } from "./utilityKeys";

const keysProps: KeyProps[] = [
  ...numberKeysProps,
  ...minLettersKeysProps,
  ...majLettersKeysProps,
  ...constantKeysProps,
  ...operationKeysProps,
  ...functionKeysProps,
  ...utilityKeysProps,
  ...setKeysProps,
  ...greekLettersKeysProps,
  {
    id: "overrightarrow",
    label: "\\overrightarrow{AB}",
    labelType: "tex",
    keyCategory: KeyCategory.operator,
    mathfieldInstructions: {
      content: "overrightarrow",
      method: "cmd",
    },
  },
  {
    id: "space",
    label: "",
    labelType: "raw",
    keyCategory: KeyCategory.letter,
    mathfieldInstructions: {
      content: " ",
      method: "write",
    },
  },

  {
    id: "underscore",
    label: "\\square_n",
    labelType: "tex",
    keyCategory: KeyCategory.function,
    mathfieldInstructions: { content: "_", method: "cmd" },
  },
];

// const allIds = [
//   ...majLettersIds,
//   ...minLettersIds,
//   ...numbersIds,
//   ...constantKeysIds,
//   ...operationKeysIds,
//   ...utilityKeysIds,
// ];

export type KeyId = string;

export const KeysPropsMap = new Map<KeyId, KeyProps>(
  keysProps.map((obj) => {
    return [obj.id, obj];
  }),
);

import { constantKeysProps } from "./constantKeys";
import { functionKeysProps } from "./functionKeys";
import { greekLettersKeysProps } from "./greekLetters";
import { KeyProps } from "./key";
import { KeyId } from "./keyIds";
import { majLettersKeysProps, minLettersKeysProps } from "./letterKeys";
import { numberKeysProps } from "./numberKeys";
import { operationKeysProps } from "./operationKeys";
import { ponctuationKeysProps } from "./ponctuationKeys";
import { setKeysProps } from "./setKeys";
import { unitKeysProps } from "./unitKeys";
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
  ...unitKeysProps,
  ...ponctuationKeysProps,
  {
    id: "overrightarrow",
    label: "\\overrightarrow{AB}",
    labelType: "tex",
    mathfieldInstructions: {
      content: "overrightarrow",
      method: "cmd",
    },
  },
  {
    id: "space",
    label: "",
    labelType: "raw",
    mathfieldInstructions: {
      content: " ",
      method: "write",
    },
  },

  {
    id: "underscore",
    label: "\\square_n",
    labelType: "tex",
    mathfieldInstructions: { content: "_", method: "cmd" },
  },
];

export const KeysPropsMap = new Map<KeyId, KeyProps>(
  keysProps.map((obj) => {
    return [obj.id as KeyId, obj];
  })
);

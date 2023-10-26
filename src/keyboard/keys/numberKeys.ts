import { KeyProps } from "./key";
import { KeyId } from "./keyIds";

export const numbersIds: KeyId[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const numberKeysProps = numbersIds.map((label): KeyProps => {
  return {
    id: label,
    label: label,
    labelType: "tex",
    mathfieldInstructions: { content: label, method: "write" },
    groups: ["numbers"],
  };
});

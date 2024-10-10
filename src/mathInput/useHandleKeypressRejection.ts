import { useEffect } from "react";
import { KeysPropsMap } from "../keyboard/keys/keys";
import { KeyProps } from "../keyboard/keys/key";
import { KeyId } from "../keyboard/keys/keyIds";

const vanillaKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  ",",
  "(",
  ")",
  "²",
  "^",
  "*",
  "/",
];

type Props = {
  forbidOtherKeyboardKeys: boolean;
  numericToolbarKeys?: (KeyId | KeyProps)[];
  loaded: boolean;
  mathfieldId: number;
};
export const useHandleKeyPressRejection = ({
  forbidOtherKeyboardKeys,
  numericToolbarKeys,
  loaded,
  mathfieldId,
}: Props) => {
  useEffect(() => {
    if (!forbidOtherKeyboardKeys || !loaded) return;
    let keys: (string | undefined)[] = [...vanillaKeys];
    if (numericToolbarKeys)
      keys.push(
        ...numericToolbarKeys.map((key) => {
          return typeof key === "string"
            ? KeysPropsMap.get(key)!.keypressId
            : key.keypressId;
        })
      );

    keys = keys.filter((e) => e !== undefined);

    const exec = (event: KeyboardEvent) => {
      if (!keys.includes(event.key)) event.preventDefault();
    };
    const inputElement = document.getElementById(
      `mq-keyboard-${mathfieldId}-container`
    );
    inputElement?.addEventListener("keypress", exec);
    return () => inputElement?.removeEventListener("keypress", exec);
  }, [forbidOtherKeyboardKeys, numericToolbarKeys, loaded]);
};

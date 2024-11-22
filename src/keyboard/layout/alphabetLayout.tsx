import React, { useEffect, useState } from "react";
import { Key, KeyProps } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { LetterKey } from "../keys/letterKey";
import { Toolbar } from "../toolbar/toolbar";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type AlphabetLayoutProps = {
  toolbarKeys?: (KeyId | KeyProps)[];
  onSwitch?: () => void;
  lang: Langs;
  tabShouldSkipKeys?: boolean;
};

const rows: KeyId[][] = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["w", "x", "c", "v", "b", "n"],
];

const minToolbarKeys: KeyId[] = [
  "é",
  "è",
  "à",
  "ù",
  "ç",
  "ô",
  "hyphen",
  "quote",
  "guillemet",
  "euro",
];
const majToolbarKeys: KeyId[] = ["É", "È", "Ç", "À"];

export const AlphabetLayout = ({
  toolbarKeys = [],
  onSwitch,
  lang,
  tabShouldSkipKeys,
}: AlphabetLayoutProps) => {
  const [isMaj, setIsMaj] = useState(false);
  const onMaj = () => {
    setIsMaj((prev) => !prev);
  };
  const [shownToolbarKeys, setShownToolbarKeys] = useState<KeyId[]>([]);
  useEffect(() => {
    setShownToolbarKeys(isMaj ? majToolbarKeys : minToolbarKeys);
  }, [isMaj]);

  return (
    <div className="react-math-keyboard-keyboard-layout">
      <Toolbar
        tabShouldSkipKeys={tabShouldSkipKeys}
        keys={shownToolbarKeys}
        lang={lang}
      />

      <div className="react-math-keyboard-alphabet-layout">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(10, minmax(0,1fr))",
            gap: "0.25rem",
          }}
        >
          {rows[0].map((letter) => (
            <LetterKey
              letter={letter}
              key={letter}
              isInMathMode={false}
              isMaj={isMaj}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          ))}
          {rows[1].map((letter) => (
            <LetterKey
              letter={letter}
              key={letter}
              isInMathMode={false}
              isMaj={isMaj}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          ))}
          <div style={{ gridColumn: "span 2" }}>
            <Key
              id={"maj"}
              label={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-shift"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047zM14.346 9.5 8 2.731 1.654 9.5H4.5a1 1 0 0 1 1 1v3h5v-3a1 1 0 0 1 1-1h2.846z" />
                </svg>
              }
              labelType="svg"
              onClick={onMaj}
              isUtilityKey
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
          {rows[2].map((letter) => (
            <LetterKey
              letter={letter}
              key={letter}
              isInMathMode={false}
              isMaj={isMaj}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          ))}
          <Key
            {...KeysPropsMap.get("comma")!}
            tabShouldSkipKeys={tabShouldSkipKeys}
          />
          <Key
            {...KeysPropsMap.get("dot")!}
            tabShouldSkipKeys={tabShouldSkipKeys}
          />
        </div>
        <div style={{ display: "flex", columnGap: "0.25rem" }}>
          <div style={{ flexGrow: 1 }}>
            <Key
              id="switch"
              label={"123"}
              labelType="raw"
              onClick={onSwitch}
              isUtilityKey
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
          <div style={{ flexGrow: 0.5 }}>
            <Key
              {...KeysPropsMap.get("left")!}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
          <div style={{ flexGrow: 4 }}>
            <Key
              {...KeysPropsMap.get("space")!}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
          <div style={{ flexGrow: 0.5 }}>
            <Key
              {...KeysPropsMap.get("right")!}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <Key
              {...KeysPropsMap.get("del")!}
              tabShouldSkipKeys={tabShouldSkipKeys}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

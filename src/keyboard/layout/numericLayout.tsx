import { Key, KeyProps } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { Toolbar, ToolbarProps } from "../toolbar/toolbar";
import React from "react";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type NumericLayoutProps = {
  toolbarKeys?: (KeyId | KeyProps)[];
  showTabs?: boolean;
  toolbarTabs?: ToolbarTabIds[];
  onSwitch?: () => void;
  onHideKeyboard?: () => void;
  divisionFormat: "fraction" | "obelus";
  allowAlphabeticKeyboard: boolean;
  lang: Langs;
  parenthesisShouldNotProduceLeftRight?: boolean;
  onDeleteSequence?: (nodeId: number) => void;
};

export const NumericLayout = ({
  toolbarKeys,
  toolbarTabs,
  onSwitch,
  divisionFormat,
  allowAlphabeticKeyboard,
  onHideKeyboard,
  lang,
  parenthesisShouldNotProduceLeftRight,
  onDeleteSequence,
}: NumericLayoutProps) => {
  const hideToolbar = !!toolbarKeys && !toolbarKeys.length;

  return (
    <div className="react-math-keyboard-keyboard-layout">
      {!hideToolbar && (
        <Toolbar keys={toolbarKeys} tabs={toolbarTabs} lang={lang} />
      )}
      <div className="react-math-keyboard-numeric-layout">
        <div
          className="react-math-keyboard-layout-grid"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
            flexGrow: 1,
          }}
        >
          {parenthesisShouldNotProduceLeftRight ? (
            <Key {...KeysPropsMap.get("leftParenthesisNoLeft")!} />
          ) : (
            <Key {...KeysPropsMap.get("leftParenthesis")!} />
          )}

          {parenthesisShouldNotProduceLeftRight ? (
            <Key {...KeysPropsMap.get("rightParenthesisNoRight")!} />
          ) : (
            <Key {...KeysPropsMap.get("rightParenthesis")!} />
          )}

          <Key {...KeysPropsMap.get("times")!} />
          {divisionFormat === "fraction" ? (
            <Key {...KeysPropsMap.get("frac")!} />
          ) : (
            <Key {...KeysPropsMap.get("obelus")!} />
          )}
          <Key {...KeysPropsMap.get("sqrt")!} />
          <Key {...KeysPropsMap.get("square")!} />
          {allowAlphabeticKeyboard ? (
            <Key
              id="switch"
              label={"abc"}
              labelType="raw"
              onClick={onSwitch}
              isUtilityKey
            />
          ) : (
            <Key
              id="close"
              label={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-keyboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
                  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
                </svg>
              }
              labelType="svg"
              onClick={onHideKeyboard}
              isUtilityKey
            />
          )}
          <Key {...KeysPropsMap.get("power")!} />
        </div>
        <div
          className="react-math-keyboard-layout-grid"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            flexGrow: 2,
          }}
        >
          <Key {...KeysPropsMap.get("7")!} />
          <Key {...KeysPropsMap.get("8")!} />
          <Key {...KeysPropsMap.get("9")!} />
          <Key {...KeysPropsMap.get("4")!} />
          <Key {...KeysPropsMap.get("5")!} />
          <Key {...KeysPropsMap.get("6")!} />
          <Key {...KeysPropsMap.get("1")!} />
          <Key {...KeysPropsMap.get("2")!} />
          <Key {...KeysPropsMap.get("3")!} />
          <Key {...KeysPropsMap.get("left")!} />
          <Key {...KeysPropsMap.get("0")!} />
          <Key {...KeysPropsMap.get("right")!} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "0.25rem",
            flexGrow: 1,
          }}
        >
          <Key {...KeysPropsMap.get("plus")!} />
          <Key {...KeysPropsMap.get("minus")!} />

          <Key {...KeysPropsMap.get("comma")!} />
          <Key
            {...KeysPropsMap.get("del")!}
            onDeleteSequence={onDeleteSequence}
          />
        </div>
      </div>
    </div>
  );
};

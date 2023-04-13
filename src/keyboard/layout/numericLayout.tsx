import { Key, KeyProps } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { Toolbar, ToolbarProps } from "../toolbar/toolbar";
import React from "react";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
import { KeyId } from "../keys/keyIds";
export type NumericLayoutProps = {
  toolbarKeys?: (KeyId | KeyProps)[];
  showTabs?: boolean;
  toolbarTabs?: ToolbarTabIds[];
  onSwitch?: () => void;
  divisionFormat: "fraction" | "obelus";
};

export const NumericLayout = ({ toolbarKeys, toolbarTabs, onSwitch, divisionFormat }: NumericLayoutProps) => {
  const hideToolbar = !!toolbarKeys && !toolbarKeys.length;

  return (
    <div className="react-math-keyboard-keyboard-layout">
      {!hideToolbar && <Toolbar keys={toolbarKeys} tabs={toolbarTabs} />}
      <div className="react-math-keyboard-numeric-layout">
        <div
          className="react-math-keyboard-layout-grid"
          style={{
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
            flexGrow: 1,
          }}
        >
          <Key {...KeysPropsMap.get("leftParenthesis")!} />
          <Key {...KeysPropsMap.get("rightParenthesis")!} />

          <Key {...KeysPropsMap.get("times")!} />
          {divisionFormat === "fraction" ? (
            <Key {...KeysPropsMap.get("frac")!} />
          ) : (
            <Key {...KeysPropsMap.get("obelus")!} />
          )}
          <Key {...KeysPropsMap.get("sqrt")!} />
          <Key {...KeysPropsMap.get("square")!} />
          <Key id="switch" label={"abc"} labelType="raw" onClick={onSwitch} isUtilityKey />
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
          <Key {...KeysPropsMap.get("del")!} />
        </div>
      </div>
    </div>
  );
};

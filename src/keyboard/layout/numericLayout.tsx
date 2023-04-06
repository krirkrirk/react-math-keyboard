import { Key, KeyCategory, KeyProps } from "../keys/key";
import { KeyId, KeysPropsMap } from "../keys/keys";
import { Toolbar, ToolbarProps } from "../toolbar/toolbar";
import React from "react";
import { ToolbarTabIds } from "../toolbar/toolbarTabs";
export type NumericLayoutProps = {
  toolbarKeys?: (KeyId | KeyProps)[];
  showTabs?: boolean;
  toolbarTabs?: ToolbarTabIds[];
  onSwitch?: () => void;
};

export const NumericLayout = ({ toolbarKeys, toolbarTabs, onSwitch }: NumericLayoutProps) => {
  const hideToolbar = !!toolbarKeys && !toolbarKeys.length;

  return (
    <div
      // className="w-full flex flex-col items-center"
      className="react-math-keyboard-keyboard-layout"
    >
      {!hideToolbar && <Toolbar keys={toolbarKeys} tabs={toolbarTabs} />}
      <div
        // className="max-w-3xl w-full p-1 pt-2 grid grid-cols-[2fr_3fr_1fr] gap-x-3 sm:gap-x-10"
        className="react-math-keyboard-numeric-layout"
      >
        <div
          // className="grid grid-cols-2 gap-y-1 grow gap-x-1 sm:gap-x-2 justify-stretch"
          className="react-math-keyboard-layout-grid"
          style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))", flexGrow: 1 }}
        >
          <Key {...KeysPropsMap.get("times")!} />
          <Key {...KeysPropsMap.get("plus")!} />
          <Key {...KeysPropsMap.get("frac")!} />
          <Key {...KeysPropsMap.get("minus")!} />
          <Key {...KeysPropsMap.get("sqrt")!} />
          <Key {...KeysPropsMap.get("square")!} />
          <Key id="switch" label={"abc"} labelType="raw" keyCategory={KeyCategory.utility} onClick={onSwitch} />
          <Key {...KeysPropsMap.get("percent")!} />
        </div>
        <div
          // className="grid grid-cols-3 gap-y-1 grow-[2] gap-x-1 sm:gap-x-2 justify-stretch"
          className="react-math-keyboard-layout-grid"
          style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))", flexGrow: 2 }}
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
          // className="flex flex-col gap-y-1 grow"
          style={{ display: "flex", flexDirection: "column", rowGap: "0.25rem", flexGrow: 1 }}
        >
          <Key {...KeysPropsMap.get("leftParenthesis")!} />
          <Key {...KeysPropsMap.get("rightParenthesis")!} />
          <Key {...KeysPropsMap.get("comma")!} />
          <Key {...KeysPropsMap.get("del")!} />
        </div>
      </div>
    </div>
  );
};

import { Key, KeyProps } from "../keys/key";
import { KeyId, KeysPropsMap } from "../keys/keys";
import { useContext, useEffect, useState } from "react";
import { ToolbarTabIds, defaultTabs, toolbarTabs } from "./toolbarTabs";
import { MathFieldContext } from "../../mathInput/mathfieldContext";
export type ToolbarProps = {
  keys?: (KeyId | KeyProps)[];
  tabs?: ToolbarTabIds[];
};

export const Toolbar = ({ keys, tabs = defaultTabs }: ToolbarProps) => {
  const [shownKeys, setShownKeys] = useState<(KeyId | KeyProps)[]>();
  const [currentTab, setCurrentTab] = useState<ToolbarTabIds>(tabs[0]);
  const mathfield = useContext(MathFieldContext);

  useEffect(() => {
    setShownKeys(keys);
  }, [keys]);

  useEffect(() => {
    if (keys?.length) return;
    const tab = toolbarTabs.find((t) => t.id === currentTab);
    setShownKeys(tab?.keys);
  }, [currentTab, keys]);
  return (
    <div className="react-math-keyboard-toolbar-container">
      <div className="react-math-keyboard-toolbar">
        <div style={{ overflow: "auto" }}>
          <div className="react-math-keyboard-toolbar-keys-container">
            {shownKeys?.map((keyData) =>
              typeof keyData === "string" ? (
                <Key {...KeysPropsMap.get(keyData)!} key={keyData} fullWidth={false} />
              ) : (
                <Key {...keyData} key={keyData.id} fullWidth={false} />
              )
            )}
          </div>
        </div>
        {!keys?.length && (
          <div className="react-math-keyboard-select-container">
            <select
              onChange={(e) => {
                setCurrentTab(e.target.value as ToolbarTabIds);
                mathfield.focus();
              }}
              className="react-math-keyboard-select"
            >
              {tabs?.map((tabId) => (
                <option key={tabId} value={tabId}>
                  {toolbarTabs.find((t) => t.id === tabId)?.rawLabel}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <hr className="react-math-keyboard-divider" />
    </div>
  );
};

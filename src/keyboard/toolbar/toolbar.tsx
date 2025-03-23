import { Key, KeyProps } from "../keys/key";
import { KeysPropsMap } from "../keys/keys";
import { useContext, useEffect, useState } from "react";
import { ToolbarTabIds, defaultTabs, toolbarTabs } from "./toolbarTabs";
import { MathFieldContext } from "../../mathInput/mathfieldContext";
import { KeyId } from "../keys/keyIds";
import { Langs } from "../keys/keyGroup";
export type ToolbarProps = {
  keys?: (KeyId | KeyProps)[];
  tabs?: ToolbarTabIds[];
  lang: Langs;
  tabShouldSkipKeys?: boolean;
};

export const Toolbar = ({
  keys,
  tabs = defaultTabs,
  lang,
  tabShouldSkipKeys,
}: ToolbarProps) => {
  const [shownKeys, setShownKeys] = useState<(KeyId | KeyProps | string)[]>();
  const [currentTab, setCurrentTab] = useState<ToolbarTabIds>(tabs[0]!);
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
        <div
          style={{ overflowX: "auto", overflowY: "hidden" }}
          tabIndex={tabShouldSkipKeys ? -1 : 0}
        >
          <div className="react-math-keyboard-toolbar-keys-container">
            {shownKeys?.map((keyData) => {
              if (typeof keyData === "string") {
                const foundKey = KeysPropsMap.get(keyData as KeyId);
                if (foundKey)
                  return (
                    <Key
                      {...KeysPropsMap.get(keyData as KeyId)!}
                      key={keyData}
                      fullWidth={false}
                      tabShouldSkipKeys={tabShouldSkipKeys}
                    />
                  );
                else
                  return (
                    <Key
                      id={keyData as KeyId}
                      label={keyData}
                      labelType={"tex"}
                      mathfieldInstructions={{
                        content: keyData,
                        method: "write",
                      }}
                      tabShouldSkipKeys={tabShouldSkipKeys}
                    />
                  );
              } else
                return (
                  <Key
                    {...keyData}
                    key={keyData.id}
                    fullWidth={false}
                    tabShouldSkipKeys={tabShouldSkipKeys}
                  />
                );
            })}
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
              tabIndex={tabShouldSkipKeys ? -1 : 0}
            >
              {tabs?.map((tabId) => (
                <option key={tabId} value={tabId}>
                  {toolbarTabs.find((t) => t.id === tabId)?.rawLabel[lang]}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-right react-math-keyboard-select-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        )}
      </div>
      <hr className="react-math-keyboard-divider" />
    </div>
  );
};

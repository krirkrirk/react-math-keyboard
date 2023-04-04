import { Key, KeyProps } from "../keys/key";
import { KeyId, KeysPropsMap } from "../keys/keys";
import { useEffect, useState } from "react";
import { ToolbarTabIds, defaultTabs, toolbarTabs } from "./toolbarTabs";
export type ToolbarProps = {
  keys?: (KeyId | KeyProps)[];
  tabs?: ToolbarTabIds[];
};

export const Toolbar = ({ keys, tabs = defaultTabs }: ToolbarProps) => {
  const [shownKeys, setShownKeys] = useState<(KeyId | KeyProps)[]>();
  const [currentTab, setCurrentTab] = useState<ToolbarTabIds>(tabs[0]);
  useEffect(() => {
    setShownKeys(keys);
  }, [keys]);

  useEffect(() => {
    if (keys?.length) return;
    const tab = toolbarTabs.find((t) => t.id === currentTab);
    setShownKeys(tab?.keys);
  }, [currentTab, keys]);
  return (
    <div className="bg-slate-400 pt-2 items-center w-full">
      <div className="flex mx-auto max-w-3xl md:max-w-full overflow-auto">
        <div className="flex gap-x-1 px-1 md:min-w-[768px] md:mx-auto pb-1">
          {shownKeys?.map((keyData) =>
            typeof keyData === "string" ? (
              <Key
                {...KeysPropsMap.get(keyData)!}
                key={keyData}
                fullWidth={false}
              />
            ) : (
              <Key {...keyData} key={keyData.id} fullWidth={false} />
            )
          )}
          {!keys?.length && (
            <select
              onChange={(e) => setCurrentTab(e.target.value as ToolbarTabIds)}
            >
              {tabs?.map((tabId) => (
                <option key={tabId} value={tabId}>
                  {tabId}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <hr className="border-t-2 border-slate-500 mt-1" />
    </div>
  );
};

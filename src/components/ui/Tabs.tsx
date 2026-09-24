import { useRef, useEffect, useState } from "react";
import styles from "./Tabs.module.css"

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const currentTabEl = tabRefs.current[activeTab];
    if (currentTabEl) {
      setIndicatorStyle({
        left: currentTabEl.offsetLeft,
        width: currentTabEl.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          ref={(el) => { tabRefs.current[tab.id] = el; }}
          type="button"
          className={`${styles.tabsButton} ${activeTab === tab.id ? styles.tabsButtonActive : ""}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}

      <div
        className={styles.tabsIndicator}
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      />
    </div>
  );
}
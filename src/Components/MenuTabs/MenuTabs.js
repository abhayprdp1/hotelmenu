import React from "react";
import "./MenuTabs.css";
const TABS = ["FOOD", "DRINKS", "BRUNCH"];
function MenuTabs({ activeTab, setActiveTab }) {
  return (
    <nav className="menu-tabs">
      {TABS.map(tab => (
        <button
          key={tab}
          className={`tab-btn${tab === activeTab ? " active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
export default MenuTabs;

import React from "react";
import Cover from "./cover";
import IntelligentTable from "./intelligent_table";
import { Tabs } from "../../ui-components/ui_components";

const tabsInfo = [
  { id: "o1", name: "Cover", disabled: false },
  { id: "o2", name: "Intelligent Table", disabled: false },
  { id: "o3", name: "Media", disabled: false },
  { id: "o4", name: "Modal", disabled: false },
  { id: "o5", name: "Phrases", disabled: false },
  { id: "o6", name: "ToolTip", disabled: false }
];

export default function Input() {
  return (
    <>
      <br />
      <Tabs
        tabSelect={"o2"}
        tabsInfo={tabsInfo}
        tabs={[<Cover id="o1" />, <IntelligentTable id="o2" />]}
      />
    </>
  );
}

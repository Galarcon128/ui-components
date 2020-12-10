import React from "react";
import Card from "./card";
import { Tabs } from "../../ui-components/ui_components";

const tabsInfo = [
  { id: "o1", name: "Card", disabled: false },
  { id: "o2", name: "Media", disabled: false },
  { id: "o3", name: "Modal", disabled: false },
  { id: "o4", name: "Phrases", disabled: false },
  { id: "o5", name: "ToolTip", disabled: false }
];

export default function Input() {
  return (
    <>
      <br />
      <Tabs tabSelect={"o1"} tabsInfo={tabsInfo} tabs={[<Card id="o1" />]} />
    </>
  );
}

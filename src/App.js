import React from "react";
import Input from "./pages/input/input";
import { Tabs, Cover } from "./components/ui-components/ui_components";

const tabsInfo = [
  { id: "01", name: "input", disabled: false },
  { id: "02", name: "output", disabled: false },
  { id: "03", name: "web", disabled: true }
];

export default function App() {
  return (
    <div className="App">
      <Cover>
        <h1>RegulonDB ui-components</h1>
      </Cover>
      <Tabs tabSelect={"01"} tabsInfo={tabsInfo} tabs={[<Input id="01" />]} />
    </div>
  );
}

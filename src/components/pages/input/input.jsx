import React from "react";
import Buttons from "./buttons";
import Selectors from "./selectors";
import Text from "./text";
import { Tabs } from "../../ui-components/ui_components";

const tabsInfo = [
  { id: "input1", name: "Buttons", disabled: false },
  { id: "input2", name: "Selectors", disabled: false },
  { id: "input3", name: "Text", disabled: false }
];

export default function Input() {
  return (
    <>
      <br />
      <Tabs
        tabSelect={"input1"}
        tabsInfo={tabsInfo}
        tabs={[
          <Buttons id="input1" />,
          <Selectors id="input2" />,
          <Text id="input3" />
        ]}
      />
    </>
  );
}

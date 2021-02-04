import React, { useState } from "react";
import {
  RadioButtonGroup,
  CheckBoxGroup
} from "../../ui-components/ui_components";

const options = ["option 1", "option 2", "option 3"];

export default function Buttons() {
  const [_radio, set_radio] = useState(options[0]);
  const [_box, set_box] = useState(options);
  return (
    <article id="Selectors">
      <h2>Selectors</h2>
      <h3>RadioButtonGroup</h3>
      Selectoption:
      <br />
      {_radio}
      <RadioButtonGroup
        arrayOptions={options}
        selectOption={_radio}
        onChange={(op) => {
          set_radio(op);
        }}
      />
      <h3>CheckBoxGroup</h3>
      selections:
      <br />
      {_box.map((option) => {
        return option + "  ";
      })}
      <br />
      <CheckBoxGroup
        arrayOptions={options}
        selectOptions={_box}
        onChange={(op) => {
          set_box(op);
        }}
      />
    </article>
  );
}

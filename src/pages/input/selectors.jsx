import React from "react";
import {
  RadioButtonGroup,
  CheckBoxGroup,
  CheckBox
} from "../../components/ui-components/ui_components";

export default function Buttons() {
  return (
    <article id="Selectors">
      <h2>Selectors</h2>
      <h3>RadioButtonGroup</h3>
      <RadioButtonGroup
        arrayOptions={["option 1", "option 2", "option 3"]}
        selectOption="option 2"
        onChange={(op) => {
          console.log(op);
          alert(op);
        }}
      />
      <h3>CheckBox</h3>
      <CheckBox
        label="Selecction"
        value="Value"
        onChange={(op) => {
          console.log(op);
          alert(op);
        }}
      />
      <h3>CheckBoxGroup</h3>
      <CheckBoxGroup
        arrayOptions={["option 1", "option 2", "option 3"]}
        selectOption="option 2"
        onChange={(op) => {
          console.log(op);
          alert(op);
        }}
      />
    </article>
  );
}

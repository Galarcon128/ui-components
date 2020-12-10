import React, { useState } from "react";
import {
  TextBox,
  TextPassword,
  TextArea
} from "../../components/ui-components/ui_components";

const Text = () => {
  const [_text1, set_text1] = useState("Hola");
  const [_area, set_area] = useState("Hola");
  const [_pwr, set_pwr] = useState("password");
  return (
    <article id="Text">
      <h2>Text</h2>
      <h3>TextBox</h3>
      <TextBox
        onChangeText={(text) => {
          set_text1(text);
        }}
      />
      <p>{_text1}</p>
      <h3>TextPassword</h3>
      <TextPassword
        onChangeText={(text) => {
          set_pwr(text);
        }}
      />
      <p>{_pwr}</p>
      <h3>Text Area</h3>
      <TextArea
        onChangeText={(text) => {
          set_area(text);
        }}
      />
      <p>{_area}</p>
    </article>
  );
};
export default Text;

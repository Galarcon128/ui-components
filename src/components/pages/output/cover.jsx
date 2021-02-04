import React from "react";
import { Cover } from "../../ui-components/ui_components";

export default function Buttons() {
  return (
    <article>
      <h2>Cover Component</h2>
      <h3>rest</h3>
      <Cover>
        <h1>Cover Title</h1>
      </Cover>
      <h3>loading</h3>
      <Cover state="loading">
        <h1>Cover Title</h1>
      </Cover>
      <h3>Error</h3>
      <Cover state="error">
        <h1>Cover Title</h1>
      </Cover>
    </article>
  );
}

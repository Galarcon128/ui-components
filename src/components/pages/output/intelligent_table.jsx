import React from "react";
import { IntelligentTable } from "../../ui-components/ui_components";
import { data } from "./dataTable";

export default function Intelligent_Table() {
  return (
    <article>
      <h2>IntelligentTable</h2>
      <IntelligentTable data={data} />
    </article>
  );
}

import React from "react";
import {
  Button,
  IconButton,
  DropDown,
  Split
} from "../../components/ui-components/ui_components";

export default function Buttons() {
  return (
    <article id="Buttons">
      <h2>Buttons</h2>
      <h3>Button</h3>
      <Button>Button :)</Button>
      <br />
      <Button accent={true}>Button Accent :o</Button>
      <h3>DropDown</h3>
      <DropDown
        arrayOptions={["option 1", "option 2", "option 3"]}
        onSelect={(op) => {
          console.log(op);
          alert(op.option);
        }}
      />
      <h3>IconButtons</h3>
      <IconButton />
      <IconButton icon="build" />
      <IconButton icon="delete" />
      <p>
        para obtener el nombre de iconos disponibles visite la siguiente pagina
      </p>
      <a href="https://material.io/resources/icons/?style=baseline">
        Icon Material
      </a>
      <h3>Split</h3>
      <Split
        arrayOptions={["option 1", "option 2", "option 3"]}
        onClick={(op) => {
          console.log(op);
          alert(op.option);
        }}
      />
      <br />
    </article>
  );
}

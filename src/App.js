import Card from "./Card";
import CopyrightNote from "./CopyrightNote";
import makeKey from "./utils";
import React from "react";

function App(props) {
  const info = props.copyrightInfo;

  const cards = props.persons.map(item => (
    <Card key={makeKey(item.name)} person={item} />
  ));

  return (
    <main>
      <section className="content">{cards}</section>
      <CopyrightNote info={info} />
    </main>
  );
}

export default App;

import React from "react";
import "./App.css";
import NasaApi from "./components/NasaApi";

function App(props) {
  return (
    <div className="App">
      <NasaApi backDate={props.backDate} />
    </div>
  );
}

export default App;

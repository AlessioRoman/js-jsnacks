import { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pt-20 pb-20">
        <Buttons />
      </div>
    </div>
  );
}

export default App;

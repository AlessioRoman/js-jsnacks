import { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section>
          <div className="text-center mt-20">
            <p className="text-grey">Ciao!</p>
            <h1 className="text-white font-bold text-4xl">JSnacks Project</h1>
          </div>
          <div className="mt-2 mb-20 flex justify-center">
            <img
              src="/assets/dev-ed-wave.png"
              alt="char"
              className="w-1/3 rounded-full"
            />
          </div>
        </section>
        <section>
          <div className="pt-20 pb-20">
            <Buttons />
          </div>
          <h2 id="result"></h2>
        </section>
      </main>
    </div>
  );
}

export default App;

import "./styles.css";
import React from "react";

export default function App() {
  const [mode, setMode] = React.useState(false);
  const [modeText, setModeText] = React.useState("Ciemniej!");

  function handleOnClick() {
    var element = document.getElementById("id-in");
    if (mode) {
      setMode(false);
      setModeText("Jaśniej!");
      element.classList.remove("karta");
      element.classList.add("karta-invert");
    } else {
      setMode(true);
      setModeText("Ciemniej!");
      element.classList.add("karta");
      element.classList.remove("karta-invert");
    }
  }

  return (
    <div className="App">
      <button onClick={() => handleOnClick()} className="button-invert">
        {modeText}
      </button>
      <div id="id-in" className="karta">
        <div className="flex-col">
          <div className="flex-row logo-d">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Logotyp_PKO_BP.svg/853px-Logotyp_PKO_BP.svg.png"
            />
          </div>
          <div className="flex-row payment">
            <div className="flex-row flex-t">
              <img
                className="trinagle"
                src="https://img.icons8.com/material-rounded/24/ffffff/give-way.png"
              />
              <img
                className="chip"
                src="https://img.icons8.com/office/30/000000/sim-card-chip.png"
              />
            </div>
            <img
              className="wifi"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/wifi--v1.png"
            />
          </div>
          <div className="flex-row">
            <span className="card-number">5169 3100 0559 2513</span>
          </div>
          <div className="flex-row bot">
            <div></div>
            <div className="flex-col">
              <div className="flex-row">
                <div className="flex-col">
                  <span className="valid-text">VALID</span>
                  <span className="valid-text">THRU</span>
                </div>
                <div className="flex-col">
                  <span className="date-text">11/24</span>
                </div>
              </div>
              <div className="flex-row">
                <span className="name">Bartłomiej Lemański</span>
              </div>
            </div>
            <div className="flex-row">
              <img
                className="maestro"
                src="https://img.icons8.com/color/64/000000/maestro.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

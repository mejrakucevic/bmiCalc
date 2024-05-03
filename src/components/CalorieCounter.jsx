import React from "react";
import "./Calorie.css";

function CalorieCounter() {
  return (
    <body>
      <div className="container">
        <h1>Calorie Intake</h1>
        <div className="buttons">
          <button>Deficit</button>
          <button>Maintain</button>
          <button>Suficite</button>
        </div>
      </div>
    </body>
  );
}

export default CalorieCounter;

import React from "react";
import "../src/Main.css";

function Main() {
  return (
    <div>
      <>
        <body>
          <h1>BMI Calculator</h1>
          <div className="user-input">
            <h4>Age</h4>
            <input type="number" placeholder="25"></input>
            <h4>Gender</h4>
            <div>
              <input type="radio" name="Male" id="rad1"></input>
              <label htmlFor="rad1">Male</label>
              <input type="radio" name="Female" id="rad2"></input>
              <label htmlFor="rad2">Female</label>
            </div>
            <div className="w">
              <h4>Height</h4>
              <input
                type="number"
                placeholder="                                   170"
              ></input>
            </div>{" "}
            <div className="w">
              <h4>Weight</h4>
              <input
                type="number"
                placeholder="                                     65"
              ></input>{" "}
            </div>
            <br />
            <button>Calculate</button>
          </div>{" "}
        </body>
      </>
    </div>
  );
}

export default Main;

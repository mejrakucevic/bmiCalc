import React from "react";
import "../src/Main.css";
import { useState } from "react";

function Main() {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reset = () => {
    window.location.reload();
  };

  const handleCalculation = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid height/weight");
    } else {
      let bmiFormula = weight / (height / 100) ** 2;
      setBmi(bmiFormula.toFixed(2));

      if (bmiFormula < 18.5) {
        setMsg("You're underweight");
      } else if (bmiFormula >= 18.5 && bmiFormula <= 25) {
        setMsg("You're at healthy weight🎉");
      } else {
        setMsg("You're overweight");
      }
    }
  };

  return (
    <div>
      <>
        <body>
          <h1>BMI Calculator</h1>
          <form onSubmit={handleCalculation}>
            <div className="user-input">
              <h4>Age</h4>
              <input
                type="number"
                placeholder="25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              ></input>
              <div className="radios">
                <h4>Gender</h4>
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
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                ></input>
              </div>{" "}
              <div className="w">
                <h4>Weight</h4>
                <input
                  type="number"
                  placeholder="                                     65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                ></input>{" "}
              </div>
              <br />
              <div className="btns">
                <button>Calculate</button>
                <button onClick={reset}>Reset</button>
              </div>
            </div>{" "}
          </form>
          <div className="results">
            <h3>Your BMI is {bmi}</h3>
            <p className="p-msg">{msg}</p>{" "}
          </div>
        </body>
      </>
    </div>
  );
}

export default Main;

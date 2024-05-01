import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const [age, setAge] = useState();
// const [weight, setWeight] = useState();
// const [height, setHeight] = useState();
// const [bmi, setBmi] = useState();
// const [msg, setMsg] = useState("");

// const reset = () => {
//   window.location.reload();
// };

// const handleCalculation = (e) => {
//   e.preventDefault();

//   if (weight === 0 || height === 0) {
//     alert("Please enter valid height/weight");
//   } else {
//     let bmiFormula = weight / (height / 100) ** 2;
//     setBmi(bmiFormula.toFixed(2));

//     if (bmiFormula < 18.5) {
//       setMsg("You're underweight");
//     } else if (bmiFormula >= 18.5 && bmiFormula <= 25) {
//       setMsg("You're at healthy weight🎉");
//     } else {
//       setMsg("You're overweight");
//     }
//   }
// };

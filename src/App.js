import "./styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  var [init, setInit] = useState("");
  var [quantity, setQuantity] = useState("");
  var [currentPrice, setcurrentPrice] = useState("");
  var [message, setmessage] = useState("");

  function getVal(event) {
    setQuantity(event.target.value);
  }
  function getini(event) {
    setInit(event.target.value);
  }

  function getBackground() {
    if (Number(init) > Number(currentPrice)) {
      return "red";
    } else if (Number(currentPrice) > Number(init)) {
      return "green";
    } else {
      return "black";
    }
  }

  function getcurrent(event) {
    setcurrentPrice(event.target.value);
  }
  function profitOrloss() {
    if (Number(init) > Number(currentPrice)) {
      var loss = (Number(init) - Number(currentPrice)) * Number(quantity);
      var lossp = ((loss / init) * 100).toFixed(3);
      setmessage("Loss is " + loss + "and is " + lossp + "%");
    } else if (Number(currentPrice) > Number(init)) {
      var profit = (Number(currentPrice) - Number(init)) * Number(quantity);
      var profitp = ((profit / init) * 100).toFixed(3);
      setmessage("Profit is " + profit + " and is " + profitp + "%");
    } else {
    }
  }

  function clickHandler() {
    if (quantity === "" || init === "" || currentPrice === "") {
      setmessage("Please fill all the fields");
    } else {
      profitOrloss(init, quantity, currentPrice);
    }
  }
  return (
    <div className="App">
      <h1>Profit Or Loss ? </h1>
      <label>
        {" "}
        Enter Initial Price :
        <input type="number" placeholder="Initial Price" onChange={getini} />
      </label>

      <label>
        {" "}
        Enter quantity of stocks :
        <input
          type="number"
          placeholder="Quantity of stocks"
          onChange={getVal}
        />
      </label>

      <label>
        {" "}
        Enter current price :
        <input
          type="number"
          placeholder="Current Price"
          onChange={getcurrent}
        />
      </label>

      <button onClick={clickHandler}> Check Price </button>

      <div className="outputBox">
        <div style={{ backgroundColor: getBackground }} className="outp">
          {message}
        </div>
      </div>
    </div>
  );
}

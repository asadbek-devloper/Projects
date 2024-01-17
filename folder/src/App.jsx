import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  function increment() {
    setCount(count + 1);
  }
  function dicrement() {
    if (count < 0) count = 1;
    setCount(count - 1);
  }

  return (
    <div class="num">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={dicrement}>-</button>
    </div>
  );
}

export default App;

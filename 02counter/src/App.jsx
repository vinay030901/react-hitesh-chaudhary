import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;
  const addValue = () => {
    console.log("value added ", counter);
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter >= 1) setCounter(counter - 1);
  };

  let [counter, setCounter] = useState(15);

  return (
    <>
      <h1> chai aur reacts</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;

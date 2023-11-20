import "./App.css";

function App() {
  let counter = 5;
  const addValue = () => {
    console.log("value added ", counter++);
  };
  return (
    <>
      <h1> chai aur reacts</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value</button>
      <br />
      <button>remove value</button>
    </>
  );
}

export default App;

import { useState } from "react";
import Chai from "./Chai";
function App() {
  console.log("rendered: ", Math.random())
  const [value, setValue] = useState(1)
  const username = "bhim bhai";

  const clickMe = () => {
    setValue(value + 1)
    console.log("clicked")
  }

  return (
    <>
      <button onClick={clickMe}>Click me</button>
    </>
  );
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {
  console.log("rendered: ", Math.random())

  const [value, setValue] = useState({
    value: 4
  })

  const clickMe = () => {
    setValue({
      value: 4
    })
    console.log("clicked", value)
  }

  return (
    <>
      <button onClick={clickMe}>Click me {value.value}</button>
    </>
  );
}

export default App;


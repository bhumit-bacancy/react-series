import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
    setCounter(counter => counter + 1)
  }

  const minusValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Bhai Bhai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>+</button>&nbsp;
      <button onClick={minusValue}>-</button>
    </>
  )
}

export default App

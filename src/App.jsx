import './App.css'
import { useState } from 'react'

function App({mensaje}) {
  const [msj, setMsj] = useState("");
  let msjHandler = () => setMsj('(from changed state)')
  return (
    <>
    <h1>Hello {mensaje}!{msj}</h1>
    <button onClick={msjHandler}>Click me</button>
    </>
  )
}

export default App

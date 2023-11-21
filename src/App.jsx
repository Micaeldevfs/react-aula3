import { useState } from "react"

function App() {
  const [numero, setNumero] = useState(0)
  function aumentar(){
    if (numero<10)
    setNumero(numero +1)}
  function diminuir (){
    if (numero>0)
    setNumero(numero -1)
  }


  return (
    <>
    <button onClick={aumentar}>+</button>
    <h1>{numero}</h1>
    <button onClick={diminuir}>-</button> 
    </>
  )
}

export default App

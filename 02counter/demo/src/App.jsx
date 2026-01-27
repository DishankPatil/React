import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=5

  let [counter,setcounter]=useState(15)
  const addValue=()=>{
    //console.log("Value Added",Math.random());
    //counter=counter+1;
    setcounter(counter+1);
    console.log(counter);
  }

  const removeValue=()=>{
    setcounter(counter-1);
    console.log(counter);
  }

  return (
    <>
      <p>Chai aur React</p>
      <p>Counter Value:{counter}</p>

      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App

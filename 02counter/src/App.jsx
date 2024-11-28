import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [c,setc]=useState(5);

  
// let counter=15;
const addvalue =()=>{
 // console.log("value added",Math.random());
  setc(c+1);
}
const removeValue=()=>{
  if(c<=0)return;
  setc(c-1)
}
  return (
    <>
     <h1>chai ur react{c}</h1>
     <h2>counter value: {c}</h2>
     <button onClick={addvalue}>add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

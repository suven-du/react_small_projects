import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import C from './components/card'

function App(pro) {
  console.log(pro)
  const [count, setCount] = useState(0)
  let my={
    username:"suven",
    age:22
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5' >tailwind test </h1>
     < C channel="suven"  sobj={my}/>
     < C channel="situ" sure="behera"/>
    </>
  )
}

export default App

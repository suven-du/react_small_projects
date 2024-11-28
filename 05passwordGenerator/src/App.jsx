import { useState,useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[addNum,setAddNum]=useState(false)
  const[addChar,setAddChar]=useState(false)
  const[password,setPassword]=useState("")
//useref hook
const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(addNum){str+="0123456789"}
    if(addChar){str+="!@#$%^&*()[]{}_-+=`"}
    for (let i = 0; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      //console.log(char)
      pass+=str.charAt(char)
     
    }
    setPassword(pass)
  },[length,addNum,addChar,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    //console.log(passwordRef.current.value)
    passwordRef.current?.select();
   //(addtionaly u can use=>) passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(passwordRef.current?.value)
  },[password])
    useEffect(()=>{passwordGenerator()},[length,addChar,addNum,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-7 my-10 text-gray-100 bg-gray-700'>
      <h1 className='text-white text-center my-4'>password generator</h1>
      <div className=" password&copy flex shadow round-lg overflow-hidden mb-4 rounded-md">
        <input type="text" value={password}
        className='outline-none w-full py-1 px-3 text-blue-950 font-semibold'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-900 text-white px-2 py-2 shrink-flex-0 active:bg-violet-700' onClick={copyPasswordToClipboard}>copy</button>
      </div>
         <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)
              }}
              />
              <label >length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                checked={addNum}
                id='numberInput'
                onChange={()=>{setAddNum((prev)=>!prev)}}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="checkbox"
                checked={addChar}
                id='charInput'
                onChange={()=>{setAddChar((prev)=>!prev)}}
                />
                <label htmlFor="charInput">Charecters</label>
              </div>
         </div>
     </div>
    </>
  )
}

export default App

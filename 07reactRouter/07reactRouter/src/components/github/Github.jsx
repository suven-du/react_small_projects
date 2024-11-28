import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const[d,setD]=useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/suven-du").then(r=>r.json()).then(data=>{
  //     setD(data)
  //     console.log("uff")
  //   })
  // },[])


  //HERE WE ARE GING TO USE THE USELODERDATA HOOK INSTED OF ABOVE PROCESS

  const d=useLoaderData()
  return (
   
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{d.followers}
      <img src= {d.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github
 export async function   githubInfoLoder() {
  const res=await fetch("https://api.github.com/users/suven-du")

return (
res.json()
)
}

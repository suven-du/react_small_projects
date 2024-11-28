import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userId}=useParams()
  return (
    <div className='bg-gray-400 p-5 text-3xl pl-40 w-1/2 mx-auto my-10 mb-5'>
      user:{userId}
    </div>
  )
}

export default User

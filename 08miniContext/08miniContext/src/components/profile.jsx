import React,{useContext} from 'react'
import UserContext from '../conetxt/UserContext'
import Login from './Login'
function profile() {
    const {user}=useContext(UserContext)

  if(!user.username ||!user.password)return <div>please login</div>
  return <div>welcome {user.username} </div>



// return( 
//     <>
//     <div>welcome {user.username} </div>
//     <Login />
//     </>
// )
}

export default profile


import './App.css'
import Profile from './components/profile'
import UserContextProvider from './conetxt/UserContextProvider'
import Login from './components/Login'

function App() {

  return (
    <>
    <UserContextProvider>
        <h1>react with chai and consistancy is important</h1>
         <Login />
        <Profile/> 
        </UserContextProvider>
    </>
  )
}

export default App

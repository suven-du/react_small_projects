import { useState } from 'react'
import Header from './components/header/Header'

import { Routes,Route } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     {/* <Routes>
      <Route  path='' element={<Header/>} />
      <Route  path='' element={<Footer/>} />
     

     </Routes> */}
    </>
  )
}

export default App

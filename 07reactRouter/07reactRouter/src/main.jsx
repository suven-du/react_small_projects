import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github,{githubInfoLoder} from './components/github/Github.jsx'


// const r=createBrowserRouter([
//   {
//   //mainPath
//     path:'/' ,
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])
//ANOTHER PROCESS OF ROUTING;BY THE WAY THERE IS ANOTHER ONE PROCESS WHICH IS AT APP.JSX;
const r=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>  } />
        <Route path='/user/:userId' element={<User/>} />
        <Route loader={githubInfoLoder} path='/github' element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter >
    <App />
    </BrowserRouter> */}
    <RouterProvider router={r}/>
    {/* routerprovider itself is a wrraper */}

  </StrictMode>,
)

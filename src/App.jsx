import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Login from './components/Login'
import Profile from './components/Profile'
import Body from './components/Body'
import Feed from './components/Feed'
import Connections from './components/Connections'
import Request from './components/Request'

function App() {
  return (
  <BrowserRouter basename = "/">
     <Routes>
         <Route path = "/" element = {<Body/>}>
           <Route path = "/" element = {<Feed/>} />
           <Route path = "/login" element = {<Login/>} />
           <Route path = "/profile" element = {<Profile/>} />
           <Route path = "/connections" element = {<Connections/>} />
           <Route path = "/requests" element = {<Request/>} />
         </Route>
     </Routes>
  </BrowserRouter>
  )
}

export default App

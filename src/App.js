import React from 'react'
import User from './User'
import Admin from './admin'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>

        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
</Routes>
     
      </BrowserRouter>
   
    
    
    </div>
  )
}

export default App

import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
  return (
    <div 
    className='homeDesign'
    >
      <button
      onClick={()=>navigate("/admin")}
      >Admin</button>
      <button
      onClick={()=>navigate("/user")}
      
      >User</button>
    </div>
  )
}

export default Home

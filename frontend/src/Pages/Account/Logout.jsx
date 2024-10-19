import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()
  return (
    <button onClick={()=>{
        localStorage.clear();
        navigate('/')
        window.scrollTo(0,0)
    }} className='text-white bg-red-600 rounded-md py-1  px-3' >
        Logout
    </button>
  )
}

export default Logout

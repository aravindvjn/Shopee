import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed right-0 left-0 top-0 h-12 flex items-center p-5 bg-pink-700'>
      <ArrowBackIcon className='text-white' onClick={()=>navigate(-1)} />
    </div>
  )
}

export default Header

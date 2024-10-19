import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
const Header = ({text}) => {
    const navigate = useNavigate()
  return (
    <div className='fixed z-10 right-0 left-0 top-0 h-12 flex items-center p-5 bg-pink-700'>
      <ArrowBackIcon className='text-white' onClick={()=>navigate(-1)} />
        <p className='w-full text-white font-semibold text-center'>{text}</p>
    </div>
  )
}

export default Header

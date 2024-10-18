import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Header = () => {
  return (
    <div className='flex p-5 items-end' >
      <ShoppingBagIcon fontSize='large' className=' text-pink-600'/>
      <h1 className='text-pink-600 text-2xl font-bold'>Shopee</h1>
    </div>
  )
}

export default Header

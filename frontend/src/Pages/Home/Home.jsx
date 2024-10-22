import React, { useState } from 'react'
import Header from './Header'
import Search from '../../Components/Search/Search'
import Category from './Category'
import AllScrollLimited from './AllScrollLimited'

const Home = () => {
  const [categories, setCategories] = useState([]);
  return (
    <div className='bg-pink-50 min-h-screen pb-16 sm:px-10'>
    <Header />
    <Search />
    <Category categories={categories} setCategories={setCategories} />
    <AllScrollLimited categories={categories} />
    </div>
  )
}

export default Home

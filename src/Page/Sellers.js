import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import AdminCategoties from '../Components/AdminCategoties'
import Seller from '../Components/Seller/Seller'
import  Footer  from '../Page/Footer'
const Sellers = () => {
  return (
    <>
    <Navbar/>
      <header className='flex'>
        <AdminCategoties/>
        <Seller/>
      </header>
    <Footer/>
    </>
  )
}

export default Sellers

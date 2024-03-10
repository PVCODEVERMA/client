import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import Order from '../Components/Order/Order'
import AdminCategoties from '../Components/AdminCategoties'
import  Footer  from '../Page/Footer'
const Orders = () => {
  return (
    <>
    <Navbar/>
    <header className=' flex'>
     <AdminCategoties/>
      <Order/>
    </header> 
    <Footer/>
    </>
  )
}

export default Orders

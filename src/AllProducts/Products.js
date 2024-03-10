import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import AdminCategoties from '../Components/AdminCategoties'

import  Footer  from '../Page/Footer'
import Product from '../Components/Product/Product'


const Products = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
      <AdminCategoties/>
    <Product/>
    </div>
    <Footer/>
   
    </>
  )
}

export default Products

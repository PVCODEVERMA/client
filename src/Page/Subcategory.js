import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import AdminCategoties from '../Components/AdminCategoties'
import SubCategory from '../Components/SubCategory/SubCategory'
import  Footer  from '../Page/Footer'
const Subcategory = () => {
  return (
    <>
        <Navbar/>
        <header className=' flex'>
            <AdminCategoties/>
            <SubCategory/>
        </header>
        <Footer/>

       
    </>
  )
}

export default Subcategory

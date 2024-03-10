import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import AdminCategoties from '../Components/AdminCategoties'
import CategoriesAdmin from '../Components/CategoriesAdmin'
import Footer from './Footer'



function Admin() {
  return (
    
    <>
    <Navbar/>
    <div className=' flex justify-center'>
       <AdminCategoties/>
       <CategoriesAdmin/>

    </div>
    <Footer/>

    </>
   
  )
}

export default Admin
import React from 'react'
import Navbar from '../Components/Nabrar/Navbar'
import DashBord from '../Components/DashBoard/DashBord'
import AdminCategoties from '../Components/AdminCategoties'
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <>
      <Navbar/>
       <header className=' flex'>
        <AdminCategoties/>
        <DashBord/>
       </header>
       <Footer/>
    </>
  )
}

export default Dashboard

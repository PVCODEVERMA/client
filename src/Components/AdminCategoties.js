import React from 'react'


import  {Link} from 'react-router-dom'
function AdminCategoties() {
  return (
    <>
    
        <section className='   px-12 bg-[#201658] ' >
          <ul>
             
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
              <Link to="/products">Products</Link>
            </li>
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
            <Link to="/categories">Categories</Link>
            </li>
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
            <Link to="/subcategory">SubCategory</Link>
            </li>
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
              <Link to="/orders">Orders</Link>
            </li>
           
            <li className=' text-white text-center mt-4 text-balance cursor-pointer'>
              <Link to="/sellers">Sellers</Link>
            </li>
          </ul>
          
          
        </section>
    
    </>
  )
}

export default AdminCategoties
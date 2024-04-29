import React from 'react'
import Navbar from '../../Nabrar/Navbar'
import Footer from '../../../Page/Footer'

const ProductByDetails = () => {
  return (
    <>
       <Navbar/>
      <header className=''>
        <main className=' container grid grid-cols-12 items-start pb-16 pt-4 ' >
          
          <div className='col-span-8 border border-red-200 p-4 rounded'>
            <h3 className=' text-lg font-medium capitalize mb-4 ml-24'>Chekout</h3>
            
            <div className='  gap-3 flex justify-center'>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Fast Name <span className='text-primary'>*</span></label>
                <input placeholder='Fast Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Last Name <span className='text-primary'>*</span></label>
                <input placeholder='Last Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>

            </div>
            <div className='  gap-3 flex justify-center'>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Fast Name <span className='text-primary'>*</span></label>
                <input placeholder='Fast Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Last Name <span className='text-primary'>*</span></label>
                <input placeholder='Last Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>

            </div>
            <div className='  gap-3 flex justify-center'>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Fast Name <span className='text-primary'>*</span></label>
                <input placeholder='Fast Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>
              <div>
                <label  className='text-gray-600 mb-2 black ' htmlFor="text">Last Name <span className='text-primary'>*</span></label>
                <input placeholder='Last Name' id='text' className='block w-full border border-gray-300 px-4 py-2 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:right-2' type="text" />
              </div>

            </div>
          </div>
            
        </main>
         
      </header>
      <Footer/>
    </>
  )
}

export default ProductByDetails

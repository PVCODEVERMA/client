import React, { useState } from "react";
import Navbar from "../Nabrar/Navbar";
import Footer from "../../Page/Footer";

import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";



const Forget = () => {
    const [email ,setemail] = useState()
   
    const forgetpage =()=>{
        alert(email)
    }
  return (
    <>
      <Navbar />

      <main className="w-[100%] bg-[#B2B377] flex justify-center">
        <div className="w-[30%] bg-[#FFFFFF] flex justify-center mb-14 mt-14 rounded-lg drop-shadow-2xl">
          <div className=" w-[60%]">
            <h1 className="text-[30px] mt-2">FORGET FORM</h1>
            <div className=" mb-6 w-full ">
              <div>
                <div class="mb-3">
                  <label for="exampleInputEmail" class="form-label">
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                   
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="agrement"
                      className=" text-primary focus:ring-0 cursor-pointer"
                    />
                    <label
                      htmlFor="agrement"
                      className=" text-gray-600 ml-3 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link  to="/login" className=" font-medium  text-secondary">
                    Login
                  </Link>
                </div>
                <div className=" mt-4">
                  <button
                    onClick={forgetpage}
                    className=" block w-full py-2 text-center text-white bg-primary border border-primary hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium "
                  >
                    Forget
                  </button>
                </div>
                <div className=" mt-6 flex justify-center relative">
                  <div className="text-gray-600 uppercase px-3 bg-white z-10  relative">
                    OR
                  </div>
                  <div className=" absolute left-0 top-0 w-full border-b-2 border-gray-200 "></div>
                </div>
                <p className=" mt-4 text-gray-600 text-center">
                Don't have an account? <Link to="/register" className="text-primary">Register now</Link>

                </p>
              </div>
            </div>
          </div>
        </div>
                

                {/* <div className=" flex justify-between">
                  <button onClick={forgetpage} class="btn btn-primary">
                    Submit
                  </button> */}
                 
                {/* </div> */}
               
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}

        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Forget;

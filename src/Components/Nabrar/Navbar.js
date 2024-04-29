import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { IoSearch } from "react-icons/io5";
import Addtocard from "../AddtoCard/Addtocard";
function Navbar() {
  
 

  const [isOpen, setIsOpen] = useState(false);
  const [cookie, removecookie] = useCookies(["user"]);
  var m = cookie["user"];

  const handellogout = () => {
    removecookie("user");
    alert("LogOut Sucessfully");
    window.location.reload();
  };

  const [lodingcard, setlodingcard] = useState([]);
  console.log("lent",lodingcard)
  const lodingproductCartId = async () => {
    const res = await fetch(
      "http://localhost:5001/api/v1/AddCard/"+m._id,
      {
        method: "GET",
        
      }
    );
    const data = await res.json();
    setlodingcard(data.data)
    }

    useEffect(() => {
      lodingproductCartId();
  
    }, []);
  return (
    // Open right side bar start
    // Open right side bar  end

  <div>
      {/* Navbar */}
      <nav class="navbar navbar-expand-sm bg-primary">
  <div class="container-fluid">
  <Link to="/" className="text-white font-bold text-xl cursor-pointer ">
            Logo
          </Link>
   
    <div class=" flex gap-40">
    <div class="flex items-center max-w-md mx-auto">
  

  <div class="flex items-center border rounded-md">
    <input type="text" placeholder="Search" class="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
    <button class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
      Search
    </button>
  </div>


    </div>
    
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active text-white cursor-pointer hover:bg-sky-700" aria-current="page" href="#">Home</Link>
       
        </li>
        <li class="nav-item">
          <Link to="/allproducts" class="nav-link active text-white cursor-pointer hover:bg-sky-700 " aria-current="page" href="#">All Products</Link>
       
        </li>
        <li class="nav-item">
          <Link  to="/admin" class="nav-link active text-white cursor-pointer hover:bg-sky-700" aria-current="page" href="#">Admin</Link>
          
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link active text-white cursor-pointer hover:bg-sky-700" aria-current="page" href="#">Abouts</Link>
        </li>
        <li class="nav-item">
          <Link to="" class="nav-link active text-white cursor-pointer hover:bg-sky-700" aria-current="page" href="#">Contact</Link>
        </li>
        <li class="nav-item">
        <ul className=" flex  gap-8">
                {!m && (
                  <Link
                    to="/login"
                    class="nav-link active text-white cursor-pointer"
                  >
                    LOGIN
                    
                  </Link>
                )}
                {m && (
                  <Link onClick={handellogout} wrap size={14}>
                    <Avatar size="large" icon={<UserOutlined />} />
                  </Link>
                )}
              </ul>
        </li>
        <li class="nav-item">
        <Link to="/addtocard" className="">
                   {/* {lodingcard.length} */}
              <AiOutlineShoppingCart className=" text-white h-9 w-9" />
            </Link>
        </li>
        

        
        
      
      </ul>
      
    </div>
  </div>
      </nav>
    
      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white py-2">
              Home
            </a>
            <a href="#" className="text-white py-2">
              About
            </a>
            <a href="#" className="text-white py-2">
              Services
            </a>
            <a href="#" className="text-white py-2">
              Contact
            </a>
          </div>
        </div>
      </Transition>

      {/* Main Content */}
      <div className="container mx-auto">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Navbar;

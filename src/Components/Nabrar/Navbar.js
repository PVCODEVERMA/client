import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cookie, removecookie] = useCookies(["user"]);
  var m = cookie["user"];

  const handellogout = () => {
    removecookie("user");
    alert("LogOut Sucessfully");
    window.location.reload();
  };

  return (
    // Open right side bar start
    // Open right side bar  end

    <div>
      {/* Navbar */}
      <nav className="bg-[#387ADF] drop-shadow-lg grayscale-0">
        <div className="container mx-auto p-2 flex  justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl cursor-pointer ">
            Logo
          </Link>

          <div className="w-[40%]">
            <div class="input-group mb-1">
              <input type="text" class="form-control" placeholder="Search" />
              <button class="btn " type="submit">
                <IoSearch />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className=" focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AiOutlineAlignRight />
            </button>
          </div>

          <div className=" flex   gap-3  ">
            <div class="container ">
              <div class="relative">
                <div className="space-x-4">
                  <ul className=" flex items-center gap-10">
                    <li className="text-xl  text-white cursor-pointer">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="text-xl  text-white cursor-pointer">
                      <Link to="/admin">Admin</Link>
                    </li>
                    <li className="text-xl  text-white cursor-pointer">
                      <Link to="/about">About</Link>
                    </li>
                    <ul className=" flex  gap-8">
                {!m && (
                  <Link
                    to="/login"
                    className="text-xl text-white cursor-pointer"
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

                  </ul>


                </div>
              </div>
            </div>
            {/* <div>
              <ul className=" flex  gap-8">
                {!m && (
                  <Link
                    to="/login"
                    className="text-xl text-white cursor-pointer"
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
            </div> */}
            <Link to="/addtocard" className="">
              <AiOutlineShoppingCart className=" text-white h-9 w-9" />
            </Link>
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

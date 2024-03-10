import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function Admin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Your Logo</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Services</a>
            <a href="#" className="text-white">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
            </button>
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
              Close
            </button>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white py-2">Home</a>
            <a href="#" className="text-white py-2">About</a>
            <a href="#" className="text-white py-2">Services</a>
            <a href="#" className="text-white py-2">Contact</a>
          </div>
        </div>
      </Transition>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Your main content goes here */}
      </div>
    </div>
  );
}



export default Admin;

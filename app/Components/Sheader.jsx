
"use client"
// import React from 'react';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 border-2 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold">Blog.Com</a>

        {/* <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-4`}> */}
          <a className="text-white font-normal hover:text-gray-400 bg-blue-500 p-1 mr-2 rounded">
          <Link href={"/"}>
          
          Signup
       </Link>
            </a>
          {/* <a className="text-white hover:text-gray-400">Contact</a> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
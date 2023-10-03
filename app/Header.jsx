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
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold">Blog.Com</a>
  <b className="text-white font-normal bg-blue-500 p-2 mr-2 rounded hover:text-gray-400">
          <Link href={"../Components"}>
          
          Login
       </Link>
            </b>
          {/* <a className="text-white hover:text-gray-400">Contact</a> */}
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Header;
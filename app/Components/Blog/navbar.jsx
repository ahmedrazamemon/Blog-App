// <!-- Main navigation container -->
// src/components/Navbar.js
"use client"
// import React from 'react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold">Blog.Com</a>

      
        <div>
          {/* <a className="text-white hover:text-gray-400 text-3xl"> <Link href={"/Components/myblog"}>My Blogs</Link> </a> */}
          <a className="text-white hover:text-gray-400  bg-blue-500 p-1 mr-2 rounded">  <Link href={"/"}>Logout</Link> </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

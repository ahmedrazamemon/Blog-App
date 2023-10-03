"use client";
// import React from 'react';
import Link from "next/link";
import React, { useState } from "react";

const BlogHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold">Blog.Com</a>

        <div className="lg:hidden">
          {/* Mobile menu icon */}
          <button
            className="text-white p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
          <a className="text-white hover:text-gray-400">
            <Link href={"/"}>Logout</Link>
          </a>
          <a className="text-white hover:text-gray-400">
            <Link href={"./Components/Blog"}>+Add Blog</Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BlogHeader;

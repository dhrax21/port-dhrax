import React from 'react';

const Navbar = () => {
  return (
    <nav 
    className="bg-gray-800 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">DheerajSingh</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <section
      className="h-screen flex flex-col custom-blue-gradient justify-center items-center bg-cover bg-center text-white">
      <div className="bg-white bg-opacity-15 p-8 rounded-lg">
        <motion.h1 className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
        >Hi, I'm Dheeraj Singh</motion.h1>
        <p className="mt-4 mb-4 text-xl md:text-xl">I'm a aspiring Software Engineer..</p>
        <a href="#about" className="mt-8 px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition duration-300">Learn More</a>
      </div>
    </section>
  );
};

export default Home;

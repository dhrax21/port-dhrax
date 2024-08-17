import React from 'react';
import pic1 from '../assets/pic1.png'

const About = () => {
  return (
    <section id="about" className="p-2 bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img src={pic1}
          alt="Dheeraj Singh"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg mb-4 md:mb-0"
        />
        <div className="md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm a passionate Software Engineer with experience in Backend Development.
            I love working on java, and I'm always eager to learn more and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

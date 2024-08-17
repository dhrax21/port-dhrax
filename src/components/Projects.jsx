import React from 'react';

const Project = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100 text-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Movies Booking App</h3>
            <p className="mb-4">Welcome to BookMyShow, your ultimate destination for hassle-free movie ticket bookings and entertainment experiences! Powered by cutting-edge technology and user-friendly features, BookMyCinema brings the magic of cinema right to your fingertips</p>
            <a href="https://github.com/dhrax21/Book-my-Shows" className="text-blue-500 hover:underline">View Project</a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Cab Booking System</h3>
            <p className="mb-4">Cab Booking Application RideEasy is a backend application designed to manage the core functionalities of a cab booking system. Developed using Spring Boot, this application offers seamless integration for both users and drivers, ensuring a smooth and secure experience</p>
            <a href="https://github.com/dhrax21/ride_easy_cab" className="text-blue-500 hover:underline">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Project;

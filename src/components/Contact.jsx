import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white text-gray-900">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg text-white font-bold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

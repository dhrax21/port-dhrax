import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <p>Follow me on <a href="https://twitter.com/yourprofile" className="text-blue-400 hover:underline">Twitter</a> and <a href="https://github.com/yourprofile" className="text-blue-400 hover:underline">GitHub</a>.</p>
    </footer>
  );
};

export default Footer;

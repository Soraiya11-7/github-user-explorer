import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
       <div className="text-center text-xs sm:text-sm opacity-70 w-[90%] mx-auto">
        © {new Date().getFullYear()} GitInsights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
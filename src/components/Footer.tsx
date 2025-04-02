// src/components/Footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">SurfaTech Integrated Solutions</h2>
            <p className="text-sm">Kalyan-Murbad Rd, Kalyan, Maharashtra 421301</p>
            <p className="text-sm">
              Email: <a href="mailto:sales@surfatechintegratedsolutions.com" className="text-blue-400 hover:underline">sales@surfatechintegratedsolutions.com</a>
            </p>
            <p className="text-sm">Phone: <span className="text-blue-400">+91 9326446142</span></p>
          </div>
          <div>
            <h3 className="text-md font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/company/surfatech-integrated-solution/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700">
                <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className="h-8 w-8" /> {/* Increased size */}
              </a>
              {/* Gmail Icon */}
              <a href="mailto:sales@surfatechintegratedsolutions.com" className="text-gray-300 hover:text-red-500">
                <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Gmail" className="h-8 w-8" /> {/* Increased size */}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SurfaTech Integrated Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
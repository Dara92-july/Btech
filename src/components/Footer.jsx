import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Top Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-10 text-center md:text-left text-gray-800">
          {/* Logo & Info */}
          <div>
            <img
              src="/btechlogo_white.png"
              alt="Btech Heritage Associates"
              className="h-16 mx-auto md:mx-0 mb-4"
            />
            <p>
              BTECH Heritage Associates — Your trusted partner in building,
              engineering, and project management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>
              <li><Link to="/services" className="hover:text-yellow-600">Services</Link></li>
              <li><Link to="/projects" className="hover:text-yellow-600">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: btechheritageassociates@gmail.com</p>
            <p>Phone: +234 812 163 4558, +234 805 613 0560</p>
            <p>Address: 1625B Saka jojo street off Adeola Odeku Victoria Island Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-yellow-600 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} BTECH Heritage Associates. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

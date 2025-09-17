import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // simple icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/btechlogo_white.png"
            alt="BTech Logo"
            className="h-20 w-auto md:h-24"
          />
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-600 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-600 transition">About Us</Link>
          <Link to="/services" className="hover:text-yellow-600 transition">Our Services</Link>
          <Link to="/projects" className="hover:text-yellow-600 transition">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-600 transition">Contact Us</Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4 text-gray-800 font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-0"> {/* Removed side padding */}
        <div className="flex items-center justify-between h-20">

          {/* Logo & Company Name - Aligned to Extreme Left */}
          <Link to="/" className="flex items-center space-x-3 pl-4"> {/* Added pl-4 for slight breathing space */}
            <img
              src="https://surfatechintesoln.netlify.app/img/about1.png"
              alt="SurfaTech Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-gray-800">
              SurfaTech Integrated Solutions
            </span>
          </Link>

          {/* Centered Navigation Tabs */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-primary transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Right) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-100 animate-fade-down">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-primary px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

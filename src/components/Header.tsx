import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">CyberKenya</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-white hover:text-cyan-400 transition-colors ${location.pathname === '/' ? 'text-cyan-400' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-white hover:text-cyan-400 transition-colors ${location.pathname === '/about' ? 'text-cyan-400' : ''}`}>
              About
            </Link>
            <Link to="/services" className={`text-white hover:text-cyan-400 transition-colors ${location.pathname === '/services' ? 'text-cyan-400' : ''}`}>
              Services
            </Link>
            <Link to="/testimonials" className={`text-white hover:text-cyan-400 transition-colors ${location.pathname === '/testimonials' ? 'text-cyan-400' : ''}`}>
              Testimonials
            </Link>
            <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" onClick={closeMobileMenu} className={`text-white hover:text-cyan-400 transition-colors text-left ${location.pathname === '/' ? 'text-cyan-400' : ''}`}>
                Home
              </Link>
              <Link to="/about" onClick={closeMobileMenu} className={`text-white hover:text-cyan-400 transition-colors text-left ${location.pathname === '/about' ? 'text-cyan-400' : ''}`}>
                About
              </Link>
              <Link to="/services" onClick={closeMobileMenu} className={`text-white hover:text-cyan-400 transition-colors text-left ${location.pathname === '/services' ? 'text-cyan-400' : ''}`}>
                Services
              </Link>
              <Link to="/testimonials" onClick={closeMobileMenu} className={`text-white hover:text-cyan-400 transition-colors text-left ${location.pathname === '/testimonials' ? 'text-cyan-400' : ''}`}>
                Testimonials
              </Link>
              <Link to="/contact" onClick={closeMobileMenu} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors text-left w-fit">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
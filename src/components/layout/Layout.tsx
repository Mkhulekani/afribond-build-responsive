import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Building } from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-3 group">
    <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Building className="w-5 h-5 text-white" />
      </div>
    </div>
    <div className="text-xl font-bold text-primary">Afribond Builders</div>
  </Link>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-medium sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-primary text-white shadow-soft'
                      : 'text-gray-700 hover:text-primary hover:bg-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary p-2 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive(item.href)
                        ? 'bg-gradient-primary text-white'
                        : 'text-gray-700 hover:text-primary hover:bg-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-lg font-bold text-white">Afribond Builders</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building Africa, one brick at a time. Quality construction services with community impact.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-gray-300 hover:text-secondary-light transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Residential Building</li>
                <li>Commercial Construction</li>
                <li>Renovations</li>
                <li>Tiling & Paving</li>
                <li>Painting & Roofing</li>
                <li>Project Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 text-sm">
                  <Phone className="w-4 h-4 mr-3 text-secondary" />
                  +27 81 503 1710
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-secondary" />
                  info@afribondbuilders.co.za
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-secondary" />
                  Pretoria, Gauteng
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center sm:text-left">
                <p>&copy; 2025 Afribond Builders (Pty) Ltd. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <button className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</button>
                <button className="text-gray-400 hover:text-secondary transition-colors">Terms & Conditions</button>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">CIPC Registered</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">Level 1 B-BBEE</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">Tax Compliant</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">Safety Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
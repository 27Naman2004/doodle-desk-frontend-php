
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-doodle-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Doodle Desk Logo" 
                className="h-10 w-10 rounded-full bg-white p-1 mr-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=DD';
                }}
              />
              <span className="font-logo text-2xl text-white">Doodle Desk</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-opacity-80 font-medium transition-colors">
              Home
            </Link>
            <Link to="/enroll" className="text-white hover:text-opacity-80 font-medium transition-colors">
              Enroll
            </Link>
            <Link to="/gallery" className="text-white hover:text-opacity-80 font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/classes" className="text-white hover:text-opacity-80 font-medium transition-colors">
              Classes
            </Link>
            <Link to="/about" className="text-white hover:text-opacity-80 font-medium transition-colors">
              About Us
            </Link>
            <Button variant="secondary" className="bg-white text-doodle-primary hover:bg-opacity-90">
              Login
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-doodle-primary font-medium hover:bg-doodle-secondary hover:text-white rounded-md">
              Home
            </Link>
            <Link to="/enroll" className="block px-3 py-2 text-doodle-primary font-medium hover:bg-doodle-secondary hover:text-white rounded-md">
              Enroll
            </Link>
            <Link to="/gallery" className="block px-3 py-2 text-doodle-primary font-medium hover:bg-doodle-secondary hover:text-white rounded-md">
              Gallery
            </Link>
            <Link to="/classes" className="block px-3 py-2 text-doodle-primary font-medium hover:bg-doodle-secondary hover:text-white rounded-md">
              Classes
            </Link>
            <Link to="/about" className="block px-3 py-2 text-doodle-primary font-medium hover:bg-doodle-secondary hover:text-white rounded-md">
              About Us
            </Link>
            <Button className="w-full mt-2" variant="default">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

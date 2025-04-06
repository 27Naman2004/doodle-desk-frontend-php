
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <Link to="/" className="logo-link">
              <img 
                src="/logo.png" 
                alt="Doodle Desk Logo" 
                className="logo-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=DD';
                }}
              />
              <span className="logo-text">Doodle Desk</span>
            </Link>
          </div>
          
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/enroll" className="nav-link">Enroll</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/classes" className="nav-link">Classes</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Button variant="secondary" className="login-button">Login</Button>
          </nav>
          
          <div className="mobile-menu-button">
            <button 
              onClick={toggleMenu}
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-nav">
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/enroll" className="mobile-nav-link">Enroll</Link>
            <Link to="/gallery" className="mobile-nav-link">Gallery</Link>
            <Link to="/classes" className="mobile-nav-link">Classes</Link>
            <Link to="/about" className="mobile-nav-link">About Us</Link>
            <Button className="mobile-login-button" variant="default">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

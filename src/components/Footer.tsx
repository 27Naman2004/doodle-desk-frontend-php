
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="/logo.png" 
                alt="Doodle Desk Logo" 
                className="footer-logo-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=DD';
                }}
              />
              <span className="footer-logo-text">Doodle Desk</span>
            </div>
            <p className="footer-description">
              Where every child discovers their unique potential, building strong foundations for lifelong learning.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/enroll" className="footer-link">Enroll</Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-link">Gallery</Link>
              </li>
              <li>
                <Link to="/classes" className="footer-link">Classes</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Mail className="contact-icon" size={18} />
                <span className="contact-text">sharma.shivani9155@gmail.com</span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span className="contact-text">7004675031</span>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span className="contact-text">Jalandhar, Punjab</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Doodle Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

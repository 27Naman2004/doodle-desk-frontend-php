
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Doodle Desk Logo" 
                className="h-10 w-10 rounded-full bg-white p-1 mr-2"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=DD';
                }}
              />
              <span className="font-logo text-2xl">Doodle Desk</span>
            </div>
            <p className="text-gray-400 mb-4">
              Where every child discovers their unique potential, building strong foundations for lifelong learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-doodle-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-doodle-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-doodle-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-doodle-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/enroll" className="text-gray-400 hover:text-doodle-primary transition-colors">Enroll</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-doodle-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-400 hover:text-doodle-primary transition-colors">Classes</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-doodle-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 mt-1 text-doodle-primary" size={18} />
                <span className="text-gray-400">sharma.shivani9155@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 text-doodle-primary" size={18} />
                <span className="text-gray-400">7004675031</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-doodle-primary" size={18} />
                <span className="text-gray-400">Jalandhar, Punjab</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Doodle Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

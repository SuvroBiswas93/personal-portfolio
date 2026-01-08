import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', isAnchor: true },
  { name: 'About', href: '#about', isAnchor: true },
  { name: 'Education', href: '#education', isAnchor: true },
  { name: 'Skills', href: '#skills', isAnchor: true },
  { name: 'Projects', href: '#projects', isAnchor: true },
  { name: 'Contact', href: '#contact', isAnchor: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Handle scroll for shadow & active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = navItems
        .filter((item) => item.isAnchor)
        .map((item) => document.getElementById(item.href.replace('#', '')))
        .filter(Boolean);

      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [location]);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId); // update active on click
    }
  };

  const isActive = (href) => {
    if (href.startsWith('#')) {
      return activeSection === href.replace('#', '');
    } else {
      return location.pathname === href;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.name} className="relative" whileHover={{ y: -2 }}>
                {item.isAnchor ? (
                  <button
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`text-sm font-medium transition-colors cursor-pointer ${isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-gray-800 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-gray-800 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ x: 5 }}>
                {item.isAnchor ? (
                  <button
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className={`block py-2 text-base font-medium w-full text-left ${isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-2 text-base font-medium ${isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

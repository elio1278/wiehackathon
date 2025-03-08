import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Home, Calendar, Camera, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: 'Home',
      path: '/',
      icon: <Home className="h-5 w-5" />
    },
    {
      name: 'Life Stage',
      path: '/life-stage',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      name: 'Cycle Sync',
      path: '/cycle-sync',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      name: 'Smart Plate',
      path: '/smart-plate',
      icon: <Camera className="h-5 w-5" />
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold gradient-text">NutriHer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className={`flex items-center gap-2 ${
                    location.pathname === item.path ? 'gradient-pink text-white' : ''
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <Button
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className={`w-full flex items-center gap-2 justify-start ${
                    location.pathname === item.path ? 'gradient-pink text-white' : ''
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 
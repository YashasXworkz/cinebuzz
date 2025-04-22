
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchBar from './SearchBar';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="neo-blur fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white mr-1">Cine</span>
            <span className="text-2xl font-bold text-cinebuzz-accent">Buzz</span>
          </Link>
          
          <div className="hidden md:flex ml-8 space-x-6">
            <Link to="/" className="text-white hover:text-cinebuzz-accent transition-colors">Home</Link>
            <Link to="/movies" className="text-white hover:text-cinebuzz-accent transition-colors">Movies</Link>
            <Link to="/tv-shows" className="text-white hover:text-cinebuzz-accent transition-colors">TV Shows</Link>
            <Link to="/watchlist" className="text-white hover:text-cinebuzz-accent transition-colors">Watchlist</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {showSearch ? (
            <div className="w-full md:w-64">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowSearch(true)}
              className="text-white hover:text-cinebuzz-accent transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-cinebuzz-accent transition-colors hidden md:flex"
          >
            <Bell className="h-5 w-5" />
          </Button>
          
          <Link to="/profile">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-cinebuzz-accent transition-colors hidden md:flex"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-cinebuzz-accent transition-colors md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            className="hidden md:flex bg-transparent border-cinebuzz-accent text-cinebuzz-accent hover:bg-cinebuzz-accent hover:text-white transition-colors"
          >
            Sign In
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cinebuzz-dark py-4 px-4 animate-slide-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-cinebuzz-accent transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className="text-white hover:text-cinebuzz-accent transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link 
              to="/tv-shows" 
              className="text-white hover:text-cinebuzz-accent transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link 
              to="/watchlist" 
              className="text-white hover:text-cinebuzz-accent transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Watchlist
            </Link>
            <Link 
              to="/profile" 
              className="text-white hover:text-cinebuzz-accent transition-colors py-2 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Button className="w-full bg-cinebuzz-accent text-white hover:bg-cinebuzz-accent/90">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

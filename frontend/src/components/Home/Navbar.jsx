import React, { useState } from "react";
import { useEffect } from "react";
import { 
  TicketIcon, 
  ShoppingCartIcon, 
  RocketLaunchIcon, 
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  Bars3Icon,
  XMarkIcon 
} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Add scroll listener for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 ${isScrolled ? 'shadow-xl' : 'shadow-md'} bg-white transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a  className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg">
              <TicketIcon className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              CouponMagnet
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              // onClick={() => navigate('/how-it-works')}
              className="text-gray-700 hover:text-purple-600 font-medium flex items-center space-x-1.5"
            >
              <QuestionMarkCircleIcon className="h-5 w-5" />
              <span>How It Works</span>
            </button>

            <button 
              onClick={() => navigate('/browse')}
              className="text-gray-700 hover:text-purple-600 font-medium flex items-center space-x-1.5"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Browse Coupons</span>
            </button>

            <button 
              onClick={() => navigate('/dashboard/sell')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
            >
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              Sell Coupons
            </button>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-purple-600">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="ml-1 font-medium">3</span>
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <button className="px-5 py-2.5 text-purple-600 font-medium hover:bg-purple-50 rounded-full">
              Sign In
            </button>
            {/* Desktop Get Started Button */}
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-400 text-white font-medium hover:from-amber-600 hover:to-orange-500 rounded-full transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-t">
          <div className="px-5 pt-4 pb-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-gray-900">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <a className="block p-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700">
              How It Works
            </a>
            <a onClick={()=>navigate("/browse")} className=" block p-3 rounded-lg hover:bg-gray-50 font-medium text-gray-700">
              Browse Coupons
            </a>
            <button 
              onClick={() => navigate('/sell')}
              className="block p-3 rounded-lg bg-purple-50 text-purple-600 font-medium w-full text-left"
            >
              Sell Coupons
            </button>
            <div className="pt-4 space-y-3">
              <button className="w-full py-2.5 text-center text-purple-600 font-medium border border-purple-600 rounded-full">
                Sign In
              </button>
              {/* Mobile Get Started Button */}
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full py-2.5 text-center text-white bg-purple-600 font-medium rounded-full hover:bg-purple-700"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

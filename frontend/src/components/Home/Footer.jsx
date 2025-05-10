import React from 'react'
import { 
  HeartIcon, 
  GlobeAltIcon, 
  EnvelopeIcon,
  TicketIcon  // Add this import
} from '@heroicons/react/24/outline'
import { Twitter, Facebook, Instagram, Linkedin } from 'react-feather'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <TicketIcon className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
                CouponMagnet
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted marketplace for amazing deals and exclusive offers. Join millions saving big every day.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Browse', 'Sell', 'Dashboard'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-purple-300 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-purple-300 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="p-2 rounded-full bg-gray-800 hover:bg-purple-500 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                support@couponmagnet.com
              </div>
              <div className="flex items-center">
                <GlobeAltIcon className="h-5 w-5 mr-2" />
                www.couponmagnet.com
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm flex items-center justify-center">
            Made with <HeartIcon className="h-4 w-4 mx-1 text-red-400" /> by CouponMagnet Team
          </p>
          <p className="text-xs mt-2 opacity-75">
            © 2025 CouponMagnet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Top Gadgets', href: '/top-gadgets' },
    { name: 'Smartphones', href: '/smartphones' },
    { name: 'Home Essentials', href: '/home-essentials' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              <span className="text-red-600">Creative</span>
              <span className="text-green-700">Deals</span>
              <span className="text-yellow-600">GH</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section - Best Deals & Cart */}
          <div className="flex items-center space-x-4">
            <a
              href="/best-deals"
              className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Heart className="w-5 h-5 fill-red-600 text-red-600" />
              <span className="font-medium text-base border-b-2 border-orange-400 pb-1">
                Best Deals
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
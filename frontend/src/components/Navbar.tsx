'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              CoreGenesis
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/services" className="hover:text-gray-300 px-3 py-2 rounded-md">
                Services
              </Link>
              <Link href="/about" className="hover:text-gray-300 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300 px-3 py-2 rounded-md">
                Contact
              </Link>
              <button className="btn-cta ml-4">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/services" className="block hover:text-gray-300 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link href="/about" className="block hover:text-gray-300 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/contact" className="block hover:text-gray-300 px-3 py-2 rounded-md">
              Contact
            </Link>
            <button className="btn-cta w-full mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 
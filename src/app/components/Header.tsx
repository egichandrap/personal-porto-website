"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-8 rounded-b-3xl bg-white dark:bg-gray-900 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold font-mono text-gray-900 dark:text-white">
        {"<DoWithLogic />"}
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <DarkModeToggle />
        <a
          href="/CV.Egi-Chandra-Pratama.pdf"
          download
          className="ml-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Download CV
        </a>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <DarkModeToggle />
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 dark:focus:ring-white"
        >
          <svg
            className="h-6 w-6 text-gray-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md rounded-b-3xl p-4 flex flex-col space-y-4 md:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/CV.Egi-Chandra-Pratama.pdf"
            download
            className="px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
}

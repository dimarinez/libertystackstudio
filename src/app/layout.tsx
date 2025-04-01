// src/app/layout.tsx
"use client";

import { Inter } from "next/font/google";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for nav height
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-blue-900">
              LibertyStack<span className="text-[#FF6B6B]">Studio</span>
            </h1>
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out relative group ${
                      activeSection === item.toLowerCase() ? "text-blue-600" : ""
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                        activeSection === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
            {/* Hamburger Button for Mobile */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col items-center pt-20 h-full">
                {["Home", "Services", "Portfolio", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 text-lg font-semibold py-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.main key={pathname}>
            {children}
          </motion.main>
        </AnimatePresence>

        <footer className="bg-blue-900 text-white py-6 text-center relative">
          <p>© 2025 LibertyStackStudio. All rights reserved.</p>
          <p className="text-sm mt-2">
            Certified Salesforce B2C Commerce Developer (Credential ID: 2712679)
          </p>
        </footer>
      </body>
    </html>
  );
}
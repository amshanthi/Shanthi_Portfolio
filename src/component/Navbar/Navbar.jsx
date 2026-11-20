import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const [activeLink, setActiveLink] = useState(
    window.location.hash.replace("#", "") || "home",
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-black tracking-tight"
        >
          <span className="text-white">SHANTHI</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {["Home", "About", "Skills", "Experience", "Project", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xl transition hover:text-white ${
                  activeLink === item.toLowerCase()
                    ? "underline underline-offset-4 decoration-cyan-400 decoration-2 text-white"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveLink(item.toLowerCase())}
              >
                {item}
              </a>
            ),
          )}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {[
              "Home",
              "About",
              "Skills",
              "Project",
              "Experience",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className={`text-xl transition hover:text-white ${
                  activeLink === item.toLowerCase()
                    ? "underline underline-offset-4 decoration-cyan-400 decoration-2 text-white"
                    : "text-gray-300 hover:after:w-full"
                }`}
                onClick={() => setActiveLink(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

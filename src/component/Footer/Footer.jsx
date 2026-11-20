import React from "react";

const Footer = () => {
  return (
    <footer className="border-t  border-white/10 px-5 py-8 bg-[#050816]/85">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Shanthi Arunachalam. All rights reserved.
        </p>

        <a href="#home" className="transition hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;

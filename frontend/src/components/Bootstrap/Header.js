import React, { useState } from "react";
import img5 from ".././images/portfolio_logo.png";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Templates", href: "#templates" },
  { name: "Pricing", href: "#pricing" },
  { name: "Support", href: "#support" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleGetStartedClick = (event) => {
    event.preventDefault();
    const target = document.getElementById("main-content");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileOpen(false);
  };

  return (
    <header className="relative w-full z-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 text-gray-800 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <img className="h-10 w-10" src={img5} alt="Portfolio Builder logo" />
          <div>
            <p className="text-xl font-semibold tracking-tight">Portfolio Builder</p>
            <p className="hidden text-xs font-medium text-slate-500 md:block">Build for Ease</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors duration-200 hover:text-indigo-500"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex">
          <a
            href="#main-content"
            onClick={handleGetStartedClick}
            className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-600"
          >
            Get Started
          </a>
        </div>
        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.6}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMobileOpen && (
        <div className="absolute left-0 right-0 top-full origin-top bg-white shadow-xl shadow-indigo-100 transition-all duration-200 md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-5 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md px-2 py-1 transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-500"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#main-content"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-600"
              onClick={handleGetStartedClick}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Interests", href: "#hobbies" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-cyan-400">AS</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-slate-800 animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
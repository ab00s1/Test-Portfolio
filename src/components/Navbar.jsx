import { useState } from "react";


export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Interests", href: "#hobbies" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-cyan-400">AS</div>
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
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-slate-900 md:hidden flex flex-col space-y-4 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setIsOpen(!isOpen)}>
                <a
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

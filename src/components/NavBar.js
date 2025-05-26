import { useState, useEffect } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState("#hero");

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(href);
    }
  };

  useEffect(() => {
    const handleScrollChange = () => {
      const scrollY = window.scrollY;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section.offsetTop <= scrollY + 100 &&
          section.offsetTop + section.offsetHeight > scrollY + 100
        ) {
          setActiveLink(link.href);
        }
      });
    };
    window.addEventListener("scroll", handleScrollChange);
    return () => window.removeEventListener("scroll", handleScrollChange);
  }, []);

  return (
    <nav className="navbar sticky top-0 bg-white shadow-md z-50">
      <div className="navbar-container flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo / Brand */}
        <div className="navbar-brand text-indigo-600 font-extrabold text-xl select-none">
          Adarsh's Portfolio
        </div>

        {/* Nav Links */}
        <div className="navbar-links flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`navbar-link text-gray-700 transition-all duration-200 transform ${
                activeLink === link.href
                  ? "font-bold border-b-2 border-indigo-500"
                  : ""
              } hover:text-indigo-600 hover:scale-110`}
              style={{ willChange: "transform, color" }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

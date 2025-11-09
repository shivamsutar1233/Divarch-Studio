import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavLink = ({ to, children, onClick, className, isDark }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
        isActive
          ? "bg-orange-600 text-white shadow-lg hover:bg-orange-700"
          : isDark
          ? "text-gray-300 hover:bg-orange-900/50 hover:text-orange-400"
          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
      } ${className || ""}`}
    >
      {children}
    </Link>
  );
};

export default function Header({ theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDark = theme === "dark";
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isDark
          ? isScrolled
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-gray-900"
          : isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center space-x-4"
          onClick={() => navigate("/")}
        >
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 overflow-hidden">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/m6L2rnvv8vU5B8xx/div-arch.in-brand-identity-1-EmzxBLoPwP4HfyGl.png"
              alt="Div-Arch Studio Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="group cursor-pointer">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              Div-Arch Studio
            </h1>
            <p className="text-xs tracking-widest text-orange-700 dark:text-orange-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors uppercase font-medium">
              Concept to Curated Creation
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-3">
          <NavLink to="/" isDark={isDark}>
            Home
          </NavLink>
          <NavLink to="/services" isDark={isDark}>
            Services
          </NavLink>
          <NavLink to="/portfolio" isDark={isDark}>
            Portfolio
          </NavLink>
          <NavLink to="/products" isDark={isDark}>
            Products
          </NavLink>
          <NavLink to="/contact" isDark={isDark}>
            Contact
          </NavLink>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "hover:bg-gray-800 text-gray-400 hover:text-gray-300"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu with animation */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? "hover:bg-gray-800" : "hover:bg-orange-50"
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
              <span
                className={`block w-6 h-0.5 transform transition-transform duration-300 ${
                  isDark ? "bg-gray-400" : "bg-gray-600"
                } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-opacity duration-300 ${
                  isDark ? "bg-gray-400" : "bg-gray-600"
                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-0.5 transform transition-transform duration-300 ${
                  isDark ? "bg-gray-400" : "bg-gray-600"
                } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>

          {/* Mobile menu overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Mobile menu panel */}
          <div
            ref={menuRef}
            className={`fixed top-[72px] right-4 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg transform transition-all duration-300 origin-top-right ${
              isMobileMenuOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-3 flex flex-col">
              <button
                onClick={() => {
                  setTheme(isDark ? "light" : "dark");
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center w-full !px-6 !py-3 !rounded-none ${
                  isDark
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {isDark ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
              <div className="border-b dark:border-gray-700 my-2"></div>
              <NavLink
                to="/"
                className={`w-full !px-6 !py-3 !rounded-none ${
                  isDark ? "hover:!bg-gray-700" : "hover:!bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                isDark={isDark}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={`w-full !px-6 !py-3 !rounded-none ${
                  isDark ? "hover:!bg-gray-700" : "hover:!bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                isDark={isDark}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={`w-full !px-6 !py-3 !rounded-none ${
                  isDark ? "hover:!bg-gray-700" : "hover:!bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                isDark={isDark}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/products"
                className={`w-full !px-6 !py-3 !rounded-none ${
                  isDark ? "hover:!bg-gray-700" : "hover:!bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                isDark={isDark}
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className={`w-full !px-6 !py-3 !rounded-none ${
                  isDark ? "hover:!bg-gray-700" : "hover:!bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                isDark={isDark}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

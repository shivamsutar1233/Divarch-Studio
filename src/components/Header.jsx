import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavLink = ({ to, children, onClick, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out ${
        isActive
          ? "bg-orange-600 text-white shadow-lg hover:bg-orange-700"
          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
      } ${className || ""}`}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
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
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
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
            <h1 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              Div-Arch Studio
            </h1>
            <p className="text-xs tracking-widest text-orange-700 group-hover:text-orange-500 transition-colors uppercase font-medium">
              Concept to Curated Creation
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile menu with animation */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-orange-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
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
            className={`fixed top-[72px] right-4 w-64 bg-white shadow-xl rounded-lg transform transition-all duration-300 origin-top-right ${
              isMobileMenuOpen
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="py-3 flex flex-col">
              <NavLink
                to="/"
                className="w-full !px-6 !py-3 !rounded-none hover:!bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="w-full !px-6 !py-3 !rounded-none hover:!bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className="w-full !px-6 !py-3 !rounded-none hover:!bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/products"
                className="w-full !px-6 !py-3 !rounded-none hover:!bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className="w-full !px-6 !py-3 !rounded-none hover:!bg-orange-50"
                onClick={() => setIsMobileMenuOpen(false)}
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

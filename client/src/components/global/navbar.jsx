import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useMedia } from "use-media";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMediumShadow, setHasMediumShadow] = useState(false);
  const location = useLocation();

  const isMediumScreen = useMedia({ minWidth: "768px" });

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = 0.85 * windowHeight;

      setIsScrolled(scrollPosition >= scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CHANGE IN SCREEN SIZE
  useEffect(() => {
    if (isMediumScreen && isNavOpen) {
      setIsNavOpen(false);
    }
  }, [isMediumScreen, isNavOpen]);

  // CHECKS FOR LOCATION
  useEffect(() => {
    const isServicesOrContact =
      location.pathname === "/services" || location.pathname === "/contact";

    setHasMediumShadow(isServicesOrContact);
  }, [location.pathname]);

  // NAV TOGGLER
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // CLOSE NAV
  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 z-10 py-4 w-full py-1 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 ${
        isNavOpen || isScrolled || hasMediumShadow
          ? "bg-white shadow-md transition-all duration-300"
          : "transition-all duration-300"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between">
        {/* Brand Logo */}
        <Link to="/">
          <img
            className="w-12 h-12"
            src="/images/southern-divers-logo.png"
            alt="Southern Divers Logo"
          />
        </Link>
        {/* Toggler */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-white text-blue-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavOpen}
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Links */}
        <div
          className={`w-full md:block md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="text-lg text-center flex flex-col md:border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:border-0 mt-2 md:mt-0">
            <li className="md:mb-0 mb-2">
              <NavLink
                to="/"
                onClick={closeNav}
                className={`${
                  location.pathname === "/services" ||
                  location.pathname === "/contact" ||
                  isScrolled ||
                  isNavOpen
                    ? "text-black"
                    : "text-white"
                } hover:text-blue-600 ease-in-out duration-200`}
              >
                Home
              </NavLink>
            </li>
            <li className="md:mt-0 md:mb-0 mt-1 mb-1">
              <NavLink
                to="/services"
                onClick={closeNav}
                className={`${
                  location.pathname === "/services" ||
                  location.pathname === "/contact" ||
                  isScrolled ||
                  isNavOpen
                    ? "text-black"
                    : "text-white"
                } hover:text-blue-600 ease-in-out duration-200`}
              >
                Services
              </NavLink>
            </li>

            <li className="md:mt-0 md:mb-0 mt-5 mb-3">
              <NavLink
                to="/contact"
                onClick={closeNav}
                className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-800 hover:shadow-md duration-200"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

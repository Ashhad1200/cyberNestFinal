import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center sticky top-0 z-20 backdrop-blur-3xl">
      <nav className="p-4 w-full max-w-6xl my-3 mx-2">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-white">Cyber Nest</div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="block lg:hidden text-white hover:text-blue-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 lg:bg-transparent z-10 lg:relative lg:flex lg:items-center lg:opacity-100 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            } lg:visible`}
            onClick={() => setIsOpen(false)} // Click outside the menu to close
          >
            <ul
              className={`flex flex-col lg:flex-row lg:space-x-6 lg:static absolute lg:rounded-none p-6 lg:p-0 bg-slate-600 lg:bg-transparent left-0 right-0 transition-transform duration-300 ease-in-out transform ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              } lg:transform-none lg:opacity-100 lg:visible`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="text-white hover:text-blue-500 font-semibold block lg:inline-block py-2 lg:py-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

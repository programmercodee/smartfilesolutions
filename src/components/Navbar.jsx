import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'INCOME TAX FILING', link: '/income-tax-filing' },
  { label: 'BOOK CONSULTANCY', link: '/book-consultancy' },
  {
    label: 'POPULAR SERVICES',
    submenu: [
      { label: 'Service 1', link: '/popular/service1' },
      { label: 'Service 2', link: '/popular/service2' },
      { label: 'Service 3', link: '/popular/service3' },
    ],
  },
  {
    label: 'BUSINESS REGISTRATION',
    submenu: [
      { label: 'LLP Registration', link: '/business/llp' },
      { label: 'Private Ltd', link: '/business/private-ltd' },
      { label: 'OPC', link: '/business/opc' },
    ],
  },
  {
    label: 'GST SERVICES',
    submenu: [
      { label: 'GST Registration', link: '/gst/registration' },
      { label: 'GST Filing', link: '/gst/filing' },
    ],
  },
  {
    label: 'SUPPORT',
    submenu: [
      { label: 'Contact Us', link: '/support/contact' },
      { label: 'FAQ', link: '/support/faq' },
    ],
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = React.useRef();
  const [isTouch, setIsTouch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Detect if device is touch or not
    const mq = window.matchMedia('(pointer: coarse)');
    setIsTouch(mq.matches);
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleDropdownEnter = (idx) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(idx);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownClick = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="">
            <img src="/logo_no_bg.png" alt="Logo" className="rounded-md w-35 object-contain transition-transform duration-300 hover:scale-104 hover:shadow-lg" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-8 items-center">
            {menuItems.map((item, idx) => {
              // Determine if this item or any of its submenu is active
              const isActive = item.link && location.pathname === item.link;
              const isSubActive = item.submenu && item.submenu.some(sub => location.pathname === sub.link);
              return !item.submenu ? (
                <a
                  key={item.label}
                  href={item.link}
                  className={`text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 ${isActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                >
                  {item.label}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={!isTouch ? () => handleDropdownEnter(idx) : undefined}
                  onMouseLeave={!isTouch ? handleDropdownLeave : undefined}
                >
                  <button
                    className={`flex items-center text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 focus:outline-none ${isSubActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                    type="button"
                    onClick={isTouch ? () => handleDropdownClick(idx) : undefined}
                  >
                    {item.label}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${openDropdown === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 transform ${openDropdown === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    style={{ minWidth: '12rem' }}
                  >
                    {item.submenu.map((sub, subIdx) => {
                      const isSubLinkActive = location.pathname === sub.link;
                      return (
                        <a
                          key={sub.label}
                          href={sub.link}
                          className={`block px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 ${isSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                        >
                          {sub.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-sky-600 focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-white shadow-lg px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item, idx) =>
            !item.submenu ? (
              <a
                key={item.label}
                href={item.link}
                className="block text-gray-700 py-2 px-2 rounded hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  className="flex items-center w-full text-gray-700 py-2 px-2 rounded hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 focus:outline-none"
                >
                  {item.label}
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${openDropdown === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === idx && (
                  <div className="pl-4">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.link}
                        className="block py-2 px-2 text-gray-700 rounded hover:bg-sky-100 hover:text-sky-600 transition-colors duration-200"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const menuItems = [
  { label: 'INCOME TAX FILING', link: '/income-tax-filing' },
  { label: 'BOOK CONSULTANCY', link: '/book-consultancy' },
  {
    label: 'POPULAR SERVICES',
    submenu: [
      { label: 'ITR FILING SERVICES', link: '/popular/service1' },
      { label: 'ISO CERTIFICATION', link: '/popular/service2' },
      { label: 'GST REGISTRATION', link: '/popular/service3' },
      { label: 'GST RETURN FILING', link: '/popular/service4' },
      { label: 'MSME REGISTRATION', link: '/popular/service5' },
      { label: 'COMPANY REGISTRATION', link: '/popular/service6' },
      { label: 'FIRM REGISTRATION', link: '/popular/service7' },
      { label: 'FSSAI LICENSE', link: '/popular/service8' },
      { label: 'Trademark Registration', link: '/popular/service9' },
    ],
  },
  {
    label: 'BUSINESS REGISTRATION',
    submenu: [
      {
        label: 'Company registration',
        // link: '/business/llp',
        submenu: [
          { label: 'Private Limited Company registration', link: '/business/company/service1' },
          { label: 'LLP registration', link: '/business/company/service2' },
          { label: 'One person company registration', link: '/business/company/service3' },
        ],
      },
      {
        label: 'Firm registration',
        // link: '/business/private-ltd',
        submenu: [
          { label: 'Proprietorship  registration', link: '/business/private-ltd/private-ltd' },
          { label: 'Partnership  Firm', link: '/business/private-ltd/public-ltd' },
        ],
      },
      // { label: 'Firm registration', link: '/business/private-ltd' },
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
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubDropdown, setMobileOpenSubDropdown] = useState(null);
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

  const closeAllMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
    setMobileOpenDropdown(null);
    setMobileOpenSubDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="">
            <img src="/logo_no_bg.png" alt="Logo" className="rounded-md w-35 object-contain transition-transform duration-300 hover:scale-104 hover:shadow-lg" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-8 items-center">
            {menuItems.map((item, idx) => {
              // Determine if this item or any of its submenu is active
              const isActive = item.link && location.pathname === item.link;
              const isSubActive = item.submenu && item.submenu.some(sub => location.pathname === sub.link);
              return !item.submenu ? (
                <Link
                  key={item.label}
                  to={item.link}
                  onClick={closeAllMenus}
                  className={`text-gray-700 text-base hover:text-sky-600 font-medium transition-all duration-300 uppercase ${isActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={!isTouch ? () => { handleDropdownEnter(idx); setOpenSubDropdown(null); } : undefined}
                  onMouseLeave={!isTouch ? () => { handleDropdownLeave(); setOpenSubDropdown(null); } : undefined}
                >
                  <button
                    className={`flex items-center text-gray-700 hover:text-sky-600 font-medium transition-all duration-300 focus:outline-none uppercase ${isSubActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
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
                  {/* First-level Dropdown */}
                  <div
                    className={`absolute left-0 mt-2 w-52 bg-white border rounded shadow-lg z-10 transition-all duration-300 text-sm transform ${openDropdown === idx ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    style={{ minWidth: '12rem' }}
                  >
                    {item.submenu.map((sub, subIdx) => {
                      const isSubLinkActive = location.pathname === sub.link;
                      const isLast = subIdx === item.submenu.length - 1;
                      // If this submenu has its own submenu, render a flyout
                      if (sub.submenu) {
                        return (
                          <div
                            key={sub.label}
                            className="relative group"
                            onMouseEnter={!isTouch ? () => setOpenSubDropdown(subIdx) : undefined}
                            onMouseLeave={!isTouch ? () => setOpenSubDropdown(null) : undefined}
                          >
                            <Link
                              to={sub.link}
                              onClick={closeAllMenus}
                              className={`block px-4 py-2 text-base text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 uppercase ${isSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''} ${!isLast ? 'border-b border-gray-200' : ''}`}
                            >
                              {sub.label}
                              <svg className="ml-2 w-3 h-3 inline-block transform transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                            {/* Second-level Dropdown */}
                            <div className={`absolute left-full text-sm top-0 mt-0 w-54 bg-white border rounded shadow-lg z-20 transition-all duration-300 ${openSubDropdown === subIdx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                              {sub.submenu.map((subsub, subsubIdx) => {
                                const isSubSubLinkActive = location.pathname === subsub.link;
                                const isSubSubLast = subsubIdx === sub.submenu.length - 1;
                                return (
                                  <Link
                                    key={subsub.label}
                                    to={subsub.link}
                                    onClick={closeAllMenus}
                                    className={`block px-4 py-2 text-base text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 uppercase ${isSubSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''} ${!isSubSubLast ? 'border-b border-gray-200' : ''}`}
                                  >
                                    {subsub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                      // Otherwise, render as normal
                      return (
                        <Link
                          key={sub.label}
                          to={sub.link}
                          onClick={closeAllMenus}
                          className={`block px-4 py-2 text-base text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 uppercase ${isSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''} ${!isLast ? 'border-b border-gray-200' : ''}`}
                        >
                          {sub.label}
                        </Link>
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
          {menuItems.map((item, idx) => {
            const isActive = item.link && location.pathname === item.link;
            const isSubActive = item.submenu && item.submenu.some(sub => location.pathname === sub.link || (sub.submenu && sub.submenu.some(subsub => location.pathname === subsub.link)));
            return !item.submenu ? (
              <Link
                key={item.label}
                to={item.link}
                onClick={closeAllMenus}
                className={`block text-gray-700 text-base py-2 px-2 rounded hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 uppercase ${isActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <div key={item.label}>
                <button
                  onClick={() => setMobileOpenDropdown(mobileOpenDropdown === idx ? null : idx)}
                  className={`flex items-center w-full text-gray-700 text-base py-2 px-2 rounded hover:bg-sky-50 hover:text-sky-600 font-medium transition-colors duration-200 focus:outline-none uppercase ${isSubActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                >
                  {item.label}
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${mobileOpenDropdown === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileOpenDropdown === idx && (
                  <div className="pl-4">
                    {item.submenu.map((sub, subIdx) => {
                      const isSubLinkActive = location.pathname === sub.link;
                      const isSubSubActive = sub.submenu && sub.submenu.some(subsub => location.pathname === subsub.link);
                      if (sub.submenu) {
                        return (
                          <div key={sub.label}>
                            <button
                              onClick={() => setMobileOpenSubDropdown(mobileOpenSubDropdown === subIdx ? null : subIdx)}
                              className={`flex items-center w-full text-gray-700 text-base py-2 px-2 rounded hover:bg-sky-100 hover:text-sky-600 transition-colors duration-200 focus:outline-none uppercase ${isSubLinkActive || isSubSubActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                            >
                              {sub.label}
                              <svg
                                className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${mobileOpenSubDropdown === subIdx ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {mobileOpenSubDropdown === subIdx && (
                              <div className="pl-4">
                                {sub.submenu.map((subsub, subsubIdx) => {
                                  const isSubSubLinkActive = location.pathname === subsub.link;
                                  return (
                                    <Link
                                      key={subsub.label}
                                      to={subsub.link}
                                      onClick={closeAllMenus}
                                      className={`block py-2 px-2 text-base text-gray-700 rounded hover:bg-sky-100 hover:text-sky-600 transition-colors duration-200 uppercase ${isSubSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                                    >
                                      {subsub.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={sub.label}
                          to={sub.link}
                          onClick={closeAllMenus}
                          className={`block py-2 px-2 text-base text-gray-700 rounded hover:bg-sky-100 hover:text-sky-600 transition-colors duration-200 uppercase ${isSubLinkActive ? 'text-sky-600 font-bold underline underline-offset-4' : ''}`}
                        >
                          {sub.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'BUSINESS REGISTRATION',
    links: [
      { label: 'Pvt Ltd Company Registration', to: '/business/pvt-ltd' },
      { label: 'OPC Registration', to: '/business/opc' },
      { label: 'LLP Registration', to: '/business/llp' },
      { label: 'Partnership Registration', to: '/business/partnership' },
      { label: 'Proprietorship Registration', to: '/business/proprietorship' },
    ],
  },
  {
    title: 'GST PORTAL',
    links: [
      { label: 'GST Registration', to: '/gst/registration' },
      { label: 'GST Return Filing', to: '/gst/return-filing' },
    ],
  },
  {
    title: 'OTHER LEGAL REGISTRATION',
    links: [
      { label: 'MSME Registration', to: '/legal/msme' },
      { label: 'IEC Code Registration', to: '/legal/iec' },
      { label: 'FSSAI Registration', to: '/legal/fssai' },
      { label: 'Shop Registration', to: '/legal/shop' },
      { label: 'Gumasta License', to: '/legal/gumasta' },
    ],
  },
  {
    title: 'ANNUAL SERVICE',
    links: [
      { label: 'Company Annual Filing', to: '/annual/company' },
      { label: 'LLP Annual Filing', to: '/annual/llp' },
      { label: 'Income Tax Return', to: '/annual/itr' },
    ],
  },
  {
    title: 'IPR SERVICES',
    links: [
      { label: 'Trademark Registration', to: '/ipr/trademark' },
      { label: 'Patent Registration', to: '/ipr/patent' },
    ],
  },
];

const supportLinks = [
  { label: 'Contact Us', to: '/support/contact' },
  // { label: 'Download the App', to: '/support/download-app' },
  // { label: 'Payment Checkout', to: '/support/payment' },
  // { label: 'Blog Guide', to: '/support/blog' },
];
const companyLinks = [
  { label: 'About Us', to: '/company/about' },
  // { label: 'Join Us : Hiring', to: '/company/hiring' },
  { label: 'Reviews', to: '/company/reviews' },
  // { label: 'Affiliate Programme', to: '/company/affiliate' },
  // { label: 'MyOnlineCA Franchise Partner', to: '/company/franchise' },
];
const legalLinks = [
  { label: 'Terms of Use', to: '/legal/terms' },
  { label: 'Privacy Policy', to: '/legal/privacy' },
  { label: 'Refund Policy', to: '/legal/refund' },
];

const socialIcons = [
  {
    name: 'Facebook',
    url: '/social/facebook',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: '/social/youtube',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: '/social/twitter',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: '/social/linkedin',
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22.23 0H1.77C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.77 24h20.459C23.208 24 24 23.229 24 22.271V1.723C24 .771 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.555v-5.569c0-1.328-.025-3.037-1.85-3.037-1.85 0-2.132 1.445-2.132 2.939v5.667h-3.555V9h3.414v1.561h.049c.476-.899 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.286z" />
      </svg>
    ),
  },
];
const paymentIcons = [
  'https://img.icons8.com/color/48/000000/mastercard-logo.png',
  'https://img.icons8.com/color/48/000000/visa.png',
  'https://img.icons8.com/color/48/000000/amex.png',
  'https://img.icons8.com/color/48/000000/bank-card-back-side.png',
  'https://img.icons8.com/color/48/000000/paytm.png',
  'https://img.icons8.com/color/48/000000/whatsapp.png',
];

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 pt-12 pb-4 px-4 md:px-8 lg:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: All Registration/Service Links in one list */}
        <div className="lg:col-span-2">
          {/* <h3 className="font-bold mb-6 text-base md:text-lg uppercase tracking-wide">REGISTRATION & SERVICES</h3> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {footerLinks.map((section, idx) => (
              <div key={section.title} className={idx !== 0 ? 'mt-6' : ''}>
                <h4 className="font-bold mb-3 text-base md:text-lg text-neutral-100 uppercase tracking-wide">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label} className="pl-2">
                      <Link to={link.to} className="group flex items-center gap-1 text-base md:text-base text-neutral-200">
                        <span className="text-sky-400">&gt;</span>
                        <span className="inline-block border-b-2 border-transparent group-hover:border-sky-400 transition-all duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Column 2: Support & Company */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg uppercase tracking-wide">SUPPORT</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label} className="pl-2">
                  <Link to={link.to} className="group flex items-center gap-1 text-base md:text-base text-neutral-200">
                    <span className="text-sky-400">&gt;</span>
                    <span className="inline-block border-b-2 border-transparent group-hover:border-sky-400 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg uppercase tracking-wide">COMPANY</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label} className="pl-2">
                  <Link to={link.to} className="group flex items-center gap-1 text-base md:text-base text-neutral-200">
                    <span className="text-sky-400">&gt;</span>
                    <span className="inline-block border-b-2 border-transparent group-hover:border-sky-400 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Column 3: Legal & About */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold mb-3 text-base md:text-lg uppercase tracking-wide">LEGAL</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label} className="pl-2">
                  <Link to={link.to} className="group flex items-center gap-1 text-base md:text-base text-neutral-200">
                    <span className="text-sky-400">&gt;</span>
                    <span className="inline-block border-b-2 border-transparent group-hover:border-sky-400 transition-all duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-800/60 rounded-lg p-4 shadow-inner mt-2">
            <h3 className="font-bold mb-2 text-base uppercase tracking-wide text-sky-400">ABOUT US</h3>
            <div className="text-neutral-300 text-xs leading-relaxed mb-2">
              Smart File Solutions is one of India’s fastest-growing legal service providers, dedicated to offering efficient and affordable legal solutions through the power of technology and automation.<br /><br /> We help you register your business anywhere in India and manage all your legal compliances with ease. With a stellar 4.8/5 rating based on 1000+ reviews across social platforms, Smart File Solutions is recognized as a top-rated legal service provider company.<br /><br />
              {/* <span className="block mt-2">Startup Recognition : <span className="text-sky-400"></span></span>
              <span>CIN : <span className="text-sky-400"></span></span><br />
              <span>GSTIN : <span className="text-sky-400"></span></span> */}
            </div>
          </div>
          {/* WE SECURELY ACCEPT section below About Us */}
          <div className="mt-4">
            <h3 className="font-bold mb-2 text-base uppercase tracking-wide text-center md:text-left">WE SECURELY ACCEPT</h3>
            <div className="flex gap-2 mb-2 flex-wrap justify-center md:justify-start">
              {paymentIcons.map((src, i) => (
                <img key={i} src={src} alt="pay" className="h-7 w-auto" />
              ))}
            </div>
          </div>
        </div>
        {/* Column 4: Social & Payment */}
        <div className="flex flex-col gap-8 items-center lg:items-end">

        </div>
      </div>
      {/* Social section at the bottom */}
      <div className="w-full flex flex-col items-center mt-8 mb-4">
        <h3 className="font-bold mb-2 text-base uppercase tracking-wide text-center">GET THE DEALS : FOLLOW US</h3>
        <div className="flex gap-3 mb-2 justify-center">
          {socialIcons.map((s, i) => (
            <Link key={i} to={s.url} className="bg-neutral-800 hover:bg-sky-600 rounded-full p-2 transition-colors" aria-label={s.name}>
              {s.svg}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-neutral-400 text-xs mt-8 border-t border-neutral-800 pt-4">
        © 2020 - 2025 | SmartFileSolutions Private Limited. | All Rights Reserved with Copyright
      </div>
    </footer>
  );
};

export default Footer;
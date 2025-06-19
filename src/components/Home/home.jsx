import React, { useState, useEffect } from 'react';
import {
  FaBuilding,
  FaDownload,
  FaCalculator,
  FaCalendarAlt,
  FaCheckCircle,
  FaCheck,
  FaStar,
  FaFolderOpen
} from 'react-icons/fa';

const services = [
  {
    icon: (
      <FaBuilding className="w-8 h-8 text-sky-500" />
    ),
    title: 'Business Registration',
    desc: 'Company, LLP, GST, MSME, FSSAI, Trademark & more.'
  },
  {
    icon: (
      <FaDownload className="w-8 h-8 text-sky-500" />
    ),
    title: 'Tax Filing & Consultancy',
    desc: 'Income Tax, GST Returns, Annual Filings, Audit & more.'
  },
  {
    icon: (
      <FaCalculator className="w-8 h-8 text-sky-500" />
    ),
    title: 'Accounting & Bookkeeping',
    desc: 'Professional accounting, payroll, and compliance.'
  },
];

const Home = () => {
  const [category, setCategory] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [gstType, setGstType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('consultation-form');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate conditional fields
    if (category === 'Company Registration' && !companyType) {
      alert('Please select a Type of Company');
      setIsSubmitting(false);
      return;
    }

    if (category === 'GST Related' && !gstType) {
      alert('Please select a GST Service');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare form data for Formspree
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service_category', category);

      // Always include company_type and gst_service fields, even if empty
      formDataToSend.append('company_type', category === 'Company Registration' ? companyType : 'Not Applicable');
      formDataToSend.append('gst_service', category === 'GST Related' ? gstType : 'Not Applicable');

      formDataToSend.append('query', formData.query);

      // Add a summary field for better email formatting
      let summary = `Service Category: ${category}`;
      if (category === 'Company Registration' && companyType) {
        summary += `\nType of Company: ${companyType}`;
      }
      if (category === 'GST Related' && gstType) {
        summary += `\nGST Service: ${gstType}`;
      }
      formDataToSend.append('service_summary', summary);

      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you! Your consultation request has been sent successfully. We will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          query: ''
        });
        setCategory('');
        setCompanyType('');
        setGstType('');
      } else {
        throw new Error('Failed to send form');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-16 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mb-4 leading-tight">
              Accounting & Tax Consultant Company
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-6">
              Expert business registration, tax filing, and accounting services for startups, SMEs, and professionals. Trusted by 10,000+ clients across India.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200"
            >
              Get Started
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-sm md:max-w-lg h-60 md:h-80 flex flex-col items-center justify-center rounded-2xl shadow-lg bg-gradient-to-br from-sky-200 via-white to-sky-100 border-2 border-sky-300">
              <FaFolderOpen className="text-sky-500 w-16 h-16 mb-3" />
              <span className="text-sky-700 text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-center drop-shadow font-sans break-words whitespace-normal px-2">
                SmartFileSolutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-200">
              {service.icon}
              <h3 className="mt-4 mb-2 text-lg font-semibold text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-sky-500 mb-2">Why Choose Us?</h4>
            <ul className="text-neutral-700 text-base space-y-2">
              <li>✔️ 10,000+ Happy Clients</li>
              <li>✔️ 4.8/5 Google & Social Rating</li>
              <li>✔️ PAN India Service</li>
              <li>✔️ Experienced CA/CS/Experts</li>
              <li>✔️ Transparent Pricing & Fast Support</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="https://res.cloudinary.com/defazdfkp/image/upload/v1750308200/ChatGPT_Image_Jun_19_2025_10_12_52_AM_coxihz.png" alt="Trust Illustration" className="w-full max-w-xs md:max-w-sm rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 text-center mb-4">What Our Clients Say</h2>
          <p className="text-neutral-600 text-center mb-8 max-w-2xl mx-auto">Don't just take our word for it. Here's what our satisfied clients have to say about our services.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-6 italic">"Excellent service! They helped me register my company and get GST registration done within 15 days. The team is very professional and responsive. Highly recommended for any business registration needs."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sky-600 font-semibold text-lg">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Rajesh Kumar</h4>
                  <p className="text-sm text-neutral-600">Startup Founder, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-6 italic">"I was struggling with GST filing for months. This team took over and made everything so simple. They're very knowledgeable about tax laws and always available to answer questions. Great value for money!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sky-600 font-semibold text-lg">SP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Sunita Patel</h4>
                  <p className="text-sm text-neutral-600">Restaurant Owner, Delhi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-6 italic">"Outstanding accounting services! They handle all our bookkeeping, payroll, and tax filings efficiently. The team is proactive and keeps us updated on all compliance requirements. Highly professional!"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sky-600 font-semibold text-lg">AM</span>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900">Amit Mehta</h4>
                  <p className="text-sm text-neutral-600">IT Company CEO, Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Back Guarantee Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">100% Money Back Guarantee*</h2>
              </div>
              <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                At Smart File Solutions, client satisfaction is our top priority. That's why every customer who avails our services is fully covered under our 100% Money Back Guarantee Program*. If we are unable to deliver your final, legally approved certification, you're eligible for a full refund — no questions asked. For complete details, please refer to our Refund Policy section.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <div className="flex items-center text-sm text-neutral-600">
                  <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                  No Questions Asked Refund
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                  Full Money Back Guarantee
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                  Risk-Free Service
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/guarantee-concept-illustration_114360-3637.jpg?w=700"
                alt="100% Money Back Guarantee"
                className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tax Calculator Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-sky-600 mb-2 flex items-center justify-center gap-2 break-words">
            <FaCalculator className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
            <span>Income Tax Calculator (FY 2024-25)</span>
          </h2>
          <p className="text-center text-neutral-500 mb-4 md:mb-6 text-xs sm:text-sm">Estimate your income tax liability under the old regime. For demonstration purposes only.</p>
          <TaxCalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-3xl mx-auto rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-600 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem question="Where are you located?" answer="We are based in Palghar, Maharashtra, and serve clients PAN India." />
            <FAQItem question="What services do you offer?" answer="We offer business registration, GST, income tax filing, accounting, MSME, trademark, FSSAI, and more." />
            <FAQItem question="How do I book a consultation?" answer="Simply fill out the consultation form on this page, and our team will contact you soon." />
            <FAQItem question="Is my data safe with you?" answer="Absolutely. We follow strict confidentiality and data protection protocols for all client information." />
            <FAQItem question="Do you provide services outside Maharashtra?" answer="Yes, we provide services to clients all over India." />
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="bg-sky-50 py-8 md:py-12 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-600 mb-2 flex items-center justify-center gap-2">
            <FaCalendarAlt className="w-6 h-6 text-sky-500" />
            Book a Free Consultation
          </h2>
          <p className="text-center text-neutral-500 mb-4 md:mb-6 text-sm">Fill out the form and our expert team will get in touch with you soon.</p>
          <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-neutral-300 rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full border border-neutral-300 rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="you@email.com"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                className="w-full border border-neutral-300 rounded-lg px-3 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="9876543210"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Service Category <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                {['Company Registration', 'GST Related', 'Income Tax Return', 'MSME/Udyog Aadhaar', 'Trademark Registration', 'Food License/FSSAI', 'Annual Filing Pvt Ltd/LLP', 'Others'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded px-2 md:px-3 py-1.5 md:py-2 cursor-pointer hover:border-sky-400 transition">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      className="accent-sky-500"
                      required
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                    />
                    <span className="text-neutral-700 text-xs md:text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Conditionally render Type of Company */}
            {category === 'Company Registration' && (
              <div className="bg-sky-50 p-3 md:p-4 rounded-lg mt-2">
                <label className="block font-medium text-neutral-700 mb-1">Type of Company <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-1.5 md:gap-2">
                  {['Proprietorship Firm', 'Partnership Firm', 'Pvt Ltd / LLP / OPC'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="companyType"
                        value={type}
                        className="accent-sky-500"
                        required
                        checked={companyType === type}
                        onChange={() => setCompanyType(type)}
                      />
                      <span className="text-neutral-700 text-xs md:text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {/* Conditionally render GST Type */}
            {category === 'GST Related' && (
              <div className="bg-sky-50 p-3 md:p-4 rounded-lg mt-2">
                <label className="block font-medium text-neutral-700 mb-1">GST Service <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-1.5 md:gap-2">
                  {['GST Registration', 'GST Return Filing'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gstType"
                        value={type}
                        className="accent-sky-500"
                        required
                        checked={gstType === type}
                        onChange={() => setGstType(type)}
                      />
                      <span className="text-neutral-700 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Your Query <span className="text-red-500">*</span></label>
              <textarea
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Let us know your query in detail"
                required
                value={formData.query}
                onChange={(e) => handleInputChange('query', e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting
                ? 'bg-neutral-400 cursor-not-allowed'
                : 'bg-sky-500 hover:bg-sky-600 text-white'
                }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Simple Indian Income Tax Calculator (Old Regime, FY 2024-25, for demo)
const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [tax, setTax] = useState(null);

  const calculateTax = (income) => {
    let taxable = Number(income);
    let result = 0;
    if (taxable <= 250000) result = 0;
    else if (taxable <= 500000) result = (taxable - 250000) * 0.05;
    else if (taxable <= 1000000) result = 12500 + (taxable - 500000) * 0.2;
    else result = 112500 + (taxable - 1000000) * 0.3;
    // Add 4% cess
    result = result + result * 0.04;
    return Math.round(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTax(calculateTax(income));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium text-neutral-700 mb-1 text-sm sm:text-base">Annual Income (₹)</label>
        <input
          type="number"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
          placeholder="Enter your annual income"
          value={income}
          min="0"
          onChange={e => setIncome(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200 text-base sm:text-lg">Calculate Tax</button>
      {tax !== null && (
        <div className="mt-3 text-center text-base sm:text-lg font-semibold text-sky-700 break-words">
          Estimated Tax: ₹{tax.toLocaleString('en-IN')}
        </div>
      )}
    </form>
  );
};

// FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-sky-200 rounded-lg bg-white">
      <button
        className="w-full text-left px-4 py-3 font-semibold text-sky-700 flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        {question}
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4 text-neutral-700 text-sm">{answer}</div>}
    </div>
  );
};
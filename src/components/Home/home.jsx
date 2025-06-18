import React, { useState } from 'react';

const services = [
  {
    icon: (
      <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 0 1 8 0v2M5 21h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z" /></svg>
    ),
    title: 'Business Registration',
    desc: 'Company, LLP, GST, MSME, FSSAI, Trademark & more.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v9m12 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
    ),
    title: 'Tax Filing & Consultancy',
    desc: 'Income Tax, GST Returns, Annual Filings, Audit & more.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v8m8-8a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" /></svg>
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
            <img src="https://img.freepik.com/free-vector/finance-consultant-concept-illustration_114360-2580.jpg?w=700" alt="Accounting Illustration" className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg" />
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
            <img src="https://img.freepik.com/free-vector/handshake-business-partners-cartoon-character_1150-35079.jpg?w=700" alt="Trust Illustration" className="w-full max-w-xs md:max-w-sm rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="bg-sky-50 py-12 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-600 mb-2 flex items-center justify-center gap-2">
            <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 6h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" /></svg>
            Book a Free Consultation
          </h2>
          <p className="text-center text-neutral-500 mb-6 text-sm">Fill out the form and our expert team will get in touch with you soon.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Full Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="9876543210"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 mb-1">Service Category <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Company Registration', 'GST Related', 'Income Tax Return', 'MSME/Udyog Aadhaar', 'Trademark Registration', 'Food License/FSSAI', 'Annual Filing Pvt Ltd/LLP', 'Others'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded px-3 py-2 cursor-pointer hover:border-sky-400 transition">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      className="accent-sky-500"
                      required
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                    />
                    <span className="text-neutral-700 text-sm">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Conditionally render Type of Company */}
            {category === 'Company Registration' && (
              <div className="bg-sky-50 p-4 rounded-lg mt-2">
                <label className="block font-medium text-neutral-700 mb-1">Type of Company <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-2">
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
                      <span className="text-neutral-700 text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
            {/* Conditionally render GST Type */}
            {category === 'GST Related' && (
              <div className="bg-sky-50 p-4 rounded-lg mt-2">
                <label className="block font-medium text-neutral-700 mb-1">GST Service <span className="text-red-500">*</span></label>
                <div className="flex flex-col gap-2">
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
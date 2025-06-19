import React from 'react'
import { FaCertificate } from 'react-icons/fa';

const ISO_Certification = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <div className="flex items-center justify-center mb-4">
            <FaCertificate className="text-sky-500 w-14 h-14 md:w-20 md:h-20" />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">ISO Certification in India</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">
            Get your ISO Certification and Registration in India at the most affordable price. Start your ISO journey today from just ₹1499/- only.
          </p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* ISO Info Cards Section */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Looking for ISO Certification in India? */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Looking for ISO Certification in India?</h2>
            <p className="text-neutral-700">
              You're at the right place! Here you'll find a complete guide on how to apply for ISO Certification in India — including the process, pricing, consultants, types of ISO certificates, certification bodies, and required documents. MyOnlineCA simplifies your ISO registration journey with affordable and expert-backed services.
            </p>
          </div>

          {/* Introduction to ISO Certification in India */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Introduction to ISO Certification in India</h2>
            <p className="text-neutral-700">
              In today's competitive business environment, offering high-quality products and services is essential to gain trust and expand into global markets. ISO Certification validates your organization's commitment to quality and compliance with international standards. Whether you're targeting domestic or global customers, ISO Certification is a key credibility booster.
            </p>
          </div>

          {/* What is ISO Registration? */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is ISO Registration?</h2>
            <p className="text-neutral-700">
              The International Organization for Standardization (ISO), established in 1947, sets global benchmarks for industrial and commercial practices. With over 160 member countries, ISO facilitates smooth international trade by unifying quality and safety standards worldwide. ISO Registration refers to the process of aligning your organization with these globally recognized standards.
            </p>
          </div>

          {/* What is ISO Certification in India? */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is ISO Certification in India?</h2>
            <p className="text-neutral-700">
              ISO Certification is an official recognition that your business adheres to internationally accepted standards for quality, efficiency, and safety. It is granted by certification bodies accredited to audit and verify your business processes. The certification enhances your brand value, ensures operational excellence, boosts customer satisfaction, and opens up new business opportunities both in India and abroad.
            </p>
          </div>
        </div>
      </section>

      {/* ISO Registration Fees Section */}
      <section className="py-10 px-4">
        <div className="max-w-2xl mx-auto bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">ISO Registration Fees</h2>
          <p className="text-neutral-700 mb-2">Get your ISO Registration done at an all-inclusive price of just <span className="text-sky-600 font-bold">₹1499/-</span>.</p>
          <p className="text-neutral-700 mb-3">Our package includes:</p>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg mb-6 w-full max-w-md">
            <li>✔️ ISO Registration handled by a qualified legal expert</li>
            <li>✔️ Complete preparation and drafting of the ISO application</li>
            <li>✔️ Submission of your ISO application with relevant documents to the concerned authority</li>
          </ul>
          <button
            className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ISO Registration Form Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-white border-2 border-sky-100 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2 text-center">Get Your ISO Registration Certificate</h2>
          <p className="text-sky-600 text-base md:text-lg text-center mb-6">Trusted by 1 lakh+ customers across India</p>
          <p className="text-neutral-700 text-center mb-6">Fill out the form below to get started with your ISO registration. Our experts will review your details and connect with you for a free consultation.</p>
          <ISOForm />
        </div>
      </section>

      {/* Why Choose Us for ISO Certification? */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 text-center">Why Choose Us for Your ISO Certification?</h2>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg w-full max-w-md">
            <li>✔️ 1 lakh+ satisfied clients across India</li>
            <li>✔️ Fast, hassle-free process</li>
            <li>✔️ Expert legal and compliance support</li>
            <li>✔️ Transparent, affordable pricing</li>
            <li>✔️ End-to-end assistance (application to certification)</li>
            <li>✔️ Support for all major ISO standards (9001, 14001, 22000, etc.)</li>
          </ul>
        </div>
      </section>

      {/* Our Simple ISO Registration Process */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 text-center">Our Simple ISO Registration Process</h2>
          <ol className="list-decimal pl-6 text-neutral-700 text-base md:text-lg w-full max-w-md space-y-2">
            <li>Submit your details and documents</li>
            <li>Application preparation by our experts</li>
            <li>Submission to certification body</li>
            <li>Audit (if required)</li>
            <li>Get your ISO certificate</li>
          </ol>
        </div>
      </section>

      {/* Types of ISO Certificates We Offer */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 text-center">Types of ISO Certificates We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">ISO 9001:2015</span>
              <span className="text-neutral-600 text-sm">Quality Management</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">ISO 14001:2015</span>
              <span className="text-neutral-600 text-sm">Environmental Management</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">ISO 22000:2018</span>
              <span className="text-neutral-600 text-sm">Food Safety Management</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">ISO 27001:2013</span>
              <span className="text-neutral-600 text-sm">Information Security</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">ISO 45001:2018</span>
              <span className="text-neutral-600 text-sm">Occupational Health & Safety</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="font-semibold text-sky-700">...and more</span>
              <span className="text-neutral-600 text-sm">Ask us for your industry</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ISOForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    business: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('whatsapp', formData.whatsapp);
      data.append('business', formData.business);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you! Your details have been submitted. Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', whatsapp: '', business: '' });
      } else {
        throw new Error('Failed to send form');
      }
    } catch (error) {
      alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your good name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Email <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your valid email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your valid mobile number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Are you on WhatsApp? <span className="text-red-500">*</span></label>
        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="Yes"
              required
              checked={formData.whatsapp === 'Yes'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="No"
              required
              checked={formData.whatsapp === 'No'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>No</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">About Your Business <span className="text-red-500">*</span></label>
        <textarea
          name="business"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Let us know about your business"
          required
          value={formData.business}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ISO_Certification
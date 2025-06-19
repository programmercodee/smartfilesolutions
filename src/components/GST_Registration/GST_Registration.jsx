import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const GST_Registration = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 700, offset: 80 });
  }, []);
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section data-aos="fade-up" className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">GST Registration – Apply Online Easily</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">
            Get your GST Registration done with India's only government-certified platform – <strong>SmartFileSolutions</strong>. Start your new GST registration online from just ₹999/- and receive free DIY legal agreement templates with your application.
          </p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* GST Info Cards Section */}
      <section data-aos="fade-up" className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* What is GST Registration? */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is GST Registration?</h2>
            <p className="text-neutral-700 mb-2">GST is one single tax that replaced old taxes like VAT, Service Tax, and others. It started in July 2017 in India. If your yearly business income is more than ₹40 lakhs (or ₹10 lakhs in some states), you must register for GST.</p>
            <p className="text-neutral-700">Some businesses like online stores must register from the beginning — even if their income is less. Our team at <strong>SmartFile Solutions</strong> can help you get your GST certificate online in just 2-3 days.</p>
          </div>


          {/* Who Needs GST Registration? */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Who Needs GST Registration?</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li><strong>1. Existing Taxpayers:</strong> Businesses previously registered under VAT, Service Tax, or CST must migrate to GST.</li>
              <li><strong>2. Turnover Threshold:</strong> Businesses with annual turnover above ₹40 lakh (₹10 lakh for NE & hill states) must register.</li>
              <li><strong>3. Casual Taxpayers:</strong> Individuals participating in exhibitions or short-term events without a permanent place of business must apply under this category (valid for up to 90 days).</li>
              <li><strong>4. Non-Resident Taxpayers:</strong> NRIs managing businesses in India must register for GST.</li>
              <li><strong>5. Input Service Distributors (ISD):</strong> Businesses distributing input tax credit must register under GST.</li>
              <li><strong>6. Reverse Charge Applicability:</strong> Entities falling under reverse charge mechanism must obtain registration.</li>
              <li><strong>7. E-Commerce Sellers:</strong> Selling through platforms like Amazon or Flipkart requires mandatory GST registration.</li>
              <li><strong>8. E-Commerce Operators:</strong> If you operate an e-commerce portal, GST registration is compulsory.</li>
              <li><strong>9. Foreign Online Services:</strong> Overseas SaaS or digital service providers offering access to Indian users must also register.</li>
            </ul>
          </div>

          {/* How to Register for GST Online */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">How to Register for GST Online</h2>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-2 mb-2">
              <li>Visit the official GST portal: <a href="https://www.gst.gov.in" target="_blank" className="text-sky-600 underline">www.gst.gov.in</a></li>
              <li>Fill Part A of GST Registration Form-1 with basic details</li>
              <li>Receive the Temporary Reference Number (TRN) on your email and mobile</li>
              <li>Complete Part B of the application and upload relevant documents</li>
              <li>Once approved, the GST Registration Certificate will be issued by the Government</li>
            </ol>
            <p className="text-neutral-700"><strong>Note:</strong> Choosing the correct HSN code, business type, and document set is crucial. It's always recommended to consult a certified GST expert or platform like <strong>MyOnlineCA</strong> to ensure a smooth and error-free registration process.</p>
          </div>
        </div>
      </section>

      {/* GST Registration Package Section */}
      <section data-aos="fade-up" className="py-10 px-4">
        <div className="max-w-2xl mx-auto bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">GST Registration Package – Just ₹999/- Only</h2>
          <p className="text-neutral-700 mb-3">Get your business GST registered quickly and professionally with our all-in-one package:</p>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg w-full max-w-md">
            <li>✔️ GST Registration filing by experienced legal experts</li>
            <li>✔️ GST ARN (Application Reference Number) delivered within 1 day</li>
            <li>✔️ GST Registration Certificate issued in 4–5 working days</li>
            <li>✔️ Access to 10+ premium legal agreements tailored for your business</li>
            <li>✔️ Professionally designed invoice templates for GST billing</li>
          </ul>
        </div>
      </section>

      {/* GST Registration Form Section */}
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-white border-2 border-sky-100 p-6 md:p-10">
          <div className="w-full bg-sky-500 rounded-t-2xl p-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Let's Start Your GST Registration with SmartFile Solutions</h2>
            <p className="text-blue-100 text-base md:text-lg text-center">Issued over 30,000+ GST Numbers across India</p>
          </div>
          <p className="text-neutral-700 text-center mb-6">Fill out the form below to start your GST registration. Our experts will review your details and connect with you for a free consultation.</p>
          <GSTForm />
        </div>
      </section>

      {/* GST Info Cards Section (Simple Language) */}
      <section data-aos="fade-up" className="py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* What You Get in ₹999 GST Package */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What You Get in ₹999 GST Package</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Filing done by legal expert</li>
              <li>ARN Number within 1 day</li>
              <li>Final GST Certificate in 4–5 days</li>
              <li>10+ free business legal templates</li>
              <li>Free invoice designs for your business</li>
            </ul>
          </div>

          {/* Benefits of GST Registration */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Benefits of GST Registration</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Your business becomes legally strong</li>
              <li>You can get back tax paid on purchases (input credit)</li>
              <li>You can sell anywhere in India</li>
              <li>Open a business bank account easily</li>
              <li>Sell online on big portals like Amazon</li>
              <li>Apply for government contracts</li>
              <li>Big companies will trust and work with you</li>
              <li>Gives confidence to your customers</li>
            </ul>
          </div>

          {/* What is GST Number? */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is GST Number?</h2>
            <p className="text-neutral-700">GST Number is a 15-digit unique ID for your business. It's like a PAN card for your tax. It shows your state, PAN number, and business type. Example: 09ABCDE1234F1Z5</p>
          </div>

          {/* Documents Needed for GST */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Needed for GST</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li><strong>For Individual Business:</strong> PAN, Aadhaar, business proof</li>
              <li><strong>For Partnership:</strong> Firm PAN, Deed, Partners' ID</li>
              <li><strong>For Pvt Ltd/OPC:</strong> Company PAN, COI, MOA, AOA, Directors' ID</li>
              <li><strong>For LLP:</strong> PAN, COI, LLP Agreement, Partners' ID</li>
              <li><strong>Other:</strong> Bank statement, electricity bill, rent agreement or NOC</li>
            </ul>
          </div>

          {/* Penalty for Not Registering */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Penalty for Not Registering</h2>
            <p className="text-neutral-700">If you don't register and you should, you may be fined 10% of the tax amount — minimum ₹10,000. If done intentionally, the fine can go up to 100% of the tax due.</p>
          </div>

          {/* What to Do After GST Registration? */}
          <div data-aos="fade-up" className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What to Do After GST Registration?</h2>
            <p className="text-neutral-700">After getting GST, you must file GST returns every month or every 3 months depending on your business type. This keeps your business compliant and avoids fines.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

const GSTForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    requirements: ''
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
      data.append('requirements', formData.requirements);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you! Your details have been submitted. Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', whatsapp: '', requirements: '' });
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
        <label className="block font-medium text-neutral-700 mb-1">E-mail <span className="text-red-500">*</span></label>
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
          placeholder="Insert Indian No without +91 or 0 (10 Digit Only)"
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
        <label className="block font-medium text-neutral-700 mb-1">Requirements</label>
        <textarea
          name="requirements"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Let us know your requirements or message if you have any"
          value={formData.requirements}
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

export default GST_Registration
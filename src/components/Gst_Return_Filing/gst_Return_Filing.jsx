import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gst_Return_Filing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    AOS.init({ once: false, duration: 700, offset: 80 });
  }, []);
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section data-aos="fade-right" className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">GST Return Filing Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">#1 trusted platform to file your GST returns at the lowest price in just 3 easy steps.</p>
          <p className="text-sky-700 text-lg md:text-xl font-bold text-center mt-2">Package starts at just ₹400 per month.</p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* Example: Add more sections/cards below with data-aos="fade-up" for animation */}
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What is GST Return Filing?</h2>
          <p className="text-neutral-700 mb-2 text-center">If you have GST registration, then filing GST returns is mandatory. It means reporting your monthly business activity to the government. Every GST-registered person must file different types of returns every month and one annual return.</p>
          <p className="text-neutral-700 mb-2 text-center">In your GST return, you need to report:</p>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg w-full max-w-md mb-2">
            <li>✔️ Total Sales during the month</li>
            <li>✔️ Total GST collected (Output Tax)</li>
            <li>✔️ Total Purchases during the month</li>
            <li>✔️ GST paid on purchases (Input Tax Credit)</li>
          </ul>
          <p className="text-neutral-700 text-sm mt-2"><strong>Note:</strong> If you're under the GST Composition Scheme, different return filing rules apply.</p>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">GST Return Filing Fee</h2>
          <p className="text-sky-700 text-lg md:text-xl font-bold text-center mb-2"><strong>Starting at just ₹400 per month</strong></p>
          <p className="text-neutral-700 mb-2 text-center">Our monthly package includes:</p>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg w-full max-w-md mb-2">
            <li>✔️ Collecting your business data and preparing it in the correct government format</li>
            <li>✔️ Filing of GSTR-3B (monthly summary return)</li>
            <li>✔️ Filing of GSTR-1 (sales return)</li>
            <li>✔️ Expert GST tax consultation and support</li>
          </ul>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-white border-2 border-sky-100 p-6 md:p-10">
          <div className="w-full bg-sky-500 rounded-t-2xl p-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">GST Return Filing Online with SmartFile Solutions</h2>
            <p className="text-blue-100 text-base md:text-lg text-center">100% Govt Certified with Registered 30k+ GSTIN</p>
          </div>
          <p className="text-neutral-700 text-center mb-6">Fill out the form below to file your GST return. Our experts will review your details and connect with you for a free consultation.</p>
          <GSTReturnForm />
        </div>
      </section>
      {/* GST Return Filing Info Sections (rewritten, blue-accented, animated) */}
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">GST Return Filing Deadlines</h2>
          <p className="text-neutral-700 mb-2 text-center">Each GST return has its own due date. Here's a quick summary:</p>
          <ul className="text-neutral-700 text-base md:text-lg w-full max-w-md space-y-2 mb-2">
            <li><strong>GSTR-3B:</strong> File by the 20th of every month, no matter your turnover.</li>
            <li><strong>GSTR-1:</strong> If your yearly sales are under ₹1.5 crore, file every quarter. If above, file monthly by the 10th.</li>
            <li><strong>GSTR-2:</strong> This form is for purchases and input tax, but you don't need to file it right now.</li>
          </ul>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">How to File Your GST Return</h2>
          <p className="text-neutral-700 mb-2 text-center">Filing GST is online and simple. Log in to the GST portal, fill in your sales and purchase details in GSTR-3B, create a challan, pay your tax, and submit. For GSTR-1, upload each invoice. Using GST software or expert help makes it even easier.</p>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Easy Filing with SmartFile Solutions</h2>
          <p className="text-neutral-700 mb-2 text-center">Just use our simple Excel sheet to record your invoices. Send it to our GST team, and we'll handle the rest—preparing and filing your GSTR-1, 3B, and more. We'll also help with tax payment and provide you with the official receipt.</p>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">GST Payment Timeline</h2>
          <p className="text-neutral-700 mb-2 text-center">GST payments are made online using your bank account or NEFT. Just generate a challan from your GST dashboard. Payment is due every month along with your GSTR-3B filing.</p>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What You Need for GST Return</h2>
          <p className="text-neutral-700 mb-2 text-center">Mainly, you'll need your sales and purchase invoices. Make sure your invoices follow GST rules and keep your records ready—either digitally or with our Excel template.</p>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">GST Return Forms Overview</h2>
          <ul className="text-neutral-700 text-base md:text-lg w-full max-w-md space-y-1 mb-2">
            <li><strong>GSTR-1:</strong> Sales details – due 10th of next month</li>
            <li><strong>GSTR-2:</strong> Purchase details – due 15th of next month</li>
            <li><strong>GSTR-3:</strong> Monthly summary – due 20th of next month</li>
            <li><strong>GSTR-4:</strong> For composition dealers – due 18th of next quarter</li>
            <li><strong>GSTR-5:</strong> For non-residents – due 20th of next month</li>
            <li><strong>GSTR-6:</strong> For input service distributors – due 13th of next month</li>
            <li><strong>GSTR-7:</strong> For tax deductors – due 10th of next month</li>
            <li><strong>GSTR-8:</strong> For e-commerce platforms – due 10th of next month</li>
            <li><strong>GSTR-9:</strong> Annual return – due 31st December of next financial year</li>
            <li><strong>GSTR-10:</strong> Final return after cancellation – due within 3 months</li>
            <li><strong>GSTR-11:</strong> For UIN holders – due 28th of following month</li>
            <li><strong>GSTR-3B:</strong> Monthly summary return – due 20th of every month</li>
          </ul>
        </div>
      </section>
      <section data-aos="fade-up" className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">About GST Software</h2>
          <p className="text-neutral-700 mb-2 text-center">Many GST software options are costly for small businesses. With SmartFile Solutions, you can use our easy Excel-based plan to keep your records and file GST returns with expert help—no expensive software needed.</p>
        </div>
      </section>
    </div>
  )
}

const GSTReturnForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    returnType: ''
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
      data.append('returnType', formData.returnType);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you! Your details have been submitted. Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', whatsapp: '', returnType: '' });
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
          placeholder="Insert valid email for instant proposal"
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
        <label className="block font-medium text-neutral-700 mb-1">Type of Return <span className="text-red-500">*</span></label>
        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="returnType"
              value="Nil Transactions"
              required
              checked={formData.returnType === 'Nil Transactions'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Nil Transactions</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="returnType"
              value="Taxable Transactions"
              required
              checked={formData.returnType === 'Taxable Transactions'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Taxable Transactions</span>
          </label>
        </div>
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

export default Gst_Return_Filing
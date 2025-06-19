import React, { useEffect } from 'react'
import { FaUserTie, FaRegLightbulb, FaRegCalendarCheck } from 'react-icons/fa';

const Book_Consultancy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <div className="flex items-center justify-center mb-4">
            <FaUserTie className="text-sky-500 w-14 h-14 md:w-20 md:h-20" />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Book Expert Tax Consultancy at the Best Price</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">
            Fill out the form below with your query and select the relevant category. Our expert consultants will connect with you shortly to provide personalized assistance at the most affordable cost.
          </p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => {
              const el = document.getElementById('consultancy-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Why Book a Tax Consultancy Session Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl flex flex-col items-center rounded-2xl shadow-lg bg-white border-2 border-sky-100 p-6 md:p-10">
          <div className="flex items-center justify-center mb-4">
            <FaRegLightbulb className="text-sky-500 w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Why Book a Tax Consultancy Session?</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-4 max-w-xl">
            Discover how a personalized session with our experts can help you save money, avoid penalties, and make smarter financial decisions.
          </p>
          <ul className="space-y-2 text-neutral-700 text-base md:text-lg w-full max-w-md mx-auto">
            <li>✔️ Get answers to all your tax and compliance questions</li>
            <li>✔️ Personalized advice for your business or personal finances</li>
            <li>✔️ Maximize your tax savings and eligible deductions</li>
            <li>✔️ Avoid costly mistakes and penalties</li>
            <li>✔️ Guidance on documentation and e-filing</li>
            <li>✔️ Support for GST, TDS, business registration, and more</li>
          </ul>
        </div>
      </section>

      {/* Book Consultancy Form Section */}
      <section className="py-10 px-4 flex justify-center" id="consultancy-form">
        <div id="consultancy-form" className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-white border-2 border-sky-100 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 mb-4 text-center flex items-center justify-center gap-2">
            <FaRegCalendarCheck className="w-7 h-7 text-sky-500" />
            Book Your Consultation Now
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2 text-center">SmartFile Solutions Consultancy</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-6 max-w-xl">
            Book a session with our tax experts. Fill out the form and we'll connect with you soon.
          </p>
          <div className="w-full mb-6 text-neutral-700 text-sm md:text-base">
            <p className="mb-1 font-semibold">How It Works:</p>
            <ol className="list-decimal pl-6 mb-2">
              <li>Fill in your details and describe your query below.</li>
              <li>Select your preferred language for consultation.</li>
              <li>(Optional) Upload a document or screenshot to help us understand your query.</li>
              <li>Our expert will connect with you via WhatsApp or call. Choose a consultancy plan starting from just ₹500.</li>
            </ol>
          </div>
          <ConsultancyForm />
        </div>
      </section>
    </div>
  )
}

const ConsultancyForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    queries: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('language', formData.language);
      data.append('queries', formData.queries);
      if (formData.image) data.append('image', formData.image);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you! Your details have been submitted. Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', language: '', queries: '', image: null });
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
    <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Your Name"
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
          placeholder="example@email.com"
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
          placeholder="Your Contact No without 0 or +91"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Preferred Language <span className="text-red-500">*</span></label>
        <div className="flex gap-6 mt-1 flex-wrap">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="language"
              value="Hindi"
              required
              checked={formData.language === 'Hindi'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Hindi</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="language"
              value="English"
              required
              checked={formData.language === 'English'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>English</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="language"
              value="Marathi"
              required
              checked={formData.language === 'Marathi'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Marathi</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="language"
              value="All"
              required
              checked={formData.language === 'All'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>All</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Queries <span className="text-red-500">*</span></label>
        <textarea
          name="queries"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Mention your main queries here"
          required
          value={formData.queries}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Upload Document or Screenshot (optional)</label>
        <input
          type="file"
          name="image"
          accept="image/*,application/pdf"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
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

export default Book_Consultancy
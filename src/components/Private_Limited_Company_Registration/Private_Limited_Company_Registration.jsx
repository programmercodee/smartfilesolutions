import React from 'react'

// FAQAccordion component and FAQ data
const faqs = [
  {
    q: "Can I register a Private Limited Company at my home address?",
    a: "Yes, you can use your residential address for company registration. You just need to provide a utility bill as address proof."
  },
  {
    q: "Can I add family members as partners if I have no other partner?",
    a: "Absolutely! You can add a family member as a co-director or shareholder. You can also change or transfer shares later if needed."
  },
  {
    q: "How long does it take to register a Private Limited Company?",
    a: "On average, it takes about 10 to 15 days to complete the registration process in India."
  },
  {
    q: "What is the cost for Private Limited Company registration?",
    a: "The typical cost is around ₹10,999 (except in some states like Punjab, Kerala, and MP due to extra stamp duty)."
  },
  {
    q: "What does 'authorised capital' of ₹1 lakh mean for a Private Limited Company?",
    a: "Authorised capital is the maximum value of shares your company can issue. You don't need to invest ₹1 lakh upfront; you can start with any amount."
  },
  {
    q: "Is GST registration required for Private Limited Company registration?",
    a: "GST registration is only needed if your turnover exceeds ₹20 lakh (₹10 lakh for North East states). It's a separate process from company registration."
  },
  {
    q: "Can I register my company with Startup India?",
    a: "Yes, after registering your Private Limited Company, you can also register with the Startup India portal."
  },
  {
    q: "Can I run multiple businesses under one Private Limited Company?",
    a: "Yes, you can operate multiple businesses under one company. Just mention all activities in your Memorandum of Association (MOA) during registration."
  },
  {
    q: "What is a DSC (Digital Signature Certificate) for online company registration?",
    a: "A DSC is used to sign all e-forms online. After registration, you'll receive your DSC on a secure USB token."
  },
  {
    q: "How do I protect my company name or logo in India?",
    a: "Your company name is protected after registration. For logo protection, you need to apply for trademark registration separately."
  },
  {
    q: "What are the minimum requirements to become a director in a Private Limited Company?",
    a: "Any individual (Indian, foreign, or NRI) aged 18+ with a Director Identification Number (DIN) can be a director."
  },
  {
    q: "How long is the Private Limited Company registration valid?",
    a: "The registration is valid for life, unless the company fails to start business within a year or doesn't file annual returns."
  },
  {
    q: "Can I be a director if I am already working a job?",
    a: "Yes, unless your employment contract restricts it. Always check your job agreement for any such clauses."
  },
  {
    q: "Do I need to visit any government office to register my company?",
    a: "No, the entire process is online with Smart File Solutions. Just send your documents by email or WhatsApp."
  },
  {
    q: "Are FDI or local investors allowed in a Private Limited Company?",
    a: "Yes, both Indian and foreign investors can invest in a Private Limited Company."
  },
  {
    q: "What are the annual compliance requirements for a Private Limited Company?",
    a: "You must appoint an auditor, file annual returns and financial statements, and submit your income tax return every year."
  },
  {
    q: "Is a Private Limited Company a good option for NRIs or foreign nationals?",
    a: "Yes, NRIs and foreign nationals can easily set up a Private Limited Company in India without prior RBI approval."
  },
  {
    q: "Can I convert my Private Limited Company into another entity like LLP or OPC?",
    a: "Yes, you can convert to LLP or OPC, but not to a basic proprietorship or partnership."
  },
  {
    q: "What is limited liability protection in a Private Limited Company?",
    a: "Limited liability means your personal assets are protected; you're only responsible for company debts up to your shareholding."
  },
  {
    q: "What else do I need to start my business after company registration?",
    a: "After opening a current account, you can optionally apply for MSME, Trademark, FSSAI, or Patent registrations as needed."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="w-full max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-3">
          <div className="flex">
            <div className="w-1 bg-sky-500 rounded-l-lg" />
            <button
              className="flex-1 text-left flex justify-between items-center py-3 px-4 font-semibold text-sky-700 border-2 border-sky-300 border-l-0 rounded-r-lg bg-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-sky-50"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
            >
              <span>{faq.q}</span>
              <span className="ml-2 text-xl">{openIndex === idx ? '-' : '+'}</span>
            </button>
          </div>
          {openIndex === idx && (
            <div id={`faq-panel-${idx}`} className="py-2 px-4 text-neutral-700 text-base bg-sky-50 border-l-2 border-r-2 border-b-2 border-sky-200 rounded-b-lg ml-1">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Private_Limited_Company_Registration = () => {
  const formRef = React.useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Private Limited Company Registration in India</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">Register your Private Limited Company through a 100% Government Certified Portal. Simply fill in the details below and kick-start your Pvt Ltd company registration process instantly — includes FREE expert consultancy!</p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* What is Private Limited Company Registration? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What is Private Limited Company Registration?</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center">Private Limited Company Registration is one of the most popular ways to start a business in India. It means registering your company with the Ministry of Corporate Affairs (MCA), which gives you a Certificate of Incorporation (COI) and a unique Company Identification Number (CIN). This lets your company operate legally across India and even internationally. After registration, you can open a current bank account in your company's name and start your business officially.</p>
        </div>
      </section>
      {/* What are the Rules for Pvt Ltd Company Registration? */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What are the Rules for Pvt Ltd Company Registration?</h2>
          <ul className="text-neutral-700 text-base md:text-lg text-left list-disc pl-6">
            <li><strong>Minimum 2 Directors or Partners:</strong> You need at least two people to register a Private Limited Company.</li>
            <li><strong>Minimum Authorised Share Capital:</strong> The proposed share capital should be at least ₹1 Lakh (you don't have to deposit this amount upfront).</li>
          </ul>
        </div>
      </section>
      {/* Private Limited Company Registration Fees Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Private Limited Company Registration Fees</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-2">Smart File Solutions offers the most affordable and reliable Private Limited Company Registration service in India. With us, you get complete legal registration handled by professionals at a transparent and competitive price.</p>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-4">
            <strong>Pricing:</strong> ₹10,999/- (Excluding GST)<br />
            <em>*GST credit can be availed by eligible businesses</em>
          </p>
          <h3 className="text-lg font-bold text-sky-700 mb-2 mt-2">What's Included in the Package:</h3>
          <ul className="list-disc pl-6 text-neutral-700 text-sm md:text-base mb-4 space-y-1 w-full max-w-xl">
            <li>DIN (Director Identification Number) & DSC (Digital Signature Certificate) for 2 Directors</li>
            <li>Company Name Approval</li>
            <li>MOA (Memorandum of Association) and AOA (Articles of Association) Drafting & Printing</li>
            <li>Certificate of Incorporation issued by the Ministry of Corporate Affairs</li>
            <li>PAN & TAN of the Company</li>
          </ul>
          <h3 className="text-lg font-bold text-sky-700 mb-2 mt-2">Free Add-ons from Smart File Solutions:</h3>
          <ul className="list-disc pl-6 text-neutral-700 text-sm md:text-base mb-6 space-y-1 w-full max-w-xl">
            <li>MSME Registration Certificate – to access exclusive government schemes and subsidies</li>
            <li>10+ Premium Legal Agreement Templates for daily business needs</li>
          </ul>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* Company Registration Form Section */}
      <section ref={formRef} className="py-10 px-4 flex justify-center" style={{ scrollMarginTop: 0 }}>
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border-2 border-sky-100 p-6 md:p-10 flex flex-col items-center">
          <div className="w-full bg-sky-500 rounded-t-2xl p-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">Company Registration in India</h2>
            <p className="text-blue-100 text-base md:text-lg text-center">100% Govt Certified Platform with 1 lakh+ companies</p>
          </div>
          <p className="text-neutral-700 text-center mb-6">Fill out the form below to get started with Smart File Solutions. Our experts will guide you through every step!</p>
          <CompanyRegForm />
        </div>
      </section>
      {/* Private Limited Company Registration Online Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Private Limited Company Registration Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-2">Registering a Private Limited Company online in India is possible via the official MCA (Ministry of Corporate Affairs) portal. However, the process is not entirely DIY-friendly as it requires certified digital signature verification by a practicing Chartered Accountant (CA), Company Secretary (CS), or a legal professional. That's why it's essential to hire a qualified expert like Smart File Solutions to handle your end-to-end registration process professionally and efficiently.</p>
        </div>
      </section>
      {/* Step-by-Step Process for Pvt Ltd Company Registration Section */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-sky-700 mb-2">Step-by-Step Process for Pvt Ltd Company Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-2">Here's a simple 5-step guide to get your Private Limited Company registered smoothly across India:</p>
          <ul className="list-decimal pl-6 text-neutral-700 text-base md:text-lg space-y-1 w-full max-w-xl">
            <li><strong>Step 1:</strong> Apply for Digital Signature Certificates (DSC) for all directors of the company.</li>
            <li><strong>Step 2:</strong> Obtain Director Identification Numbers (DIN) for each director.</li>
            <li><strong>Step 3:</strong> Check company name availability and apply for name approval using the RUN form on the MCA portal.</li>
            <li><strong>Step 4:</strong> Once the name is approved, file the SPICe (INC-32) incorporation form along with electronic MoA and AoA (eMoA & eAoA).</li>
            <li><strong>Step 5:</strong> Apply for PAN and TAN, which are issued along with your Certificate of Incorporation.</li>
          </ul>
        </div>
      </section>
      {/* FAQ Series on Private Limited Company Registration */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">FAQ Series on Private Limited Company Registration</h2>
          <FAQAccordion />
        </div>
      </section>
    </div>
  )
}

const CompanyRegForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Z ]{2,}$/.test(form.name)) errs.name = 'Enter your full name (letters and spaces only).';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.whatsapp) errs.whatsapp = 'Select if you are on WhatsApp.';
    if (!form.category) errs.category = 'Please choose a category.';
    if (!form.message || form.message.length < 10) errs.message = 'Please enter your requirements (at least 10 characters).';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', whatsapp: '', category: '', message: '' });
      } else {
        setSuccess(false);
        alert('Submission failed. Please try again.');
      }
    } catch {
      setSuccess(false);
      alert('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your details have been submitted. Our team will contact you soon.</div>;

  return (
    <form className="w-full max-w-lg mx-auto space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your good name"
          required
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">E-mail <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your valid email"
          required
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Insert Indian No without +91 or 0 (10 Digit Only)"
          required
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Are you on WhatsApp? <span className="text-red-500">*</span></label>
        <select
          name="whatsapp"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          required
          value={form.whatsapp}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Choose Category <span className="text-red-500">*</span></label>
        <div className="flex flex-col gap-2 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="Pvt Ltd Company (2 Person)"
              required
              checked={form.category === 'Pvt Ltd Company (2 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Pvt Ltd Company (2 Person)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="LLP (2 Person)"
              required
              checked={form.category === 'LLP (2 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>LLP (2 Person)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="OPC (1 Person)"
              required
              checked={form.category === 'OPC (1 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>OPC (1 Person)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="Help Me to Choose"
              required
              checked={form.category === 'Help Me to Choose'}
              onChange={handleChange}
              className="accent-sky-500"
            />
            <span>Help Me to Choose</span>
          </label>
        </div>
        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Your Message <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Let us know your requirements in detail"
          required
          value={form.message}
          onChange={handleChange}
          rows={3}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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

export default Private_Limited_Company_Registration
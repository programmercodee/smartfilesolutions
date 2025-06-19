import React from 'react'

const Proprietorship_Firm_Registration = () => {
  const formRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Proprietorship Firm Registration Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-4">
            Register your Sole Proprietorship Firm easily with Smart File Solutions – a Govt Certified Portal. Start your business legally and professionally with our expert support at a budget-friendly price starting from just ₹1499/- INR.
          </p>
          <button
            className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What is Proprietorship Firm Registration?</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center">Proprietorship Firm Registration is the process of starting a single-person business entity. It is the simplest form of business in India, requiring less compliance and cost. The main purpose of this registration is to open a current bank account in the business name and start operating legally.</p>
        </div>
      </section>
      {/* Legal Proof Options Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Legal Proof Options for Proprietorship Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-4">To register a sole proprietorship firm, any one of the following combinations of legal entity proof is required:</p>
          <h4 className="text-lg font-semibold text-sky-600 mt-2 mb-1">Option 1: MSME Registration + Chartered Accountant Certificate</h4>
          <ul className="list-disc pl-6 text-neutral-700 mb-3">
            <li>Applicable if the business operates within the same state (e.g., Delhi to Delhi).</li>
            <li>Turnover is below ₹20 lakh per year.</li>
          </ul>
          <h4 className="text-lg font-semibold text-sky-600 mt-4 mb-1">Option 2: GST Registration as a Proprietorship Entity</h4>
          <ul className="list-disc pl-6 text-neutral-700 mb-3">
            <li>Required if your business involves interstate sales or services (e.g., Gujarat to Maharashtra).</li>
            <li>Suitable for e-commerce or internet-based businesses.</li>
            <li>For traders, retailers, manufacturers, or aggregators.</li>
            <li>Also needed if turnover exceeds ₹20 lakh within the same state.</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg mt-2">Choose the right option based on your business model to register your proprietorship firm easily and legally.</p>
        </div>
      </section>
      {/* Registration Fees Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Proprietorship Firm Registration Fees</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-4">Smart File Solutions offers two affordable pricing packages to help you register your Proprietorship Firm with ease.</p>

          <div className="w-full flex flex-col md:flex-row gap-6 mb-6">
            {/* Package 1 */}
            <div className="flex-1 bg-white border-2 border-sky-200 rounded-xl p-5 shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-sky-700 mb-2">Package 1 – ₹1499 Only <span className='text-sm font-normal'>(All Inclusive)</span></h3>
              <p className="text-neutral-700 mb-2">Includes:</p>
              <ul className="list-disc pl-6 text-neutral-700 mb-2 text-left w-full">
                <li>MSME Registration Certificate</li>
                <li>CA Certified Business Registration Certificate</li>
              </ul>
            </div>
            {/* Package 2 */}
            <div className="flex-1 bg-white border-2 border-sky-200 rounded-xl p-5 shadow flex flex-col items-center">
              <h3 className="text-lg font-bold text-sky-700 mb-2">Package 2 – ₹1999 Only <span className='text-sm font-normal'>(All Inclusive)</span></h3>
              <p className="text-neutral-700 mb-2">Includes:</p>
              <ul className="list-disc pl-6 text-neutral-700 mb-2 text-left w-full">
                <li>MSME Registration Certificate</li>
                <li>GST Registration Certificate for Proprietorship Firm</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-sky-600 mb-2 mt-2">Bonus Freebies with Every Package:</h4>
          <ul className="list-disc pl-6 text-neutral-700 mb-4 text-left w-full max-w-xl">
            <li>10+ Premium Legal Agreement Templates</li>
            <li>Professional Invoice Templates for Your Business</li>
          </ul>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* Registration Process Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Proprietorship Firm Registration Process</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-3">Registering your Proprietorship Firm with Smart File Solutions is simple and hassle-free. Just follow these 3 easy steps:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Step 1:</strong> Fill up the simplified application form online.</li>
            <li><strong>Step 2:</strong> Make secure payment through Cards / UPI / Net Banking / Wallets.</li>
            <li><strong>Step 3:</strong> Our legal expert or CA will be assigned to you. Submit required documents via email or WhatsApp. Relax while we take care of the rest!</li>
          </ul>
        </div>
      </section>
      {/* Why Register Online Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Why Register Online with Smart File Solutions?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-3">We make online Proprietorship Firm registration easy and affordable. Here's why thousands trust us:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Affordable pricing compared to agents or other portals.</li>
            <li>Smart File Solutions is a Govt-recognized Startup India Certified company with 10,000+ happy clients.</li>
            <li>Rated 5-stars on social platforms like Facebook.</li>
            <li>Dedicated support via Email, Calls & WhatsApp.</li>
            <li>Free premium business legal consultation.</li>
            <li>100% Money-Back Guarantee if you're not satisfied.</li>
          </ul>
        </div>
      </section>
      {/* Documents Required Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Required for Proprietorship Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>KYC of applicant (PAN Card + Aadhar / Voter ID / Driving License / Passport)</li>
            <li>Firm address proof (Electricity, Gas, or Phone Bill — no issue if not in applicant's name)</li>
            <li><strong>For GST:</strong></li>
            <ul className="list-disc pl-10 text-neutral-700 mb-2">
              <li>Passport size photo</li>
              <li>Cancelled cheque / Bank statement / Passbook front page</li>
            </ul>
          </ul>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Timeline for Proprietorship Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-3">With Smart File Solutions, your firm registration is done quickly and efficiently:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>MSME Registration + CA Certificate:</strong> 2–6 working days</li>
            <li><strong>GST Registration:</strong> Around 7 working days</li>
          </ul>
        </div>
      </section>
      {/* Steps to Register a Sole Proprietorship Firm Section */}

      {/* Book Free Consultation Section */}
      <section ref={formRef} className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-[#f5f6fd] rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800 mb-6 text-center">
            <span role="img" aria-label="calendar" className="mr-2">📅</span>
            Book Free Consultation Right Now
          </h2>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-1 text-center">Smart File Solutions – Proprietorship Consultation</h3>
            <p className="text-neutral-500 text-center mb-4 text-sm md:text-base">100% Govt Certified Platform with 50,000+ firms registered. Get expert help to start your proprietorship business the right way!</p>
            <ProprietorshipConsultForm />
          </div>
        </div>
      </section>
      {/* Benefits of Proprietorship Firm Registration Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Benefits of Proprietorship Firm Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-3">Here are some key advantages of registering a Proprietorship Firm with Smart File Solutions:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Single Owner:</strong> Only one person is needed to start and manage the business.</li>
            <li><strong>Full Control:</strong> Complete authority over decisions, profits, and operations.</li>
            <li><strong>Simple Process:</strong> Easy to set up and dissolve whenever needed.</li>
            <li><strong>Cost-Effective:</strong> Lowest cost of formation and minimal legal compliance.</li>
            <li><strong>Quick Start:</strong> Begin your business operations without any complex formalities.</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg mt-2">Want to know more? <strong>Explore all the benefits of Sole Proprietorship with Smart File Solutions.</strong></p>
        </div>
      </section>

      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Steps to Register a Sole Proprietorship Firm in India for Startups</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-4">Starting a sole proprietorship firm in India is simple and cost-effective. At <strong>Smart File Solutions</strong>, we break the registration process into two main categories to help you get started with the right legal structure:</p>

          <h3 className="text-lg font-bold text-sky-600 mt-4 mb-2">A) Tax Registration (GST Registration)</h3>
          <p className="text-neutral-700 mb-2">Since 1st July 2017, the Government of India mandates GST (Goods and Services Tax) for most businesses. GST replaces older taxes like VAT, CST, and Service Tax. It's required for:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Businesses with annual turnover above ₹20 lakhs (₹10 lakhs for North-Eastern states).</li>
            <li>Those selling goods or services across state lines (inter-state supply).</li>
            <li>Online businesses, traders, retailers, or anyone involved in ecommerce.</li>
          </ul>
          <h4 className="text-base font-semibold text-sky-700 mt-2 mb-1">Documents Required for GST Registration:</h4>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>PAN Card (Proprietor)</li>
            <li>Aadhaar Card</li>
            <li>Electricity bill of business premises (can be in another name)</li>
            <li>Bank Statement or Cancelled Cheque</li>
            <li>Passport-size Photograph</li>
          </ul>

          <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">B) Basic Local or Central Government Licenses</h3>
          <p className="text-neutral-700 mb-2">Some businesses don't require GST right away. In that case, banks ask for at least two certifications from the following options to open a current account:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Chartered Accountant Certificate:</strong> Issued by a practicing CA, certifying your business operations. (Some private banks may not accept this – confirm in advance.)</li>
            <li><strong>MSME Registration:</strong> Certification from the government for small and medium enterprises. (Also confirm acceptance with your bank.)</li>
            <li><strong>Business ITR (Income Tax Return):</strong> File your business income as a sole proprietorship to show proof of business activity.</li>
            <li><strong>Shop Act License:</strong> Issued by local municipal authorities for physical shop or store registrations.</li>
          </ul>
          <p className="text-neutral-700 mb-2">We recommend combining either MSME + CA Certificate or CA Certificate + ITR to meet most bank and compliance requirements.</p>

          <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">Conclusion: Choosing the Right Registration Option</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Option 1 – GST Registration:</strong> Go for this if your business requires GST either mandatorily or voluntarily based on business nature (like interstate trade or ecommerce).</li>
            <li><strong>Option 2 – MSME + CA Certificate or CA + ITR/Shop Act:</strong> Ideal for small businesses that don't yet need GST but want legal recognition and a current account setup.</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg mt-2">Still unsure? <strong>Smart File Solutions</strong> can help you choose the best path for your startup and complete your sole proprietorship registration hassle-free!</p>
        </div>
      </section>

      {/* FAQ on Sole Proprietorship Registration Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">FAQ on Sole Proprietorship Registration</h2>
          <SolePropFAQAccordion />
        </div>
      </section>
    </div>
  )
}

const ProprietorshipConsultForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Z ]{2,}$/.test(form.name)) errs.name = 'Please enter your full name (letters and spaces only).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    if (!form.whatsapp) errs.whatsapp = 'Please select if you are on WhatsApp.';
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
        setForm({ name: '', email: '', phone: '', whatsapp: '' });
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

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your details have been submitted. Our team will contact you soon for your free consultation.</div>;

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your full name"
          required
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Email <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Valid email address"
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
          placeholder="10-digit Indian mobile number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Are you on WhatsApp? <span className="text-red-500">*</span></label>
        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="Yes"
              checked={form.whatsapp === 'Yes'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="whatsapp"
              value="No"
              checked={form.whatsapp === 'No'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            No
          </label>
        </div>
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
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

// FAQ data and accordion component
const solePropFaqs = [
  {
    q: 'Do I need a commercial property or office to register a proprietorship?',
    a: 'No, you can use your home address for registration, whether you own or rent. Just provide a utility bill and, if renting, permission from the property owner.'
  },
  {
    q: 'Is a No Objection Certificate (NOC) required for rental or owned property?',
    a: 'If the utility bill is not in your name, a NOC is needed. We provide a standard format for this when required.'
  },
  {
    q: 'Can I choose any name for my firm?',
    a: 'Yes, you can select any name for your firm, as long as it does not use extensions like Pvt Ltd, LLP, or OPC. Just avoid names that are already trademarked.'
  },
  {
    q: "Can I register the firm in a family member's name?",
    a: 'Yes, you can register in a family member\'s name if you wish. The same documents are required as for your own registration.'
  },
  {
    q: 'Are there other ways to register a proprietorship apart from MSME or GST?',
    a: 'Yes, but they are usually more expensive or less valid. Shop Act License is an option for physical shops, but it can be costly. Business ITR can also serve as proof, but only for existing businesses.'
  },
  {
    q: 'Is sole proprietorship registration mandatory?',
    a: 'A proprietorship is an unregistered entity by default. You only need legal proof (like MSME, GST, or CA certificate) to open a bank account or work with vendors.'
  },
  {
    q: 'What are the disadvantages of a proprietorship firm?',
    a: 'Main drawbacks include limited resources, unlimited liability, less credibility, difficulty raising funds, and you cannot add partners.'
  },
  {
    q: 'Can an NRI become a proprietor?',
    a: 'No, only Indian residents can register as proprietors. NRIs can invest, but not register as the owner.'
  },
  {
    q: 'How much money do I need to start a proprietorship?',
    a: 'There is no minimum capital required. You can start with any amount.'
  },
  {
    q: 'What annual compliance is required for a proprietorship?',
    a: 'If you have GST, you must file GST returns. All business income is shown in your personal income tax return, as there is no separate PAN for the firm.'
  },
  {
    q: 'Can I convert my proprietorship into a private limited company?',
    a: 'Yes, you can convert to a private limited company through a standard process.'
  },
  {
    q: 'How do I register the name of my proprietorship?',
    a: 'There are no strict rules for naming. Choose any name not already trademarked. For extra protection, consider trademark registration.'
  },
  {
    q: 'How will I receive my GST, MSME, or CA certificate?',
    a: 'GST and MSME certificates are sent digitally by email. CA certificates are sent as hard copies by courier. Most government documents are digital.'
  },
  {
    q: 'Do I need to visit any office to complete registration?',
    a: 'No, everything is done online. Just send your documents by email or WhatsApp.'
  },
  {
    q: 'How can I check the validity of my registration certificate?',
    a: 'We provide steps to verify your certificate on the government website after registration.'
  },
  {
    q: 'Is a proprietorship firm the same as a company?',
    a: 'No, a proprietorship is a simple business entity, not registered under the Companies Act. A private limited company is registered with the Ministry of Corporate Affairs.'
  },
  {
    q: 'Is there a way to reduce the cost of registering a proprietorship?',
    a: 'Yes, using MSME with CA certification or GST registration is the most cost-effective. Shop Act, ITR, or trade licenses are more expensive.'
  }
];

const SolePropFAQAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="w-full max-w-2xl mx-auto">
      {solePropFaqs.map((faq, idx) => (
        <div key={idx} className="mb-3">
          <button
            className="w-full text-left flex justify-between items-center py-3 px-4 font-semibold text-sky-700 border-2 border-sky-300 rounded-lg bg-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 hover:bg-sky-50"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span>{faq.q}</span>
            <span className="ml-2 text-xl">{openIndex === idx ? '-' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div id={`faq-panel-${idx}`} className="py-2 px-4 text-neutral-700 text-base bg-sky-50 border-l-2 border-r-2 border-b-2 border-sky-200 rounded-b-lg">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Proprietorship_Firm_Registration
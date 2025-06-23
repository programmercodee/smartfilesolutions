import React from 'react'

const Partnership_Firm_Registration = () => {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Ref for the consultation form section
  const formSectionRef = React.useRef(null);

  // Handler to scroll to the form section
  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Partnership Firm Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-4">
            India's #1 Portal for hassle-free Partnership Firm Registration at the most affordable price. <strong>Get started in just 3 simple steps</strong>.<br />
            <strong>Packages starting from ₹2499/- only</strong>.
          </p>
          <button
            className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* Understanding Partnership Registration Section */}
      <section className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Understanding Partnership Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Starting a business with a partner? A Partnership Firm is a simple and widely used business structure in India, needing only two people to get started.</p>
          <p className="text-neutral-700 text-base md:text-lg mb-4">To register a Partnership Firm, you typically need the following:</p>
          <ul className="list-none space-y-2 pl-0">
            <li className="flex items-start gap-2 text-neutral-700"><span className="mt-1 text-sky-500">•</span> A notarized Partnership Deed executed on stamp paper</li>
            <li className="flex items-start gap-2 text-neutral-700"><span className="mt-1 text-sky-500">•</span> Partnership Firm's PAN and TAN</li>
            <li className="flex items-start gap-2 text-neutral-700"><span className="mt-1 text-sky-500">•</span> Optional registrations such as under the MSME Act, 2006</li>
          </ul>
        </div>
      </section>

      {/* Partnership Firm Registration Fees Section */}
      <section className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-sky-100 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-sky-700">Partnership Firm Registration Fees</h3>
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200 text-base"
              onClick={scrollToForm}
            >
              Book Now
            </button>
          </div>
          <p className="text-neutral-700 text-base md:text-lg mb-6">At <strong>SmartFileSolutions</strong>, we offer the most affordable registration packages for startups and small businesses — with a <strong>Lowest Price Guarantee</strong>.</p>

          <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-3">Our Packages</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Basic Package Card */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 shadow-sm flex flex-col">
              <h5 className="text-lg font-bold text-sky-700 mb-1">Basic Package</h5>
              <div className="text-2xl font-extrabold text-sky-600 mb-2">₹2499/-</div>
              <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-2">
                <li>Drafting of Partnership Deed by Legal Experts</li>
                <li>Application for PAN & TAN</li>
                <li>MSME Registration for the Partnership Firm</li>
              </ul>
            </div>
            {/* Premium Package Card */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 shadow-sm flex flex-col">
              <h5 className="text-lg font-bold text-sky-700 mb-1">Premium Package</h5>
              <div className="text-2xl font-extrabold text-sky-600 mb-2">₹3999/-</div>
              <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-2">
                <li>All services included in the Basic Package</li>
                <li>GST Registration for the Partnership Firm</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Bonus with Every Package</h4>
          <ul className="list-disc list-inside text-neutral-700 space-y-1 mb-4">
            <li>Access to 10+ Premium Legal Agreement Templates</li>
            <li>Premium Invoice Templates</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-2">
            <p className="text-yellow-800 text-sm md:text-base"><strong>Note:</strong> Printing the deed on stamp paper and notarization are not included. These services require the physical presence of all partners.</p>
          </div>
        </div>
      </section>

      {/* Book Free Consultation Section (scroll target) */}
      <section ref={formSectionRef} className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-[#f5f6fd] rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800 mb-6 text-center">
            <span role="img" aria-label="calendar" className="mr-2">📅</span>
            Book Your Free Partnership Consultation
          </h2>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-1 text-center">Get Started with SmartFileSolutions</h3>
            <p className="text-neutral-500 text-center mb-4 text-sm md:text-base">Fill out the form below and our experts at <strong>SmartFileSolutions</strong> will reach out to guide you through your Partnership Firm Registration. Trusted by 50,000+ businesses across India!</p>
            <PartnershipConsultForm />
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide to Registering a Partnership Firm */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-sky-50 rounded-2xl shadow-md border border-sky-100 p-6 md:p-10 mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-700 mb-6 text-center">Step-by-Step Guide to Registering a Partnership Firm</h3>

          {/* Step 1 */}
          <div className="mb-8">
            <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Step 1: Choose a Name for Your Partnership Firm</h4>
            <p className="text-neutral-700 text-base md:text-lg mb-2">The first step is selecting a suitable name for your partnership firm. While choosing the name, keep the following points in mind:</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1 text-base md:text-lg">
              <li><strong>Uniqueness:</strong> Make sure the name is not already trademarked, copyrighted, or registered as a company. Use the MCA portal or Trademark Search website to check name availability.</li>
              <li><strong>Restricted Words:</strong> Avoid using words like "Crown," "Emperor," "Empress," or "Empire" unless you have government approval.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Step 2: Drafting the Partnership Deed</h4>
            <p className="text-neutral-700 text-base md:text-lg mb-2">A Partnership Deed is a written agreement between partners that outlines the terms and conditions of the partnership. It must be printed on stamp paper and notarized. The deed should include:</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1 text-base md:text-lg">
              <li>Name of the Firm</li>
              <li>Registered Office Address</li>
              <li>Nature of the Business</li>
              <li>Profit Sharing Ratio</li>
              <li>Details of All Partners (Name & Address)</li>
              <li>Salary to Partners (if applicable)</li>
              <li>Capital Contribution by Each Partner</li>
            </ul>
            <p className="text-neutral-700 text-base md:text-lg mt-2">Additional clauses may include rules on partner admission, retirement, death, and other internal policies. Once drafted, the deed must be printed on stamp paper and notarized.</p>
          </div>

          {/* Step 3 */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Step 3: Registering the Partnership Deed (Optional)</h4>
            <p className="text-neutral-700 text-base md:text-lg mb-2">Partnership registration with the Registrar of Firms (ROF) is optional in India. If you choose to register, the following documents are required:</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1 text-base md:text-lg">
              <li>Form No. 1 – Application for Partnership Registration</li>
              <li>Duly notarized Affidavit</li>
              <li>Certified True Copy of the Partnership Deed</li>
              <li>Proof of Business Address (ownership or rent agreement)</li>
            </ul>
            <p className="text-neutral-700 text-base md:text-lg mt-2">Once the registrar verifies the application and terms of the deed, your firm's name will be officially recorded. If any issue arises, you may be asked to correct and resubmit the application.</p>
            <p className="text-neutral-700 text-base md:text-lg mt-2">Note: Offline registration can be costly in some states. Alternatively, you can register under the <strong>MSME Act</strong>, which is simpler, cost-effective, and allows you to open a bank account and start your business without Registrar of Firms registration.</p>
          </div>
        </div>
      </section>

      {/* Documents Required for Partnership Firm */}
      <section className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-6 md:p-10 mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Documents Required for Partnership Firm</h3>
          <ul className="list-disc pl-6 text-neutral-700 space-y-2 text-base md:text-lg mb-2">
            <li><strong>ID & Address Proof</strong> of all partners (PAN Card, Aadhar, Passport, Voter ID, or Driving License).</li>
            <li><strong>Business Address Proof:</strong>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1 text-base md:text-lg">
                <li>If rented: Rent Agreement and NOC from the landlord</li>
                <li>If owned: Electricity bill or any valid address proof</li>
              </ul>
            </li>
          </ul>
          <p className="text-yellow-700 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-2 text-base md:text-lg"><strong>Note:</strong> Home address can also be used as the business address.</p>
        </div>
      </section>

      {/* Can Partnership Firm Be Registered Online? */}
      <section className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-sky-50 rounded-2xl shadow-md border border-sky-100 p-6 md:p-10 mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Can Partnership Firm Be Registered Online?</h3>
          <p className="text-neutral-700 text-base md:text-lg">Yes, absolutely! With <strong>SmartFileSolutions</strong>, the entire partnership registration process is online, quick, and cost-effective. We've simplified the complex government procedures so you don't have to worry.</p>
        </div>
      </section>

      {/* Steps to Register a Partnership Firm */}
      <section className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-6 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Steps to Register a Partnership Firm</h3>
          <ol className="list-decimal pl-6 text-neutral-700 space-y-2 text-base md:text-lg">
            <li>Select a unique name for your Partnership Firm.</li>
            <li>Fill in the application form with business and partner details.</li>
            <li>Get your Partnership Deed drafted by our professionals.</li>
            <li>Print and sign the deed on stamp paper; get it notarized.</li>
            <li>Send us the scanned deed to initiate PAN & TAN applications.</li>
            <li>Receive PAN & TAN acknowledgment via email.</li>
            <li>Partnership PAN card will be delivered by the department.</li>
            <li>Apply for MSME Registration with our assistance.</li>
            <li>Get your MSME Certificate and other legal docs by email.</li>
            <li>Open a current bank account using your Deed, PAN, TAN & MSME certificate — and launch your business!</li>
          </ol>
        </div>
      </section>

      {/* FAQ Section on Partnership Firm Registration */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-6 text-center">Frequently Asked Questions on Partnership Firm Registration</h2>
          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Partnership Consultation Form Component
const PartnershipConsultForm = () => {
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
      const response = await fetch('https://formspree.io/f/xyzjnjng', {
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

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you for reaching out! Our SmartFileSolutions team will contact you soon to help with your Partnership Firm Registration.</div>;

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Full Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="e.g. Priya Sharma"
          required
          value={form.name}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">Enter your full name as per your ID proof</span>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="e.g. priya@email.com"
          required
          value={form.email}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">We'll send important updates here</span>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="10-digit Indian number (no +91 or 0)"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">For quick call-back by our experts</span>
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
        <span className="text-neutral-400 text-xs">We may send you updates on WhatsApp for faster support</span>
        {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
      >
        {isSubmitting ? 'Submitting...' : 'Request Free Consultation'}
      </button>
    </form>
  );
};

// FAQ Data
const faqData = [
  {
    q: "Can I use my home address as the office address for partnership firm registration?",
    a: "Yes, you can use a partner's residential address for registration. You'll need to provide proof such as an electricity bill, rent agreement, or a no objection certificate (NOC) from the owner."
  },
  {
    q: "What is a No Objection Certificate (NOC) for rented or owned property?",
    a: "If the utility bill is in someone else's name, a NOC from the property owner is required, stating they have no objection to commercial activity at the address. This does not affect your residential meter connection."
  },
  {
    q: "Can I register a unique name for my partnership firm?",
    a: "Partnership firm names are not protected by law. You can choose any name, but for exclusive rights, consider registering a trademark for your firm with SmartFileSolutions."
  },
  {
    q: "Can employees register a partnership firm in a family member's name?",
    a: "Yes, you can register the firm in a family member's name. Just provide the required documents for online registration."
  },
  {
    q: "Is there a minimum capital requirement to start a partnership firm?",
    a: "No minimum capital is required. You only need to deposit enough to maintain your current bank account. There are no strict capital requirements like in a private limited company."
  },
  {
    q: "Why are some partnership firms unregistered legal entities?",
    a: "Many firms are not registered with the Registrar of Firms due to high costs, especially after the introduction of LLPs. However, unregistered firms have limitations, such as not being able to file legal cases or claim set-offs."
  },
  {
    q: "What is partnership firm registration under the MSME Act, 2006?",
    a: "Instead of registering with the Registrar of Firms, you can register under the MSME Act for a certificate and to open a current bank account. This is more affordable and widely accepted."
  },
  {
    q: "Who can become a partner in a partnership firm?",
    a: "Only Indian residents can be partners in a partnership firm. For foreign partners, consider registering a private limited company."
  },
  {
    q: "What are the annual compliance requirements for a partnership firm?",
    a: "Typically, you need to file a business income tax return, personal income tax returns for partners, and GST returns if applicable. Annual compliance costs are usually around ₹4,000–₹5,000."
  },
  {
    q: "Can I convert my partnership firm into a private limited company?",
    a: "Yes, you can convert by setting up a new private limited company and executing an agreement between the partnership and the new company."
  },
  {
    q: "How long does it take to register a partnership firm with SmartFileSolutions?",
    a: "Drafting the deed takes about 2 days, PAN card acknowledgment 4–6 days, and MSME registration about 1 day after that."
  },
  {
    q: "How do I open a current bank account for my partnership firm?",
    a: "Banks require the partnership deed, identity and address proof, and a separate PAN card for the firm. SmartFileSolutions will guide you through the process."
  },
  {
    q: "How do I get a separate PAN card for my partnership firm?",
    a: "After notarizing your partnership deed, SmartFileSolutions can help you apply for a PAN card in your firm's name."
  },
  {
    q: "Will my partnership firm receive a registration certificate?",
    a: "You will receive an MSME certificate as legal proof of registration. Registrar of Firms certificates are optional and more expensive."
  },
  {
    q: "Can I receive investments in my partnership firm?",
    a: "Yes, Indian residents can invest in a partnership firm. However, there is no limited liability as in LLPs or private limited companies."
  },
  {
    q: "How do I notarize my partnership deed?",
    a: "After printing the deed on stamp paper, all partners must be present to notarize it with a lawyer."
  },
  {
    q: "Is partnership deed registration compulsory?",
    a: "Registering the deed with the Registrar of Firms is optional and often skipped due to high costs."
  },
  {
    q: "Do I need to visit any office to complete my partnership registration?",
    a: "No, SmartFileSolutions handles everything online. You only need to print and notarize the deed, which requires your physical presence."
  },
  {
    q: "Why choose SmartFileSolutions for partnership firm registration?",
    a: "We offer affordable packages, are recognized under the Startup India program, have thousands of satisfied clients, provide dedicated support, free legal consultancy, and a 100% money-back guarantee."
  }
];

// FAQItem Component
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);
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
      {open && <div className="px-4 pb-4 text-neutral-700 text-sm md:text-base">{answer}</div>}
    </div>
  );
};

export default Partnership_Firm_Registration
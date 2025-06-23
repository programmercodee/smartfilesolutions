import React from 'react'

const LLP_Registration = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">LLP Registration Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-4">
            Smart File Solutions – India's Leading Portal for Hassle-Free LLP Registration. Join 10,000+ Businesses Who've Already Registered Their LLP at the Most Affordable Price. Are You Next?
          </p>
          <button
            className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* Info Sections */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        {/* What is LLP? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is LLP?</h3>
          <p className="text-neutral-700 text-base md:text-lg">LLP stands for Limited Liability Partnership. It was introduced under the LLP Act, 2008 and officially launched on 9th January 2009. Unlike traditional partnership firms, LLP provides limited liability protection to its partners. It combines the flexibility of a partnership with the benefits of a company structure, making it ideal for professionals and small businesses.</p>
        </div>
        {/* What is LLP Registration? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is LLP Registration?</h3>
          <p className="text-neutral-700 text-base md:text-lg">LLP Registration is a government-approved process where a minimum of two partners come together to register a Limited Liability Partnership with the Ministry of Corporate Affairs. Once registered, the LLP gets a unique LLPIN number, allowing the partners to open a bank account in the LLP's name and legally operate the business in India.</p>
        </div>
        {/* LLP Incorporation Rules */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">LLP Incorporation Rules</h3>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Minimum 2 designated partners are required to incorporate an LLP.</li>
            <li>There is no requirement for authorized share capital, unlike private limited companies.</li>
            <li>Partners can contribute any amount mutually agreed upon and start the LLP with minimal compliance.</li>
          </ul>
        </div>
      </section>
      {/* LLP Registration Fees Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border-2 border-sky-100 p-8 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-700 mb-3 text-center">LLP Registration Fees</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-4 text-center">At <strong>Smart File Solutions</strong>, we offer an affordable and all-in-one LLP registration package tailored for startups and small businesses. Our pricing is transparent with no hidden charges.</p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-start mb-6">
            {/* Package Price */}
            <div className="flex-1 bg-sky-50 rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-center mb-6 md:mb-0">
              <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Our Package Price:</h4>
              <p className="text-2xl md:text-3xl font-bold text-sky-700 mb-1">₹8,999/-</p>
              <p className="text-neutral-700 text-sm mb-1">(Excl. GST & State Stamp Duty on LLP Agreement)</p>
              <p className="text-green-600 text-sm font-semibold">GST Credit Available</p>
            </div>
            {/* What's Included */}
            <div className="flex-1 bg-sky-50 rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-start">
              <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">What's Included:</h4>
              <ul className="list-disc pl-6 text-neutral-700 mb-2">
                <li>Digital Signature Certificate (DSC) + DIN for 2 Designated Partners</li>
                <li>LLP Name Approval</li>
                <li>Certificate of Incorporation</li>
                <li>PAN & TAN for the LLP</li>
              </ul>
              <h4 className="text-lg md:text-xl font-semibold text-sky-600 mb-2 mt-4">Free Add-ons:</h4>
              <ul className="list-disc pl-6 text-neutral-700">
                <li>MSME Registration Certificate – to help you avail government startup benefits</li>
                <li>Access to 10+ Premium Legal Agreement Templates – ideal for launching and running your business smoothly</li>
              </ul>
            </div>
          </div>
          <button
            className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-10 py-3 rounded-lg shadow transition-all duration-200 text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* LLP Registration Form Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-[#f5f6fd] rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800 mb-6 text-center">
            <span role="img" aria-label="calendar" className="mr-2">📅</span>
            Book Free Consultation Right Now
          </h2>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto">
            <div className="bg-sky-600 rounded-t-xl p-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 text-center">Company Registration in India</h3>
              <p className="text-blue-100 text-center text-sm">100% Govt Certified Platform with 1 lakh+ companies – Powered by Smart File Solutions</p>
            </div>
            <LLPRegForm />
          </div>
        </div>
      </section>
      {/* LLP Info & Process Sections */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        {/* LLP Incorporation Made Easy */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">LLP Incorporation Made Easy with Smart File Solutions</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">LLP registration is often seen as a complex legal process, but with <strong>Smart File Solutions</strong>, it's simplified into just 3 easy steps:</p>
          <ol className="list-decimal pl-6 text-neutral-700 mb-2">
            <li>Fill out the LLP registration form with your business details.</li>
            <li>Pay the first installment of just ₹1,999/- securely via UPI, Cards, or Net Banking.</li>
            <li>Receive instant confirmation via email and connect with a dedicated CA to start your LLP process.</li>
          </ol>
        </div>
        {/* Documents Required */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Required for LLP Registration</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>PAN Card of all partners</li>
            <li>Identity Proof (Aadhar, Voter ID, Passport, etc.)</li>
            <li>Address Proof (not older than 2 months)</li>
            <li>Passport-size photos</li>
            <li>Proof of registered office (Rent Agreement/NOC/Sale Deed with utility bill)</li>
            <li>Digital Signature Certificate (DSC) - Provided by <strong>Smart File Solutions</strong></li>
            <li>LLP Agreement signed between partners</li>
          </ul>
        </div>
        {/* Key Features */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Key Features of LLP Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg">LLP is a separate legal entity with limited liability protection. All partner duties and roles are governed through the LLP Agreement. An LLP must have at least 2 partners and allows protection against negligence of other partners. LLPs can also be converted from existing companies. Designated Partners are responsible for compliance as per MCA rules.</p>
        </div>
        {/* Minimum Requirements */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Minimum Requirements for LLP Setup</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>At least 2 designated partners</li>
            <li>No minimum capital requirement</li>
            <li>LLP Agreement submission within 30 days of incorporation</li>
            <li>Digital Signature and Designated Partner Identification Number (DPIN)</li>
          </ul>
        </div>
        {/* LLP Registration Process */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">LLP Registration Process (Latest MCA Guidelines)</h3>
          <ol className="list-decimal pl-6 text-neutral-700 mb-2">
            <li>Obtain DSC for designated partners (mandatory for all e-Filings)</li>
            <li>Reserve your LLP name via MCA's LLP-RUN or directly file FiLLiP form</li>
            <li>File the FiLLiP form for incorporation – this includes name reservation and company details</li>
            <li>Once approved, receive LLP Incorporation Number</li>
            <li>File the LLP Agreement within 30 days post incorporation</li>
          </ol>
        </div>
        {/* Cost Structure */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Cost Structure of LLP Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Government charges involved:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>DIN: ₹1,000 (2 partners)</li>
            <li>DSC: ₹2,000 (2 partners)</li>
            <li>Name Reservation: ₹500</li>
            <li>Stamp Duty & Govt Fees: ₹750</li>
            <li>LLP Agreement Drafting: ₹250</li>
            <li>Partner Consent Forms: ₹250</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg mb-1"><strong>Total Govt. Expenses: ₹4,750 – ₹5,000</strong></p>
          <p className="text-neutral-700 text-base md:text-lg mb-1"><strong>Professional Fee (varies): ₹4,000 – ₹6,000</strong></p>
          <p className="text-green-700 font-semibold">Smart File Solutions offers the most competitive LLP packages in India.</p>
        </div>
        {/* Timeline */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Timeline for LLP Incorporation</h3>
          <p className="text-neutral-700 text-base md:text-lg">With <strong>Smart File Solutions</strong>, LLP registration typically takes a few working days. After name reservation or FiLLiP submission, you'll receive your Incorporation Certificate shortly. The LLP Agreement must be submitted within 30 days to the MCA.</p>
        </div>
        {/* How to Choose LLP Name */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">How to Choose the LLP Name</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">You can choose your LLP name via:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>LLP-RUN</strong> web service: Allows 2 name preferences</li>
            <li><strong>FiLLiP Form:</strong> Includes name reservation and incorporation in one step</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg">File these through the <strong>MCA portal</strong> or let <strong>Smart File Solutions</strong> handle it professionally for you.</p>
        </div>
        {/* LLP Name Availability Check */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">LLP Name Availability Check</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Before filing, it's advised to check name availability:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Visit the official <strong>MCA LLP Name Search</strong> tool</li>
            <li>Search your preferred names</li>
            <li>Ensure names don't conflict with existing registered businesses</li>
          </ul>
          <p className="text-green-700 font-semibold">Smart File Solutions will help you pick a unique, compliant LLP name.</p>
        </div>
        {/* Annual LLP Compliances */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Annual LLP Compliances</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Annual Return filing to MCA</li>
            <li>Profit & Loss Statement submission</li>
            <li>PAN application for LLP</li>
            <li>IT Return filing</li>
            <li>Timely compliance is essential to avoid penalties</li>
          </ul>
          <p className="text-green-700 font-semibold">Smart File Solutions offers hassle-free compliance services post-registration too.</p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 mb-6 text-center">Frequently Asked Questions about LLP Registration</h2>
          <LLPFAQ />
        </div>
      </section>
    </div>
  )
}

// LLP Registration Form Component
const LLPRegForm = () => {
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
    if (!/^[a-zA-Z ]{2,}$/.test(form.name)) errs.name = 'Please enter your full name (letters and spaces only).';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    if (!form.whatsapp) errs.whatsapp = 'Please select if you are on WhatsApp.';
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
      const response = await fetch('https://formspree.io/f/mwpbrbnn', {
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

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your details have been submitted. Our team at Smart File Solutions will contact you soon for your free consultation.</div>;

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
          placeholder="Valid 10-digit Indian mobile number"
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
              checked={form.category === 'Pvt Ltd Company (2 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            Pvt Ltd Company (2 Person)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="LLP (2 Person)"
              checked={form.category === 'LLP (2 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            LLP (2 Person)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="OPC (1 Person)"
              checked={form.category === 'OPC (1 Person)'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            OPC (1 Person)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="Help Me to Choose"
              checked={form.category === 'Help Me to Choose'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            Help Me to Choose
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

// FAQ Accordion Component
const llpFaqData = [
  {
    q: 'Who can become a partner in LLP registration?',
    a: 'Any individual or body corporate can become a partner in an LLP, unless they are of unsound mind or undergoing insolvency proceedings.'
  },
  {
    q: 'Can an NRI (Non-Resident Indian) become a partner in an LLP?',
    a: 'Yes, NRIs can be partners in an LLP. Since 2015, 100% FDI is allowed in LLPs in sectors where it is permitted.'
  },
  {
    q: 'What is an LLP Agreement?',
    a: 'An LLP Agreement is a legal document signed and executed among the partners, outlining their rights and duties. It must be submitted to the Registrar of Companies (ROC) during incorporation.'
  },
  {
    q: 'What is the minimum and maximum number of partners in an LLP?',
    a: 'A minimum of 2 partners is required, and there is no maximum limit.'
  },
  {
    q: 'Why do small startups prefer LLP registration?',
    a: 'LLP registration is preferred by startups due to low compliance, easy incorporation, lower fees, body corporate status, and limited liability.'
  },
  {
    q: 'Is LLP registration cheaper than a Private Limited Company?',
    a: 'Yes, LLP registration generally involves lower costs and fewer compliances compared to a Private Limited Company.'
  },
  {
    q: 'What is stamp duty in an LLP Agreement?',
    a: 'Stamp duty varies by state. For example, in Rajasthan, it is ₹500. The amount depends on where the agreement is executed.'
  },
  {
    q: 'Do I need a commercial office for LLP registration?',
    a: 'No, you can use your residential address as the registered office for your LLP.'
  },
  {
    q: 'Can I form an LLP myself without a CA or online portal?',
    a: 'No, professional assistance is required as per MCA rules. A CA, CS, or lawyer must authorize the e-forms with a DSC.'
  },
  {
    q: 'What is the tax rate for LLPs?',
    a: 'LLPs are taxed like partnership firms at an effective rate of 30.9% on profits. No surcharge applies.'
  },
  {
    q: 'Can I include family members as partners in my LLP?',
    a: 'Yes, you can include any family member as a partner in your LLP.'
  },
  {
    q: 'What is the minimum share capital for an LLP?',
    a: 'There is no minimum capital requirement, but it is advisable to start with at least ₹10,000.'
  },
  {
    q: 'Is GST registration required after LLP registration?',
    a: 'GST registration is required if your turnover exceeds ₹20 lakh per year. It is recommended to register for GST after incorporating your LLP to claim input tax credit.'
  },
  {
    q: 'Is my LLP eligible for Startup India benefits?',
    a: 'Yes, LLPs are recognized as eligible legal entities under the Startup India scheme.'
  },
  {
    q: 'Can an LLP have multiple businesses?',
    a: 'Yes, you can operate multiple businesses under one LLP name.'
  },
  {
    q: 'Does LLP registration protect my company name and logo?',
    a: 'LLP registration protects your company name, but not your brand or logo. For brand protection, you should register a trademark.'
  },
  {
    q: 'What is the criteria to become a partner in an LLP?',
    a: 'Partners must be at least 18 years old and have valid documents such as a PAN card.'
  },
  {
    q: 'Does the LLP Registration Certificate have validity or require renewal?',
    a: 'The LLP Registration Certificate is valid for a lifetime and does not require renewal.'
  },
  {
    q: 'Can a working professional register an LLP in India?',
    a: 'Yes, unless restricted by your employment agreement, working professionals can register an LLP.'
  },
  {
    q: 'Is physical presence or meeting with a government officer required?',
    a: 'No, the entire LLP registration process with Smart File Solutions is 100% online.'
  },
  {
    q: 'Do VCs or angel investors invest in LLPs?',
    a: 'Venture capitalists and angel investors usually prefer Private Limited Companies, but in some cases, they may invest in LLPs.'
  },
  {
    q: 'What are the mandatory annual compliances for an LLP?',
    a: 'LLPs must file an annual return and statement of accounts with the MCA. Audit is not required unless turnover exceeds ₹40 lakh.'
  },
  {
    q: 'Can I convert my LLP into a Private Limited Company or other entity?',
    a: 'Currently, conversion from LLP to Private Limited Company is not practical or possible.'
  },
  {
    q: 'Do I need any other licenses after LLP registration?',
    a: 'Depending on your business, you may need GST registration, trademark registration, FSSAI for food businesses, or IEC for import/export.'
  }
];

function LLPFAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="divide-y divide-sky-200">
      {llpFaqData.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="font-semibold text-sky-700 text-base md:text-lg">{item.q}</span>
            <span className="ml-4 text-sky-500 text-xl">{openIndex === idx ? '-' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="pb-4 text-neutral-700 text-base md:text-lg animate-fade-in">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LLP_Registration
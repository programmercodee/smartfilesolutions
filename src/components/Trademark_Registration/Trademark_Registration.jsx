import React from 'react'

const Trademark_Registration = () => {
  // Ref for the consultation form
  const formRef = React.useRef(null);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Handler to scroll to form
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
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Trademark Registration Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-4">
            Register your trademark hassle-free with India's only Government Certified Portal – trusted by thousands for quick and secure trademark registration. Our packages start at just ₹6800/- (All Inclusive).
          </p>
          <button
            className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={scrollToForm}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* What is Trademark Registration? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is Trademark Registration?</h2>
          <p className="text-neutral-700 text-base md:text-lg">Trademark Registration is essential for any business or brand in India that wishes to secure its name and logo. It legally protects your brand identity in a specific trademark class out of 45 available classes, based on your product or service category. While trademarks protect your brand identity, for ideas or innovations, Patent Registration is needed; for designs, you should opt for Copyright Registration.</p>
        </div>
      </section>
      {/* Why is Trademark Registration Required for Business? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Why is Trademark Registration Required for Business?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Trademark registration provides legal protection to prevent others from using your brand name or logo. It builds trust among customers by ensuring brand authenticity and helps in:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Preventing competitors from copying your brand name.</li>
            <li>Protecting domain names and brand reputation online.</li>
            <li>Establishing your identity on e-commerce platforms like Flipkart or Amazon.</li>
            <li>Registering a Pvt Ltd company with the same brand name.</li>
          </ul>
        </div>
      </section>
      {/* Trademark Registration Online is Possible */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Trademark Registration Online is Possible</h2>
          <p className="text-neutral-700 text-base md:text-lg">The Trademark Registry in India now offers online registration through a dedicated portal. However, the process requires expertise in trademark classes, trade name laws, and digital signature procedures. MyOnlineCA simplifies this process with help from Trademark Govt Certified Attorneys, offering quick, affordable registration services.</p>
        </div>
      </section>
      {/* Benefits of Online Trademark Registration */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Benefits of Online Trademark Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Choosing online registration offers multiple advantages:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Lower cost compared to offline methods.</li>
            <li>No need to visit government offices.</li>
            <li>Track application status and updates easily.</li>
            <li>Quick resubmission or corrections online.</li>
            <li>Respond to objections and download certificates easily.</li>
            <li>Get trademark search report prepared instantly.</li>
          </ul>
        </div>
      </section>
      {/* Trademark Registration Cost & Fee Breakdown and Package Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-sky-50 rounded-2xl shadow p-8 flex flex-col md:flex-row gap-8 items-stretch">
          {/* Cost & Fee Breakdown */}
          <div className="flex-1 bg-white rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Trademark Registration Cost & Fee Breakdown</h2>
            <p className="text-neutral-700 text-base md:text-lg mb-2">Trademark Registration in India involves two main types of charges:</p>
            <ul className="list-disc pl-6 text-neutral-700 mb-2">
              <li>
                <strong>Government Fee:</strong> ₹4,500 per class (for individual/startup/small business). This includes protection of your brand name and logo under one trademark class. It's crucial to select the correct class to avoid future legal issues or extra costs.
              </li>
              <li>
                <strong>Registered Trademark Attorney Fee:</strong> This varies based on expertise and service quality. On average, attorneys charge between ₹2,000 to ₹3,000 to file a trademark application.
              </li>
            </ul>
          </div>
          {/* Package Card */}
          <div className="flex-1 bg-white rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">MyOnlineCA Trademark Registration Package – Just ₹6,799/-</h2>
            <p className="text-neutral-700 text-base md:text-lg mb-2 text-center">At MyOnlineCA, we offer an all-inclusive Trademark Registration package at ₹6,799/- to help startups and entrepreneurs protect their brand professionally and affordably.</p>
            <p className="text-neutral-700 text-base md:text-lg mb-2 text-center font-semibold">Our Package Includes:</p>
            <ul className="list-disc pl-6 text-neutral-700 mb-4 text-left w-full max-w-xs mx-auto">
              <li>Expert Consultation to choose the correct trademark class.</li>
              <li>Legal advice on trademark laws and compliance.</li>
              <li>Comprehensive Trademark Search Report to avoid conflicts.</li>
              <li>Drafting & Filing of Trademark Application with Logo.</li>
              <li>Instant Trademark Acknowledgement with Regular Status Updates.</li>
            </ul>
            <button
              className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
              onClick={scrollToForm}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
      {/* Book Free Consultation Section */}
      <section className="py-10 px-4 flex justify-center">
        <div ref={formRef} className="w-full max-w-3xl bg-[#f5f6fd] rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800 mb-6 text-center">
            <span role="img" aria-label="calendar" className="mr-2">📅</span>
            Book Free Consultation Right Now
          </h2>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto">
            <div className="bg-sky-600 rounded-t-xl p-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 text-center">Trademark/Brand Registration Form</h3>
              <p className="text-blue-100 text-center text-sm">Fill up your application and get connected with Smart File Solutions</p>
            </div>
            <TrademarkConsultForm />
          </div>
        </div>
      </section>
      {/* Documents & Info Sections */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        {/* Documents Required */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Required for Trademark Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">To register a trademark in India, the following documents are necessary:</p>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Copy of PAN Card (of individual or business entity)</li>
            <li>Address proof such as Aadhaar Card, Voter ID, or Passport</li>
            <li>Trademark Authorization Letter (format provided by attorney)</li>
            <li>Any existing company or firm registration certificate (if applicable)</li>
          </ul>
        </div>
        {/* Information Required */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Information Required During Trademark Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li><strong>Applicant Name:</strong> Can be an individual, Pvt Ltd company, LLP, partnership, or proprietorship firm</li>
            <li><strong>Business Type:</strong> Define if it's trading, manufacturing, or service-based</li>
            <li><strong>Nature of Business:</strong> Brief about products or services offered (used for choosing correct trademark class)</li>
            <li><strong>Brand Name:</strong> Name under which products/services are provided</li>
            <li><strong>Logo (Optional):</strong> Provide in PNG or JPEG format if available</li>
            <li><strong>Communication Address:</strong> Used for official government correspondence</li>
          </ul>
        </div>
        {/* Benefits Section */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Benefits of Trademark Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li><strong>Builds Trust &amp; Credibility:</strong> Trademark symbol (™) increases customer trust and brand value</li>
            <li><strong>Legal Protection:</strong> Stop competitors from copying your brand or selling fakes</li>
            <li><strong>Brand Value as an Asset:</strong> Trademarks are intellectual property that add financial worth to your business</li>
            <li><strong>Unique Brand Identity:</strong> Distinguishes your products or services in the market</li>
            <li><strong>Digital Protection:</strong> Prevents misuse of your domain or brand online (.com, .in, etc.)</li>
            <li><strong>Acts as a Marketing Tool:</strong> ™ symbol works like a brand badge in ads and promotions</li>
            <li><strong>Helps with E-commerce Compliance:</strong> Required for selling on platforms like Amazon or Flipkart</li>
            <li><strong>Global Expansion:</strong> Easier to register your brand internationally after Indian registration</li>
          </ul>
        </div>
      </section>
      {/* Trademark Registration Process Section */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Trademark Registration Process in India</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-4">Trademark registration is now completely online in India. You don't need to visit any trademark office physically. The application must be filed through a Government-registered Trademark Attorney. Here's how it works:</p>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Phase 1: Initial Registration</h3>
            <ul className="list-disc pl-6 text-neutral-700 mb-2">
              <li>Prepare required documents and your brand logo.</li>
              <li>File the TM application form along with attorney's digital signature.</li>
              <li>Pay the government fee online using net banking or debit card.</li>
              <li>Receive the acknowledgment receipt and start using the ™ symbol.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Phase 2: Trademark Examination</h3>
            <p className="text-neutral-700 mb-2">After 3–12 months of filing, the Trademark Registry examines the application based on legal provisions. If any objection is found, an examination report (objection notice) is issued.</p>
            <p className="text-neutral-700 mb-2">You must respond with the required documents and clarification within the specified time period to proceed further.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Phase 3: Trademark Publication</h3>
            <p className="text-neutral-700 mb-2">Once your reply is accepted, the trademark is published in the Trademark Journal of India. This allows the public to review and oppose if they have any claims.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Phase 4: Opposition Period</h3>
            <p className="text-neutral-700 mb-2">For 4 months post-publication, any third party can file opposition if they believe your trademark conflicts with theirs. If there is no opposition, or it's resolved in your favor, you move to the final stage.</p>
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mt-4 mb-2">Final Trademark Registration</h3>
            <p className="text-neutral-700 mb-2">Upon successful clearance of the opposition window, the Trademark Registry issues the official Trademark Certificate. This certificate grants you exclusive rights to the brand for 10 years.</p>
          </div>
          <div className="mb-2">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Other Key Details</h3>
            <h4 className="font-semibold text-neutral-800 mb-1">Is Brand or Logo Registration the Same as Trademark Registration?</h4>
            <p className="text-neutral-700 mb-2">Yes. Terms like brand registration, logo registration, and trademark registration all refer to the same legal process of securing your business identity.</p>
            <h4 className="font-semibold text-neutral-800 mb-1">Trademark Symbols Explained</h4>
            <ul className="list-disc pl-6 text-neutral-700 mb-2">
              <li><strong>™ Symbol:</strong> Indicates a pending trademark application and gives temporary protection. Use it right after application submission.</li>
              <li><strong>® Symbol:</strong> Indicates that the trademark has been officially registered and offers full legal protection. Use it only after receiving the certificate.</li>
            </ul>
            <h4 className="font-semibold text-neutral-800 mb-1">Can You Register a Trademark Yourself?</h4>
            <p className="text-neutral-700">No. Due to technicalities in trademark classes, digital signatures, and legal documentation, only a registered Trademark Attorney or Agent can file the application. They also help reduce errors, guide on class selection, and provide consultation.</p>
          </div>
        </div>
      </section>
      {/* Smart File Solutions Help & Info Sections */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        {/* How Smart File Solutions Helps */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">How Smart File Solutions Helps You with Trademark Registration</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Smart File Solutions is India's trusted legal service platform helping 100+ startups and companies every month. We make online Trademark Registration super easy and affordable. Our platform connects you with top Trademark Attorneys across India offering services at the lowest professional fees.</p>
          <p className="text-neutral-700 text-base md:text-lg mb-2 font-semibold">Simple 3-Step Process:</p>
          <ol className="list-decimal pl-6 text-neutral-700 mb-2">
            <li>Submit a request with your basic details</li>
            <li>Pay professional fee of ₹1999/- online (via UPI, card, or net banking)</li>
            <li>Get instant confirmation and direct call from Trademark Attorney to get started</li>
          </ol>
        </div>
        {/* Difference Between Brand, Logo, and Trademark Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Difference Between Brand, Logo, and Trademark Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg">People often confuse these terms, but in legal terms, Brand Registration and Logo Registration are the same as Trademark Registration. Once registered, both your brand name and logo get legal protection under the Trademark Act.</p>
        </div>
        {/* What Is Trademark Class or Classification? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">What Is Trademark Class or Classification?</h3>
          <p className="text-neutral-700 text-base md:text-lg">There are 45 classes defined in the Trademark Act. Each class represents a specific category of products or services. Choosing the right class is essential for proper protection. For example, Smart File Solutions falls under Class 45 (legal and security services).</p>
        </div>
        {/* How to Do a Trademark Search Before Registration? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">How to Do a Trademark Search Before Registration?</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Before applying, a Trademark Search ensures no similar brand name exists. You can:</p>
          <ol className="list-decimal pl-6 text-neutral-700 mb-2">
            <li>Visit the official Trademark Registry site</li>
            <li>Enter your brand name and select the appropriate class</li>
          </ol>
          <p className="text-neutral-700 text-base md:text-lg">Our attorneys have access to authorized government portals and can provide expert search reports to minimize rejection chances.</p>
        </div>
        {/* Validity of a Trademark Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Validity of a Trademark Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg">Once registered, your trademark is valid for 10 years. After that, it can be renewed indefinitely in 10-year blocks by paying a renewal fee.</p>
        </div>
        {/* Timeline for Trademark Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Timeline for Trademark Registration</h3>
          <p className="text-neutral-700 text-base md:text-lg">The filing process takes 3–4 working days. Post-filing, you receive an acknowledgment number. The final trademark registration certificate can take 6–8 months, provided there are no objections.</p>
        </div>
        {/* What Is a Trademark Objection? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">What Is a Trademark Objection?</h3>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Trademark objections arise when:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Someone opposes your brand due to similarity</li>
            <li>The trademark office finds a conflict or issue</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg">In such cases, an examination report is issued, and you must respond to defend your application.</p>
        </div>
        {/* How to Reply to Trademark Objection? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">How to Reply to Trademark Objection?</h3>
          <p className="text-neutral-700 text-base md:text-lg">If you receive an objection, you have approx. 30 days to respond. This includes submitting a written reply with supporting documents on stamp paper. The reply must be well-structured to avoid rejection.</p>
        </div>
        {/* Trademark Renewal Process */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Trademark Renewal Process</h3>
          <p className="text-neutral-700 text-base md:text-lg">You can renew your trademark within 6 months before its 10-year validity ends. The process involves submitting a renewal request and paying the prescribed government fee to retain your rights.</p>
        </div>
        {/* Why Choose Smart File Solutions? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Why Choose Smart File Solutions?</h3>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Lowest pricing with no hidden fees</li>
            <li>Govt-registered Trademark Attorneys</li>
            <li>100% online & transparent process</li>
            <li>Free expert consultation before filing</li>
            <li>Live tracking & updates on your application</li>
          </ul>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 mb-6 text-center">Frequently Asked Questions about Trademark Registration</h2>
          <TrademarkFAQ />
        </div>
      </section>
    </div>
  )
}

const TrademarkConsultForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    business: '',
    knowClass: ''
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Z ]{2,}$/.test(form.name)) errs.name = 'Please enter your full name (letters and spaces only).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.';
    if (!/^\d{10}$/.test(form.phone)) errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    if (!form.brand) errs.brand = 'Please enter your brand name.';
    if (!form.business || form.business.length < 5) errs.business = 'Please describe your business (at least 5 characters).';
    if (!form.knowClass) errs.knowClass = 'Please select if you know about Trademark Class.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? (checked ? value : '') : value }));
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
        setForm({ name: '', email: '', phone: '', brand: '', business: '', knowClass: '' });
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

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your details have been submitted. Our team will contact you soon for your free trademark consultation.</div>;

  return (
    <form className="w-full space-y-4" onSubmit={handleSubmit} noValidate>
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
          placeholder="Valid contact number"
          required
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name of Brand <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="brand"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your brand name"
          required
          value={form.brand}
          onChange={handleChange}
        />
        {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Nature of Business <span className="text-red-500">*</span></label>
        <textarea
          name="business"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Let us know about your business"
          required
          value={form.business}
          onChange={handleChange}
          rows={3}
        />
        {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Do you know about Trademark Class <span className="text-red-500">*</span></label>
        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="knowClass"
              value="Yes"
              checked={form.knowClass === 'Yes'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="knowClass"
              value="No"
              checked={form.knowClass === 'No'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            No
          </label>
        </div>
        {errors.knowClass && <p className="text-red-500 text-sm mt-1">{errors.knowClass}</p>}
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
const faqData = [
  {
    q: 'How do I choose a good trademark name for my business?',
    a: 'Pick a unique, easy-to-remember name that is not already in use by another company. Check for trademark and domain name availability before finalizing your brand name.'
  },
  {
    q: 'What are the main features of a trademark?',
    a: 'A trademark gives your business a unique brand identity, legally protects your brand name, and builds trust and authority with customers.'
  },
  {
    q: 'Who can register a trademark in India?',
    a: 'Anyone—including individuals, companies, partnerships, LLPs, and even foreigners—can register a trademark in India. There are no special qualifications required.'
  },
  {
    q: 'Who benefits from a registered trademark?',
    a: 'The trademark owner (individual, company, or sole proprietor) enjoys exclusive rights and can even sell or transfer the trademark to others.'
  },
  {
    q: 'Can I correct or change my trademark application after filing?',
    a: 'Yes, you can make corrections or changes after filing by submitting a correction form. Your attorney can help you with this process.'
  },
  {
    q: 'Can the trademark registry remove my trademark?',
    a: 'Yes, if your trademark does not meet government requirements or you do not respond to objections, the registry can remove or cancel your trademark.'
  },
  {
    q: 'What is the most important part of a trademark application?',
    a: 'The brand name (word or logo) and the correct class selection are the most important factors in a trademark application.'
  },
  {
    q: 'Is the logo included in trademark registration?',
    a: 'Yes, you can include your logo or tagline in your trademark registration. However, the design itself is not protected by trademark; for that, you need copyright registration.'
  },
  {
    q: 'Can I protect my domain name with trademark registration?',
    a: 'Yes, trademark registration can help protect your domain name from misuse.'
  },
  {
    q: 'Can I protect my business idea with a trademark?',
    a: 'No, trademarks only protect brand names, logos, and slogans. To protect an idea or invention, you need a patent.'
  },
  {
    q: 'Can I file a trademark in multiple classes?',
    a: 'Yes, you can file in multiple classes, but the government fee applies per class. Each additional class increases the cost.'
  },
  {
    q: 'What types of names or slogans cannot be trademarked?',
    a: 'You generally cannot trademark personal names, surnames, colors, smells, locations, or sounds. The name must be distinctive and not generic.'
  },
  {
    q: 'Can I transfer my trademark to another person or company?',
    a: 'Yes, trademarks can be sold or transferred, which is common during mergers and acquisitions.'
  },
  {
    q: 'Can I use my home address for trademark registration?',
    a: 'Yes, you can use your residential address for trademark registration. There are no restrictions.'
  },
  {
    q: 'How do I check the status of my trademark application online?',
    a: 'Visit the Indian Government Trademark Registry website, enter your class and trade name, and you can view the status of your application online.'
  }
];

function TrademarkFAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="divide-y divide-sky-200">
      {faqData.map((item, idx) => (
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

export default Trademark_Registration
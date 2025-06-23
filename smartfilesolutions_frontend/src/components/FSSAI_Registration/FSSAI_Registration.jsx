import React from 'react'

const FSSAI_Registration = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">FSSAI Registration | Food License | FSSAI License Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-2">
            Register your food business with ease through India's #1 trusted platform – <strong>Smart File Solutions</strong>. We help you get your FSSAI License at the lowest cost in just 3 easy steps.
          </p>
          <p className="text-sky-700 text-base md:text-lg text-center font-semibold mb-4">
            <span className="block">Govt Recognized Portal – Registration No: DIPP9122</span>
            <span className="block">Packages starting from just ₹1999/- (Best Price in India)</span>
          </p>
          <button
            className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>
      {/* What is FSSAI Full Form or Meaning? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is FSSAI Full Form or Meaning?</h2>
          <p className="text-neutral-700 text-base md:text-lg">Planning to start a food business? Then you must understand what FSSAI stands for. FSSAI stands for <strong>Food Safety and Standards Authority of India</strong>. Since 2006, all food-related laws and regulations in India have been governed under the FSSAI Act. The FSSAI ensures that all food businesses operate under proper safety standards. It sets food safety norms and reports directly to the Ministry of Health & Family Welfare, Government of India.</p>
        </div>
      </section>
      {/* What is FSSAI Registration or License? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is FSSAI Registration or License?</h2>
          <p className="text-neutral-700 text-base md:text-lg">FSSAI Registration is a 14-digit unique license number that is mandatory for all food businesses in India. This number must be printed on food packaging and labeling. Whether you're a trader, manufacturer, importer/exporter, dairy operator, or involved in food processing, packaging, or distribution — having an FSSAI License is compulsory to legally run your operations and ensure consumer trust.</p>
        </div>
      </section>
      {/* FSSAI Basic Registration Package Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">FSSAI Basic Registration Package – Only ₹1999/-</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center mb-4 font-semibold">What's Included:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-6 text-left w-full max-w-xl">
            <li>Complete Drafting and Filing of FSSAI Application</li>
            <li>Government Charges & Professional Fee Covered</li>
            <li>FSSAI Basic License for Businesses with Turnover up to ₹12 Lakhs</li>
            <li>Digital FSSAI Registration Certificate with 14-Digit License Number</li>
            <li>Bonus: 10+ Premium Legal Agreement Templates for Your Business</li>
          </ul>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* Book Free Consultation Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-[#f5f6fd] rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-800 mb-6 text-center">
            <span role="img" aria-label="calendar" className="mr-2">📅</span>
            Book Free Consultation Right Now
          </h2>
          <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:p-10 mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-1 text-center">FSSAI Registration – Smart File Solutions</h3>
            <p className="text-neutral-500 text-center mb-4 text-sm md:text-base">Simply fill in your details below and our experts will help you get your FSSAI License quickly and affordably!</p>
            <FSSAIConsultForm />
          </div>
        </div>
      </section>
      {/* Who Needs FSSAI Registration or License? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Who Needs FSSAI Registration or License?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">FSSAI Registration is mandatory for all types of food businesses—whether you're planning to start a food processing, manufacturing, packaging, or distribution unit. Regardless of turnover, you need to apply from day one to stay compliant. It offers several benefits:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Boosts customer trust by ensuring food safety</li>
            <li>Eliminates confusion from multiple legal compliances</li>
            <li>Encourages innovation and product credibility</li>
          </ul>
        </div>
      </section>
      {/* Types of FSSAI Registration / License */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Types of FSSAI Registration / License</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">There are 3 main categories of FSSAI License depending on your business turnover:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>FSSAI Basic Registration:</strong> Required for businesses with turnover below ₹12 Lakhs/year. Ideal for startups and small vendors.</li>
            <li><strong>FSSAI State License:</strong> For businesses with turnover between ₹12 Lakhs to ₹20 Crores/year.</li>
            <li><strong>FSSAI Central License:</strong> Required for import/export units or those with turnover above ₹20 Crores/year, or who supply to govt departments.</li>
          </ul>
        </div>
      </section>
      {/* About the Food and Safety Department */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">About the Food and Safety Department</h2>
          <p className="text-neutral-700 text-base md:text-lg">The Food and Safety Department, under FSSAI, develops and enforces rules related to food safety. It advises the central government, offers scientific guidance, and raises public awareness on food standards. The department is also responsible for collecting data on food consumption trends and ensuring food quality across the country.</p>
        </div>
      </section>
      {/* Documents Required for FSSAI Registration / Food License */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Required for FSSAI Registration / Food License</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">The documents required for FSSAI Registration depend on your business type, structure, and the kind of license you're applying for (Basic, State, or Central). Here's a breakdown:</p>

          <h3 className="text-lg font-semibold text-sky-600 mt-4 mb-2">Basic Personal Documents of the Applicant</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>PAN Card – Mandatory identity proof</li>
            <li>Any one ID Proof – Aadhaar Card / Voter ID / Driving License / Passport</li>
            <li>Passport Size Photograph</li>
          </ul>

          <h3 className="text-lg font-semibold text-sky-600 mt-4 mb-2">Documents for Business Premises</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Latest Utility Bill (Electricity/Water)</li>
            <li>Rent Agreement – If operating from a rented place</li>
            <li>Property Ownership Proof – If owned premises</li>
          </ul>
          <p className="text-neutral-700 text-sm mb-2"><strong>Note:</strong> Residential property is also acceptable if all above documents are provided.</p>

          <h3 className="text-lg font-semibold text-sky-600 mt-4 mb-2">Additional Documents for Basic FSSAI Registration</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Form-A – Duly filled and signed by Proprietor/Partners/Directors</li>
            <li>Declaration of Food Safety Management System (FSMS) on company letterhead</li>
            <li>Proof of income to establish annual turnover</li>
            <li>Nomination in Form-IX + Board Resolution copy</li>
            <li>Self-declaration by Director</li>
            <li>Affidavit on Non-Judicial Stamp Paper</li>
          </ul>

          <h3 className="text-lg font-semibold text-sky-600 mt-4 mb-2">Additional Documents for State/Central FSSAI License</h3>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>Form-B – Duly filled and signed</li>
            <li>List of Proprietors/Partners/Executive Members with contact details</li>
            <li>Layout Plan of Processing Unit (with installed capacity & horsepower)</li>
            <li>Company Constitution (MOA & AOA) / Partnership Deed</li>
            <li>Product Analysis Report (based on business activity)</li>
            <li>Food Safety Management System (FSMS) Plan/Certificate</li>
            <li>Declaration for FSMS on company letterhead</li>
            <li>Proof of Income for annual turnover verification</li>
            <li>Form-IX Nomination + Board Resolution copy</li>
            <li>Self-declaration by Director</li>
            <li>NOC from Local Authority</li>
            <li>Affidavit on Non-Judicial Stamp Paper</li>
            <li>List of Food Categories to be manufactured</li>
            <li>Photograph of Production Unit</li>
            <li>Any additional documents requested by the licensing authority</li>
          </ul>
          <p className="text-neutral-700 text-sm mt-2">Need more help? Contact us or visit our detailed FSSAI document guide.</p>
        </div>
      </section>
      {/* FSSAI Registration Fee or Cost */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is FSSAI Registration Fee or Cost?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">FSSAI Registration fees are divided into two parts: Government Fees and Professional Fees. The government fee is fixed and charged by the authority for application processing. Professional fees are charged by certified professionals like CAs or lawyers for preparing and filing your application. Below is the standard fee structure:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>FSSAI Basic Registration – ₹100/year</li>
            <li>FSSAI State License – ₹2,000 to ₹5,000/year</li>
            <li>FSSAI Central License – ₹7,500/year</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg mt-2">Want more details? Learn more about <strong>FSSAI Registration Fees</strong> on our complete pricing guide.</p>
        </div>
      </section>
      {/* FSSAI Registration Forms */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">FSSAI Registration Forms</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">FSSAI Registration mainly involves two forms depending on the type of license:</p>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Form A</strong> – Used for Basic FSSAI Registration. It contains information about the food business operator (FBO) and business activity.</li>
            <li><strong>Form B</strong> – Required for State FSSAI License Registration. It is a mandatory form along with supporting documents.</li>
          </ul>
        </div>
      </section>
      {/* How to Apply for FSSAI Registration? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">How to Apply for FSSAI Registration?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">FSSAI Registration can be applied online, but submission should be done through a certified professional. Here's how the process works:</p>
          <ol className="list-decimal pl-6 text-neutral-700 mb-2">
            <li>Fill out the customized FSSAI form and make online payment via card, net banking, UPI, etc.</li>
            <li>Receive confirmation and checklist on your email and SMS.</li>
            <li>Send the required scanned documents via email.</li>
            <li>Sit back and relax — our legal experts will process and submit your application to the FSSAI department.</li>
            <li>Your certificate will be delivered once approved.</li>
          </ol>
        </div>
      </section>
      {/* Validity of FSSAI License */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Validity of FSSAI License</h2>
          <p className="text-neutral-700 text-base md:text-lg">FSSAI License is typically issued for a validity period of 1 to 2 years. After the expiry, businesses need to renew their license. You can also verify the license details and expiration status online through the FSSAI portal by checking the 14-digit FSSAI number.</p>
        </div>
      </section>
      {/* Important Guidelines for Food License Registration */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Important Guidelines for Food License Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li>If your business operates in more than 10 states, you must obtain a Central License for the head office.</li>
            <li>Importers and exporters must apply for FSSAI License using the same address as their IEC (Import Export Code) and should obtain IEC before applying.</li>
            <li>All food product packaging must include the FSSAI logo and 14-digit license number.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

const FSSAIConsultForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    licenseType: '',
    business: ''
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
    if (!form.licenseType) errs.licenseType = 'Please select your type of license.';
    if (!form.business || form.business.length < 5) errs.business = 'Please describe your business (at least 5 characters).';
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
      const response = await fetch('https://formspree.io/f/mzzgjgab', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', whatsapp: '', licenseType: '', business: '' });
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

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your details have been submitted. Our team will contact you soon for your free FSSAI consultation.</div>;

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
        <label className="block font-medium text-neutral-700 mb-1">Email Id <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your valid email id"
          required
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your valid mobile number"
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
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Type of License <span className="text-red-500">*</span></label>
        <div className="flex flex-col gap-2 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="licenseType"
              value="Turnover Up to 12 lakh"
              checked={form.licenseType === 'Turnover Up to 12 lakh'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            Turnover Up to 12 lakh
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="licenseType"
              value="12 lakh to 20 Crore"
              checked={form.licenseType === '12 lakh to 20 Crore'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            12 lakh to 20 Crore
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="licenseType"
              value="20 Crore or More"
              checked={form.licenseType === '20 Crore or More'}
              onChange={handleChange}
              className="accent-sky-500"
              required
            />
            20 Crore or More
          </label>
        </div>
        {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">About your Business <span className="text-red-500">*</span></label>
        <textarea
          name="business"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Let us know your nature of business"
          required
          value={form.business}
          onChange={handleChange}
          rows={3}
        />
        {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
      >
        {isSubmitting ? 'Submitting...' : 'Book Now'}
      </button>
    </form>
  );
};

export default FSSAI_Registration
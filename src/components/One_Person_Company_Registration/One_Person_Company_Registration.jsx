import React from 'react'

const One_Person_Company_Registration = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">One Person Company Registration</h1>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl mb-4">
            <strong>Smart File Solutions</strong> is India's No. 1 trusted platform to get your One Person Company (OPC) registered quickly and affordably.
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
        {/* What is the Meaning of One Person Company (OPC)? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is the Meaning of One Person Company (OPC)?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">A One Person Company (OPC) is a company that has only one person as its member and shareholder. This concept was first introduced in India under the Companies Act, 2013, enabling a single entrepreneur to operate a corporate entity with limited liability.</p>
          <p className="text-neutral-700 text-base md:text-lg mb-2">Prior to this, under the Companies Act, 1956, a minimum of two members were required to form a Private or Public Company. With the advent of OPC, small entrepreneurs now have the opportunity to enjoy the legal benefits of corporate structure while operating solo.</p>
          <p className="text-neutral-700 text-base md:text-lg">The single member of an OPC serves as both the promoter and director, and the company is recognized as a separate legal entity. This structure ensures limited legal and financial liability for the individual.</p>
        </div>
        {/* What is One Person Company Registration? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is One Person Company Registration?</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-2">OPC Registration allows a single person to incorporate a private limited company with limited liability, without needing partners. This structure solves the limitations of sole proprietorships, which lack separate legal identity and expose the owner to unlimited liability.</p>
          <p className="text-neutral-700 text-base md:text-lg">Under the OPC model, only one director is required, who can also sign financial statements and board reports. Though classified as a private company, OPCs enjoy many compliance relaxations and exemptions under the Companies Act, making them ideal for solo entrepreneurs.</p>
        </div>
      </section>
      {/* OPC Registration Fees Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border-2 border-sky-100 p-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-3 text-center">OPC Registration Fees</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-4 text-center">At <strong>Smart File Solutions</strong>, we offer an affordable and all-inclusive package tailored for startups to register their One Person Company (OPC) in India quickly and efficiently.</p>
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-start mb-6">
            {/* Package Price */}
            <div className="flex-1 bg-sky-50 rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-center mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Package Price:</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-2">
                <li><strong>₹9,999/- INR</strong> (Excluding GST)</li>
                <li><strong>GST Credit</strong> available for eligible businesses</li>
              </ul>
            </div>
            {/* Package Includes */}
            <div className="flex-1 bg-sky-50 rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-start">
              <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Package Includes:</h3>
              <ul className="list-disc pl-6 text-neutral-700 mb-2">
                <li>1 Director's <strong>DIN (Director Identification Number)</strong> & <strong>DSC (Digital Signature Certificate)</strong></li>
                <li>Company Name Approval + <strong>MOA & AOA</strong> Drafting and Printing</li>
                <li><strong>Certificate of Incorporation</strong> with PAN & TAN of the Company</li>
              </ul>
            </div>
          </div>
          {/* Bonus Section */}
          <div className="w-full bg-sky-50 rounded-xl border-2 border-sky-200 shadow p-6 flex flex-col items-start mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2">Bonus with Every Registration:</h3>
            <ul className="list-disc pl-6 text-neutral-700 mb-2">
              <li><strong>Free MSME Registration Certificate</strong> to claim various government benefits</li>
              <li><strong>Access to 10+ Premium Legal Agreement Templates</strong> for business use</li>
            </ul>
            <h4 className="text-base md:text-lg font-semibold text-red-600 mb-1 mt-2">🔥 Limited-Time Offer:</h4>
            <p className="text-neutral-700 text-base md:text-lg font-semibold"><strong>Get FREE GST Registration</strong> when you complete your OPC Registration with Instant Checkout!</p>
          </div>
          <button
            className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-10 py-3 rounded-lg shadow transition-all duration-200 text-lg"
            onClick={() => { /* Add scroll or action here */ }}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* OPC Registration Form Section */}
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
            <OPCRegForm />
          </div>
        </div>
      </section>
      {/* OPC Info & Process Sections */}
      <section className="py-10 px-4 flex flex-col gap-8 items-center">
        {/* OPC Government Registration Cost */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is the OPC Government Registration Cost?</h2>
          <p className="text-neutral-700 text-base md:text-lg">For an OPC with nominal share capital exceeding ₹10,00,000, the government charges a base fee of ₹2,000, plus ₹200 for every ₹10,000 of capital beyond ₹10,00,000 up to ₹50,00,000. The complete registration process typically takes around 20–30 days. Once approved, you will receive a Certificate of Incorporation.</p>
        </div>
        {/* What Does OPC Stand For? */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What Does OPC Stand For?</h2>
          <p className="text-neutral-700 text-base md:text-lg">OPC stands for <strong>One Person Company</strong>. It is a business structure introduced under the Companies Act, 2013 that allows a single individual to incorporate a company and enjoy corporate benefits with limited liability. OPC is the short form for One Person Company.</p>
        </div>
        {/* Minimum Requirements for OPC Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Minimum Requirements for OPC Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Minimum 1 Shareholder</li>
            <li>Minimum 1 Director (can be the same as the shareholder)</li>
            <li>Minimum 1 Nominee</li>
            <li>Shareholder and nominee must be Indian residents</li>
            <li>Minimum authorized capital: ₹1 Lakh</li>
            <li>Digital Signature Certificate (DSC) for the director</li>
            <li>Director Identification Number (DIN)</li>
          </ul>
        </div>
        {/* Nominee Requirements for OPC */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Nominee Requirements for OPC</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>The nominee must consent to be named in the Memorandum of Association.</li>
            <li>Written consent must be submitted during incorporation.</li>
            <li>Nominee should be a natural person, Indian citizen, and resident (not a minor).</li>
            <li>The member can change the nominee anytime with proper notice and consent.</li>
            <li>Withdrawal of nomination requires replacement within 15 days.</li>
            <li>The company must inform ROC within 30 days of nominee changes.</li>
          </ul>
        </div>
        {/* Documents Required for OPC Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Documents Required for OPC Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Copy of PAN/Voter ID/Passport/Driver's License</li>
            <li>Recent utility bill or bank statement as address proof</li>
            <li>Passport-size photograph of the director</li>
            <li>Scanned signature (autograph)</li>
            <li>No Objection Certificate from property owner</li>
            <li>Rental agreement or sale deed of registered office address</li>
          </ul>
        </div>
        {/* OPC Registration Process */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">OPC Registration Process</h2>
          <ol className="list-decimal pl-6 text-neutral-700">
            <li>Obtain DSC and DIN for the director</li>
            <li>Reserve your company name</li>
            <li>Get nominee consent in the prescribed form</li>
            <li>File incorporation documents including MOA & AOA</li>
            <li>Receive Certificate of Incorporation from ROC</li>
            <li>Apply for PAN and open a bank account in the company's name</li>
          </ol>
        </div>
        {/* Advantages of OPC Registration */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Advantages of OPC Registration</h2>
          <ul className="list-disc pl-6 text-neutral-700">
            <li>Only one person required to start</li>
            <li>Separate legal entity from the owner</li>
            <li>Limited liability protection</li>
            <li>Run like a Private Limited Company</li>
            <li>Nominee takes over in case of death/incapacity</li>
            <li>Cannot incorporate more than one OPC per individual</li>
            <li>Loses OPC status if capital exceeds ₹50 Lakhs or turnover crosses ₹2 Crore</li>
            <li>Minors cannot be members or nominees</li>
          </ul>
        </div>
        {/* Choosing a Name for Your OPC */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Choosing a Name for Your OPC</h2>
          <p className="text-neutral-700 text-base md:text-lg">You can select and reserve your company name while filing the incorporation form or through the <strong>RUN (Reserve Unique Name)</strong> service available on the Ministry of Corporate Affairs (MCA) portal. Smart File Solutions can assist you in choosing a legally valid and professional name.</p>
        </div>
        {/* OPC Registration Timeline */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">OPC Registration Timeline</h2>
          <p className="text-neutral-700 text-base md:text-lg">The complete registration process generally takes between <strong>10 to 15 working days</strong>, depending on document verification and government processing speed.</p>
        </div>
        {/* OPC Taxation */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">OPC Taxation</h2>
          <p className="text-neutral-700 text-base md:text-lg">As per the Income Tax Act, 1961, OPCs are taxed as Private Limited Companies at a flat rate of <strong>30%</strong> on their annual profits. No special tax slabs apply to OPCs.</p>
        </div>
        {/* Annual Compliance for One Person Company */}
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Annual Compliance for One Person Company</h2>
          <ul className="list-disc pl-6 text-neutral-700 mb-2">
            <li><strong>Form AOC-4</strong> for filing financial statements</li>
            <li><strong>Form MGT-7</strong> for filing annual returns</li>
            <li>Minimum 2 board meetings per year</li>
          </ul>
          <p className="text-neutral-700 text-base md:text-lg">For more detailed compliance guidance, contact Smart File Solutions for expert support on <strong>OPC Annual Compliance</strong>.</p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-3xl bg-sky-50 rounded-2xl shadow p-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-sky-700 mb-6 text-center">Frequently Asked Questions about One Person Company (OPC) Registration</h2>
          <OPCFAQ />
        </div>
      </section>
    </div>
  )
}

// OPC Registration Form Component
const OPCRegForm = () => {
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
const opcFaqData = [
  {
    q: 'Who can become a partner in a One Person Company (OPC)?',
    a: 'Any individual can become a member of an OPC unless they are of unsound mind, insolvent, or have insolvency proceedings pending.'
  },
  {
    q: 'Can an NRI (Non-Resident Indian) start an OPC?',
    a: 'Only a natural person who is an Indian citizen and resident in India can incorporate an OPC or be a nominee. The director or nominee must be over 18 years of age.'
  },
  {
    q: 'What is OPC registration?',
    a: 'OPC registration is the legal process of incorporating a One Person Company. It provides legal proof and makes your OPC a recognized entity. The process is simple and can be completed online.'
  },
  {
    q: 'What is the minimum number of partners in an OPC?',
    a: 'Only one person is required to start an OPC.'
  },
  {
    q: 'Why do individuals prefer OPC registration?',
    a: 'OPC registration is preferred for its low compliance, easy incorporation, lower fees, body corporate status, and limited liability.'
  },
  {
    q: 'Is OPC registration cheaper than a Private Limited Company?',
    a: 'Yes, OPC registration generally involves lower costs and fewer compliances compared to a Private Limited Company.'
  },
  {
    q: 'What are MOA and AOA?',
    a: 'MOA stands for Memorandum of Association and AOA stands for Articles of Association. These are key documents that define the company\'s objectives and rules.'
  },
  {
    q: 'Who can incorporate a One Person Company?',
    a: 'Only a natural person who is an Indian citizen and resident in India can incorporate an OPC and be a nominee.'
  },
  {
    q: 'Can a person form more than one OPC?',
    a: 'No, a person cannot incorporate more than one OPC or be a nominee in more than one OPC.'
  },
  {
    q: 'Can a minor be a member or nominee of an OPC?',
    a: 'No, minors cannot be members or nominees of an OPC or hold shares with beneficial interest.'
  },
  {
    q: 'Can an OPC carry out NBFC activities?',
    a: 'No, OPCs cannot carry out Non-Banking Financial Investment activities, including investment in securities of other companies.'
  },
  {
    q: 'Is OPC suitable for medium and large businesses?',
    a: 'OPC is best suited for small businesses. If paid-up capital exceeds ₹50 lakhs or turnover exceeds ₹2 crores, OPC must convert to a Private Limited Company.'
  },
  {
    q: 'Is there a time limit for voluntary conversion of OPC?',
    a: 'OPC cannot be converted voluntarily into another company type within 2 years of incorporation, unless it crosses the capital or turnover threshold.'
  },
  {
    q: 'Is it mandatory to nominate a person during OPC incorporation?',
    a: 'Yes, the sole member must nominate a person (with written consent) who will become the member in case of death or incapacity.'
  },
  {
    q: 'Is it mandatory to mention the nominee\'s name in the MOA?',
    a: 'Yes, the nominee\'s name must be mentioned in the Memorandum of Association.'
  },
  {
    q: 'Is it mandatory to mention "OPC" in all documents?',
    a: 'Yes, "OPC" must be mentioned in brackets below the company name wherever it is printed or displayed.'
  },
  {
    q: 'Is it mandatory to inform the company if a nominee withdraws consent?',
    a: 'Yes, the nominee must give written notice to the member and the company if they wish to withdraw consent.'
  },
  {
    q: 'How long does the member have to nominate a new nominee after withdrawal?',
    a: 'The member must nominate another person within 15 days of receiving the withdrawal notice and inform the company in writing.'
  },
  {
    q: 'What is the time limit for informing the Registrar about nominee changes?',
    a: 'The company must inform the Registrar within 30 days of any nominee withdrawal or appointment.'
  },
  {
    q: 'What is the procedure for issuing a share certificate?',
    a: 'Share certificates must be issued under the company seal and signed by a director or authorized person and the Company Secretary (if any).'
  },
  {
    q: 'Who becomes the member of OPC in case of death or incapacity?',
    a: 'The nominee becomes the member. The new member must nominate another person within 15 days, and the company must inform the Registrar within 30 days.'
  },
  {
    q: 'What are the penalties for non-compliance?',
    a: 'Non-compliance can result in fines up to ₹10,000 and an additional ₹1,000 per day for continuing violations.'
  },
  {
    q: 'When must an OPC convert to a Private or Public Company?',
    a: 'If paid-up capital exceeds ₹50 lakhs or turnover exceeds ₹2 crores, the OPC must convert to a Private or Public Company.'
  },
  {
    q: 'Is there a time limit for conversion after exceeding thresholds?',
    a: 'Yes, conversion must be completed within 6 months of exceeding the capital or turnover threshold.'
  },
  {
    q: 'Is it mandatory to alter MOA and AOA for conversion?',
    a: 'Yes, the company must alter its MOA and AOA by resolution to give effect to the conversion.'
  },
  {
    q: 'Is prior intimation to the Registrar required for ceasing OPC status?',
    a: 'Yes, the OPC must notify the Registrar within 60 days of becoming ineligible to continue as an OPC.'
  },
  {
    q: 'Is it mandatory to get a PCS signature on the annual return?',
    a: 'The annual return must be signed by the Company Secretary or, if there is none, by a director.'
  },
  {
    q: 'Are general meeting provisions applicable to OPCs?',
    a: 'No, provisions relating to Board Meetings, AGMs, and EGMs do not apply to OPCs.'
  },
  {
    q: 'Is it mandatory to maintain a minutes book for OPC?',
    a: 'Yes, resolutions must be entered in the minutes book and signed and dated by the director.'
  },
  {
    q: 'Is it mandatory to file financial statements?',
    a: 'Yes, financial statements must be filed within 180 days of the financial year end.'
  },
  {
    q: 'Is it mandatory to record every contract in the minutes?',
    a: 'Contracts with the sole member/director must be recorded in the minutes unless in the ordinary course of business.'
  },
  {
    q: 'Is it mandatory to inform the Registrar about every contract?',
    a: 'Yes, the company must inform the Registrar within 15 days of Board approval of such contracts.'
  },
  {
    q: 'Is a cash flow statement mandatory for OPCs?',
    a: 'No, cash flow statements are not mandatory for OPCs.'
  }
];

function OPCFAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="divide-y divide-sky-200">
      {opcFaqData.map((item, idx) => (
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

export default One_Person_Company_Registration
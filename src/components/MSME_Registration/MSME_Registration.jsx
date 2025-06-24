import React, { useEffect } from 'react'

const MSME_Registration = () => {
  const formRef = React.useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleGetStarted = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">MSME Registration Online</h2>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">Apply for your MSME (Udyam) certificate online from anywhere in India with help from SmartFile Solutions.</p>
          <p className="text-sky-700 text-lg md:text-xl font-bold text-center mt-2">We are a government-recognized platform and have helped over 1 lakh businesses get their MSME certificates nationwide.</p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* What is MSME Registration? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">What is MSME Registration?</h2>
          <p className="text-neutral-700 mb-2 text-center">MSME Registration is a way to officially recognize small and medium businesses in India. These businesses are the backbone of our economy, especially in a country where agriculture and local industries play a big role.</p>
          <p className="text-neutral-700 mb-2 text-center">Every state in India has its own special industries and traditional trades. Thanks to our country's natural resources and different climates, many local businesses thrive. MSME Registration helps these businesses get formal recognition and access to government support.</p>
          <p className="text-neutral-700 text-center">This certificate is given by state government departments under the MSME Act. In 2015, the process was updated and is now called Udyog Aadhaar Registration.</p>
        </div>
      </section>
      {/* Why is MSME Registration Important? */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Why is MSME Registration Important for Small Businesses?</h2>
          <p className="text-neutral-700 mb-2 text-center">Getting MSME registration helps small businesses become more transparent and trustworthy. The Indian government supports these businesses through the MSMED Act by offering MSME certification.</p>
          <p className="text-neutral-700 text-center">With MSME registration, you can access government schemes, subsidies, tax relief, and easier loans. It's not just for manufacturers—service providers, sole proprietors, partnerships, LLPs, and private limited companies can all apply and benefit.</p>
        </div>
      </section>
      {/* Classification under MSME Registration Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">Classification under MSME Registration</h2>
          <p className="text-neutral-700 mb-2 text-center">Before you apply for MSME registration, it's important to know which category your business falls under. Choosing the right category helps you avoid delays or mistakes. The Indian government has set clear rules based on how much you invest in your business.</p>
          <p className="text-neutral-700 mb-2 text-center"><strong>Micro Enterprises:</strong> For manufacturers, investment should not be more than ₹25 lakhs. For service businesses, not more than ₹10 lakhs.</p>
          <p className="text-neutral-700 mb-2 text-center"><strong>Small Enterprises:</strong> For manufacturing, up to ₹5 crores. For services, up to ₹2 crores.</p>
          <p className="text-neutral-700 mb-4 text-center"><strong>Medium Enterprises:</strong> For manufacturing, up to ₹10 crores. For services, up to ₹5 crores.</p>
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={handleGetStarted}
          >
            Book Now
          </button>
        </div>
      </section>
      {/* MSME Registration Form Section */}
      <section ref={formRef} className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border-2 border-sky-100 p-6 md:p-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2 text-center">MSME Registration Application</h2>
          <p className="text-neutral-700 text-center mb-6">Fill in your details below to apply for MSME (Udyam) Registration. All fields are required.</p>
          <MSMEForm />
        </div>
      </section>
      {/* MSME Registration Process Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3 text-center">MSME Registration Process</h2>
          <p className="text-neutral-700 mb-2 text-center">You can register your business as an MSME completely online. It's best to get help from a professional to fill out the application correctly and get approval quickly. While not mandatory, MSME registration is highly recommended to access government support and benefits.</p>
          <p className="text-neutral-700 mb-2 text-center">Many small and medium businesses in India are registering to get official recognition and advantages. The process involves submitting your business and personal details, along with the required documents.</p>
        </div>
      </section>
      {/* Details Needed for MSME Registration Section */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-sky-700 mb-2">Details Needed for MSME Registration</h3>
          <ul className="list-disc pl-6 text-neutral-700 text-sm mb-2 space-y-1">
            <li>Aadhaar Number</li>
            <li>Applicant's Name</li>
            <li>Social Category</li>
            <li>Gender</li>
            <li>Business/Enterprise Name</li>
            <li>Type of Organization</li>
            <li>PAN Number</li>
            <li>Plant Location</li>
            <li>Office Address</li>
            <li>Mobile Number</li>
            <li>Email ID</li>
            <li>Business Start Date</li>
            <li>Bank Account Number</li>
            <li>Bank IFSC Code</li>
            <li>Main Business Activity</li>
            <li>NIC 2-Digit Code</li>
            <li>Extra Business Details</li>
            <li>Number of Employees</li>
            <li>Investment in Plant & Machinery/Equipment</li>
            <li>Scanned Aadhaar Card</li>
          </ul>
          <p className="text-neutral-700 text-sm mb-2">Registration usually takes 2-3 business days.</p>
        </div>
      </section>
      {/* Benefits of MSME Registration Online Section */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h2 className="text-lg font-bold text-sky-700 mb-2">Benefits of MSME Registration Online</h2>
          <p className="text-neutral-700 mb-2">Registering as an MSME gives you access to many government schemes and support. Your business gets listed in central and state programs, increasing your visibility and trust. Key benefits include:</p>
          <ul className="list-disc pl-6 text-neutral-700 text-sm space-y-1 mb-2">
            <li><strong>Easy Bank Loans:</strong> Get collateral-free loans from banks supported by the government.</li>
            <li><strong>Reservation Benefits:</strong> More opportunities for production and jobs under special government schemes.</li>
            <li><strong>Open Bank Accounts & Licenses:</strong> Use your MSME certificate to open current accounts or get licenses like GST.</li>
            <li><strong>Trade Fair Participation:</strong> Get support to showcase your business in fairs.</li>
            <li><strong>Octroi Refunds:</strong> Refunds on octroi charges paid on goods/services.</li>
            <li><strong>Stamp Duty Waiver:</strong> Exemptions on stamp duty, even outside SEZs/IT parks.</li>
            <li><strong>Income Tax Exemptions:</strong> Tax relief for innovative businesses, especially under Startup India.</li>
            <li><strong>Barcode Subsidy:</strong> Subsidy for registering barcodes.</li>
            <li><strong>Credit Rating Subsidy:</strong> Support for business credit ratings.</li>
            <li><strong>Industrial Promotion Subsidy:</strong> Financial incentives for growth.</li>
            <li><strong>Protection from Late Payments:</strong> Legal help for delayed payments.</li>
            <li><strong>Reduced Interest Rates:</strong> Lower loan rates for MSMEs.</li>
            <li><strong>Capital Subsidy:</strong> 15% subsidy on plant/machinery purchases.</li>
            <li><strong>Security Deposit Waiver:</strong> No security deposit for registered MSMEs.</li>
            <li><strong>Electricity Concessions:</strong> Discounts on electricity bills.</li>
            <li><strong>ISO Certification Subsidy:</strong> Support for getting ISO certificates.</li>
            <li><strong>Government Tender Preference:</strong> Priority in government tenders.</li>
            <li><strong>Patent Registration Subsidy:</strong> 50% fee subsidy for patents.</li>
          </ul>
        </div>
      </section>
      {/* Where is MSME Registered Section */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-sky-700 mb-2">Where is MSME Registered?</h3>
          <p className="text-neutral-700 text-sm mb-2">MSME registration is done online and approved by your state's District Industries Centre (DIC). You can contact your nearest DIC to get MSME benefits.</p>
        </div>
      </section>
      {/* Documents Needed for MSME Registration Section */}
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-2xl bg-sky-50 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-bold text-sky-700 mb-2">Documents Needed for MSME Registration</h3>
          <ul className="list-disc pl-6 text-neutral-700 text-sm mb-2 space-y-1">
            <li>Aadhaar Card (required)</li>
            <li>Mobile number linked with Aadhaar</li>
            <li>PAN card if Aadhaar is not linked</li>
          </ul>
          <p className="text-neutral-700 text-sm">Note: For companies/LLPs/partnerships, a partner's Aadhaar can be used since entities don't have Aadhaar.</p>
        </div>
      </section>
    </div>
  )
}

// MSMEForm component
const MSMEForm = () => {
  const [form, setForm] = React.useState({
    aadhaar: '',
    aadhaarName: '',
    pan: '',
    email: '',
    mobile: '',
    category: '',
    gender: '',
    firmName: '',
    entityType: '',
    address: '',
    startDate: '',
    businessNature: '',
    employees: '',
    investment: '',
    account: '',
    ifsc: '',
    terms: false
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [showTerms, setShowTerms] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!/^\d{12}$/.test(form.aadhaar)) errs.aadhaar = 'Enter a valid 12-digit Aadhaar number.';
    if (!form.aadhaarName.trim()) errs.aadhaarName = 'Enter the name as on Aadhaar.';
    if (!/^([A-Z]{5}[0-9]{4}[A-Z])$/.test(form.pan)) errs.pan = 'Enter a valid PAN (e.g., ABCDE1234F).';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!/^\d{10}$/.test(form.mobile)) errs.mobile = 'Enter a valid 10-digit mobile number.';
    if (!form.category) errs.category = 'Select your social category.';
    if (!form.gender) errs.gender = 'Select your gender.';
    if (!form.firmName.trim()) errs.firmName = 'Enter your firm or shop name.';
    if (!form.entityType) errs.entityType = 'Select your type of entity.';
    if (!form.address.trim()) errs.address = 'Enter your business address.';
    if (!form.startDate) errs.startDate = 'Enter your business start date.';
    if (!form.businessNature.trim()) errs.businessNature = 'Describe your business.';
    if (!/^\d+$/.test(form.employees)) errs.employees = 'Enter number of employees (digits only).';
    if (!form.investment.trim()) errs.investment = 'Enter your business investment.';
    if (!/^\d+$/.test(form.account)) errs.account = 'Enter a valid account number (digits only).';
    if (!/^([A-Z]{4}0\d{6})$/.test(form.ifsc)) errs.ifsc = 'Enter a valid IFSC code (e.g., SBIN0001234).';
    if (!form.terms) errs.terms = 'You must agree to the terms.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'pan' ? value.toUpperCase() : (type === 'checkbox' ? checked : value)
    }));
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
      const response = await fetch('https://formspree.io/f/xvgrwrqq', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({
          aadhaar: '', aadhaarName: '', pan: '', email: '', mobile: '', category: '', gender: '', firmName: '', entityType: '', address: '', startDate: '', businessNature: '', employees: '', investment: '', account: '', ifsc: '', terms: false
        });
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

  return (
    <>
      {success && (
        <div className="text-green-600 font-semibold text-center py-6">
          Thank you! Your MSME registration details have been submitted. Our team will contact you soon.
        </div>
      )}
      <form className="w-full max-w-lg mx-auto space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Aadhaar Card No <span className="text-red-500">*</span></label>
          <input type="text" name="aadhaar" maxLength={12} className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Valid Aadhaar Number" value={form.aadhaar} onChange={handleChange} required />
          {errors.aadhaar && <p className="text-red-500 text-sm mt-1">{errors.aadhaar}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Aadhaar Card Name <span className="text-red-500">*</span></label>
          <input type="text" name="aadhaarName" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Full Name as on Aadhaar" value={form.aadhaarName} onChange={handleChange} required />
          {errors.aadhaarName && <p className="text-red-500 text-sm mt-1">{errors.aadhaarName}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">PAN Number <span className="text-red-500">*</span></label>
          <input type="text" name="pan" maxLength={10} className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 uppercase" placeholder="PAN Number (e.g., ABCDE1234F)" value={form.pan} onChange={handleChange} required />
          {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input type="email" name="email" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Valid Email" value={form.email} onChange={handleChange} required />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
          <input type="text" name="mobile" maxLength={10} className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="10-digit Mobile Number" value={form.mobile} onChange={handleChange} required />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Social Category <span className="text-red-500">*</span></label>
          <select name="category" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" value={form.category} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="General">General</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Gender <span className="text-red-500">*</span></label>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Male" checked={form.gender === 'Male'} onChange={handleChange} required className="accent-sky-500" /> Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="Female" checked={form.gender === 'Female'} onChange={handleChange} required className="accent-sky-500" /> Female
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Firm/Shop Name <span className="text-red-500">*</span></label>
          <input type="text" name="firmName" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="e.g., Reliance Industries" value={form.firmName} onChange={handleChange} required />
          {errors.firmName && <p className="text-red-500 text-sm mt-1">{errors.firmName}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Type of Entity <span className="text-red-500">*</span></label>
          <select name="entityType" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" value={form.entityType} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Partnership">Partnership</option>
            <option value="LLP">LLP</option>
            <option value="Pvt Ltd Co">Pvt Ltd Co</option>
            <option value="Other">Other</option>
          </select>
          {errors.entityType && <p className="text-red-500 text-sm mt-1">{errors.entityType}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Business Address <span className="text-red-500">*</span></label>
          <textarea name="address" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Full address with pin code" value={form.address} onChange={handleChange} required />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Date of Starting Business <span className="text-red-500">*</span></label>
          <input type="date" name="startDate" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" value={form.startDate} onChange={handleChange} required />
          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Nature of Business <span className="text-red-500">*</span></label>
          <input type="text" name="businessNature" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Type of business, products, or services" value={form.businessNature} onChange={handleChange} required />
          {errors.businessNature && <p className="text-red-500 text-sm mt-1">{errors.businessNature}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">No. of Employees <span className="text-red-500">*</span></label>
          <input type="number" name="employees" min={1} className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="e.g., 10" value={form.employees} onChange={handleChange} required />
          {errors.employees && <p className="text-red-500 text-sm mt-1">{errors.employees}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Investment in Business <span className="text-red-500">*</span></label>
          <input type="text" name="investment" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="e.g., 1 lakh" value={form.investment} onChange={handleChange} required />
          {errors.investment && <p className="text-red-500 text-sm mt-1">{errors.investment}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">Account Number <span className="text-red-500">*</span></label>
          <input type="text" name="account" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your bank account number" value={form.account} onChange={handleChange} required />
          {errors.account && <p className="text-red-500 text-sm mt-1">{errors.account}</p>}
        </div>
        <div>
          <label className="block font-medium text-neutral-700 mb-1">IFSC Code <span className="text-red-500">*</span></label>
          <input type="text" name="ifsc" className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 uppercase" placeholder="e.g., SBIN0001234" value={form.ifsc} onChange={handleChange} required />
          {errors.ifsc && <p className="text-red-500 text-sm mt-1">{errors.ifsc}</p>}
        </div>
        <div className="flex items-start gap-2">
          <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} required className="accent-sky-500 mt-1" />
          <span className="text-neutral-700 text-sm">
            I agree with the <button type="button" className="text-sky-600 underline" onClick={() => setShowTerms((v) => !v)}>Terms and Conditions</button> and confirm that the information provided is correct.
          </span>
        </div>
        {showTerms && (
          <div className="bg-white border border-sky-200 rounded-lg shadow p-4 mt-2 mb-2">
            <button className="absolute top-2 right-3 text-xl text-neutral-500 hover:text-sky-600" style={{ position: 'static' }} onClick={() => setShowTerms(false)} aria-label="Close">&times;</button>
            <h3 className="text-base font-bold text-sky-700 mb-2 text-center">Terms and Conditions</h3>
            <ul className="text-neutral-700 text-sm space-y-1">
              <li>✓ I understand that MyUdyogAadhar is a private consultancy service provider for MSME/Udyog Aadhar Registration and not a government organization.</li>
              <li>✓ I give consent to the MyUdyogAadhar team to handle and submit my application to the concerned government department or portal on my behalf.</li>
              <li>✓ I acknowledge that there is no government fee for MSME registration, and MyUdyogAadhar charges a professional or consultancy fee for processing my application.</li>
            </ul>
          </div>
        )}
        {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
        <button type="submit" disabled={isSubmitting} className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </form>
    </>
  );
};

export default MSME_Registration
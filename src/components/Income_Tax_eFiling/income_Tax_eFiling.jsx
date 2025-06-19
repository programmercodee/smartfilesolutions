import React from 'react'
import { FaFileInvoiceDollar } from 'react-icons/fa';

const Income_Tax_eFiling = () => {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-2xl flex flex-col items-center rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <div className="flex items-center justify-center mb-4">
            <FaFileInvoiceDollar className="text-sky-500 w-14 h-14 md:w-20 md:h-20" />
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-sky-700 mb-3 text-center">Income Tax eFiling</h1>
          <p className="text-neutral-700 text-base md:text-lg text-center max-w-xl">
            File your ITR online easily with India's leading tax consultants — fast, reliable, and budget-friendly.
          </p>
          <button
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add navigation or action here */ }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-8 px-4 max-w-4xl mx-auto space-y-8">
        {/* Introduction to Income Tax */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">Introduction to Income Tax</h2>
          <p className="text-neutral-700 mb-3">
            In India, taxation is broadly categorized into two types: direct and indirect taxes.
            Direct tax is imposed directly on an individual's income — for instance, income tax.
            On the other hand, indirect tax is levied on the consumption of goods and services,
            such as GST (Goods and Services Tax) and service tax.
          </p>
          <p className="text-neutral-700">
            As per the Income Tax Act, 1961, anyone earning income in India is liable to pay income tax.
            Income is classified under five major heads: Salary, House Property, Capital Gains,
            Business or Profession, and Other Sources. The law applies to individuals, Hindu Undivided Families (HUFs),
            associations of persons (AOPs), bodies of individuals (BOIs), firms, and companies.
          </p>
        </div>

        {/* What is an Income Tax Return (ITR)? */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is an Income Tax Return (ITR)?</h2>
          <p className="text-neutral-700 mb-3">
            An Income Tax Return is a document filed by taxpayers—be it individuals, firms, or HUFs—declaring their income,
            applicable deductions and exemptions, and the total tax liability. It also shows the amount of tax already paid by the taxpayer.
          </p>
          <p className="text-neutral-700">
            ITR is submitted at the end of each financial year and contains comprehensive financial data to ensure accurate tax calculation and compliance.
          </p>
        </div>

        {/* What is Income Tax e-Filing? */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-3">What is Income Tax e-Filing?</h2>
          <p className="text-neutral-700 mb-3">
            Income tax returns can be filed either online or offline. However, as per government regulations,
            from April 1, 2022, e-filing (online method) has become mandatory for most taxpayers.
            The offline mode is no longer applicable.
          </p>
          <p className="text-neutral-700 mb-2">ITR e-Filing is mandatory in the following scenarios:</p>
          <ul className="list-disc pl-6 text-neutral-700 space-y-1">
            <li>Your taxable income exceeds ₹2.5 lakh in a financial year</li>
            <li>You wish to claim a TDS refund</li>
            <li>You want to carry forward previous years' losses</li>
            <li>Your foreign travel expenses exceed ₹2 lakh in a year</li>
            <li>Your annual electricity bill exceeds ₹1 lakh</li>
            <li>Your business turnover exceeds ₹60 lakh annually</li>
            <li>Your TDS deduction exceeds ₹25,000 in a year</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-50 py-12 px-4">
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-sky-600 mb-6">Frequently Asked Questions (Income Tax in India)</h2>
          <div className="space-y-4">
            <FAQItem question="Who needs to file an Income Tax Return (ITR) in India?" answer="Any individual whose total income exceeds the basic exemption limit (₹2.5 lakh for most individuals) in a financial year must file an ITR. Other cases include those who want to claim a refund, carry forward losses, or have foreign assets." />
            <FAQItem question="What documents are required for e-filing ITR?" answer="Common documents include PAN, Aadhaar, Form 16, salary slips, bank statements, TDS certificates, investment proofs, and details of other income (like rent, capital gains, etc.)." />
            <FAQItem question="What is Form 16?" answer="Form 16 is a certificate issued by an employer showing the salary paid and TDS deducted during the financial year. It is essential for salaried individuals while filing ITR." />
            <FAQItem question="What happens if I miss the ITR filing deadline?" answer="You can file a belated return with a late fee. However, you may lose certain benefits like carrying forward losses, and interest/penalties may apply." />
            <FAQItem question="Is it mandatory to link Aadhaar with PAN for e-filing?" answer="Yes, linking Aadhaar with PAN is mandatory for e-filing your income tax return in India." />
            <FAQItem question="Can I revise my ITR after filing?" answer="Yes, if you discover any mistake after filing, you can revise your ITR before the end of the relevant assessment year." />
            <FAQItem question="How do I check my ITR status after filing?" answer="You can check your ITR status online by logging into the Income Tax e-filing portal using your PAN and password." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-3 text-center">Income Tax Return Filing Charges</h2>
          <p className="text-neutral-700 text-base md:text-lg mb-6 text-center">
            Choose the right ITR filing plan based on your income type. All plans are handled by professional tax consultants to ensure accurate and timely submission.
          </p>
          <ul className="w-full mb-6 space-y-2 text-neutral-800 text-base md:text-lg">
            <li><span className="font-semibold">ITR-1</span> (Salary + Other Income) – <span className="text-sky-600 font-bold">₹1,499</span></li>
            <li><span className="font-semibold">ITR-4</span> (Business + Other Income) – <span className="text-sky-600 font-bold">₹1,499</span></li>
            <li><span className="font-semibold">ITR-2</span> (Salary + Stock Market + Other Income) – <span className="text-sky-600 font-bold">₹2,999</span></li>
            <li><span className="font-semibold">ITR-3</span> (Salary + Stocks + F&O + Intraday + Other Income) – <span className="text-sky-600 font-bold">₹3,499*</span></li>
          </ul>
          <h3 className="text-lg md:text-xl font-semibold text-sky-600 mb-2 mt-2 w-full">What's Included in All Plans:</h3>
          <ul className="w-full mb-4 space-y-1 text-neutral-700">
            <li>✔️ Filing by an experienced and dedicated tax consultant</li>
            <li>✔️ Assistance with income tax final intimation and refund tracking</li>
          </ul>
          <p className="text-neutral-500 italic text-sm mb-6 w-full text-left">*Note: Tax Audit and Books of Accounts preparation for F&O traders are not included in the above fees.</p>
          <button
            className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
            onClick={() => { /* Add booking action here */ }}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* ITR Filing Form Section */}
      <section className="py-12 px-4 bg-sky-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Plans & Features */}
          <div className="flex-1 bg-gradient-to-br from-sky-200 via-white to-sky-100 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col justify-center items-center border-2 border-sky-100">
            <div className="mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-sky-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-3 text-center">ITR Filing Plans</h2>
            <ul className="w-full mb-4 space-y-2 text-neutral-800 text-base md:text-lg">
              <li><span className="font-semibold">ITR-1:</span> Salary or other income – <span className="text-sky-600 font-bold">₹1,499</span></li>
              <li><span className="font-semibold">ITR-4:</span> Business income – <span className="text-sky-600 font-bold">₹1,499</span></li>
              <li><span className="font-semibold">ITR-2:</span> Salary + Stock Market/Mutual Fund Gains – <span className="text-sky-600 font-bold">₹2,999</span></li>
              <li><span className="font-semibold">ITR-3:</span> Salary + Stocks + F&O + Intraday – <span className="text-sky-600 font-bold">₹3,499*</span></li>
            </ul>
            <div className="w-full mb-4 text-neutral-700 text-sm md:text-base">
              <p className="mb-1 font-semibold">All plans include:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>Maximum eligible TDS refund as per law</li>
                <li>Filing by an experienced tax consultant</li>
                <li>End-to-end support until your return is processed</li>
              </ul>
              <p className="mb-2">How it works:</p>
              <ol className="list-decimal pl-6 mb-2">
                <li>Fill out the form and make your payment online.</li>
                <li>Upload your documents and relax — our experts will handle the rest!</li>
              </ol>
              <p className="text-neutral-500 italic text-xs">*Note: Tax audit and books of accounts preparation for F&O traders are not included in the above fees.</p>
            </div>
          </div>
          {/* Right: Form */}
          <div className="flex-1 flex items-center">
            <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 text-center">Get Started with Your ITR Filing</h3>
              <ITRFilingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ITR Info Cards Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Types of ITR Forms */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Types of Income Tax Return Forms in India</h2>
            <div>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-1</h3>
              <p className="text-neutral-700 mb-2">Applicable to resident individuals with total income up to ₹50 lakh. Income sources should include salary and one house property.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-2</h3>
              <p className="text-neutral-700 mb-2">Meant for individuals and HUFs who do not earn income from business or profession.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-3</h3>
              <p className="text-neutral-700 mb-2">For individuals and HUFs having income from profits and gains of business or profession.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-4</h3>
              <p className="text-neutral-700 mb-2">Suitable for individuals, HUFs and firms opting for presumptive income scheme under Sections 44AD, 44ADA and 44AE.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-5</h3>
              <p className="text-neutral-700 mb-2">Used by entities other than individuals, HUFs and companies, such as firms, AOPs, BOIs etc.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-6</h3>
              <p className="text-neutral-700 mb-2">For companies not claiming exemption under Section 11 of the Income Tax Act.</p>
              <h3 className="font-semibold text-sky-600 mt-2">ITR-7</h3>
              <p className="text-neutral-700">Applicable for persons (including companies) required to file returns under Sections 139(4A) to 139(4F).</p>
            </div>
          </div>

          {/* Due Dates */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Income Tax E-Filing Due Dates</h2>
            <p className="text-neutral-700">
              Individuals, HUFs, BOIs and AOPs must file their ITR by <span className="font-semibold">31st July</span> of the assessment year.<br />
              Businesses requiring audit must file by <span className="font-semibold">30th September</span>.<br />
              Taxpayers needing to submit Form 3CEB (transfer pricing) must file by <span className="font-semibold">30th November</span>.<br />
              <span className="text-red-500">Late filing attracts a penalty along with interest.</span>
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Benefits of Filing Income Tax Return</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>✅ Helps in loan approvals (home/vehicle loan)</li>
              <li>✅ Mandatory for claiming tax refunds</li>
              <li>✅ Enables carry forward of capital losses</li>
              <li>✅ Required for visa applications</li>
              <li>✅ Needed to buy high-value life insurance policies</li>
              <li>✅ Essential for applying for government tenders</li>
            </ul>
          </div>

          {/* Documents Required */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Documents Required for ITR E-Filing</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1">
              <li>PAN Card</li>
              <li>Aadhar Number</li>
              <li>Bank Account Details</li>
              <li>Form 16, 16A</li>
              <li>Form 26AS</li>
              <li>Investment Proofs</li>
              <li>Rent Receipts (if applicable)</li>
              <li>Bank Passbook, FD Statement</li>
              <li>Medical & Home Loan Expense Proofs</li>
              <li>Share Transactions & GST Details (if any)</li>
            </ul>
          </div>

          {/* Who Can File ITR Online */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Who Can File ITR Online?</h2>
            <p className="text-neutral-700 mb-2">Online filing is applicable to:</p>
            <ul className="list-disc pl-6 text-neutral-700 space-y-1">
              <li>Individuals with income ≥ ₹5 lakh</li>
              <li>Residents with assets or authority abroad</li>
              <li>Taxpayers under audit requirements (Sec. 44AB, 92E, etc.)</li>
              <li>All companies, firms, AOPs, BOIs, local authorities</li>
              <li>Those claiming relief under Sec. 90/90A/91</li>
            </ul>
          </div>

          {/* Important Points */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Important Points During ITR E-Filing</h2>
            <ul className="space-y-2 text-neutral-700">
              <li>✅ Select the correct ITR form</li>
              <li>✅ Classify income under correct heads</li>
              <li>✅ Disclose all assets if income &gt; ₹50 lakh</li>
              <li>✅ Keep proof for all claims/deductions</li>
              <li>✅ Include interest from FDs and exempt income</li>
              <li>✅ Verify your ITR after submission</li>
            </ul>
          </div>

          {/* Steps to File ITR Online */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Steps to File ITR Online</h2>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-1">
              <li>Visit: <a href="https://incometaxindiaefiling.gov.in" target="_blank" className="text-sky-600 underline">https://incometaxindiaefiling.gov.in</a></li>
              <li>Create an account using your PAN as login ID</li>
              <li>Link Aadhar under profile settings</li>
              <li>Check Form 26AS for tax details</li>
              <li>Download appropriate ITR form (Excel Utility)</li>
              <li>Fill all required details & validate each sheet</li>
              <li>Calculate tax, pay dues and add challan info</li>
              <li>Generate and save the XML file</li>
              <li>Upload XML on portal and submit</li>
              <li>e-Verify or send ITR-V to CPC Bengaluru within 120 days</li>
            </ol>
          </div>

          {/* Conclusion */}
          <div className="bg-sky-50 rounded-2xl shadow p-6 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Conclusion</h2>
            <p className="text-neutral-700">Filing ITR is a legal obligation and a financial discipline. Whether you are an individual, company or HUF, timely and correct return filing ensures compliance and unlocks multiple financial benefits. With online systems, the process has become easier than ever.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

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
      {open && <div className="px-4 pb-4 text-neutral-700 text-sm">{answer}</div>}
    </div>
  );
};

const ITRFilingForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: ''
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
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        alert('Thank you! Your details have been submitted. Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', whatsapp: '' });
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
          placeholder="you@email.com"
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
          placeholder="9876543210"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <span className="text-xs text-neutral-500">Insert number without 0 or +91. E.g., 9876543210</span>
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

export default Income_Tax_eFiling
import React from 'react';

// FAQ data grouped by section
const faqSections = [
  {
    label: 'Frequently Asked Questions',
    faqs: [
      { q: 'Where are you located?', a: 'We are based in Palghar, Maharashtra, and serve clients PAN India.' },
      { q: 'What services do you offer?', a: 'We offer business registration, GST, income tax filing, accounting, MSME, trademark, FSSAI, and more.' },
      { q: 'How do I book a consultation?', a: 'Simply fill out the consultation form on this page, and our team will contact you soon.' },
      { q: 'Is my data safe with you?', a: 'Absolutely. We follow strict confidentiality and data protection protocols for all client information.' },
      { q: 'Do you provide services outside Maharashtra?', a: 'Yes, we provide services to clients all over India.' },
    ]
  },
  {
    label: 'Frequently Asked Questions (Income Tax in India)',
    faqs: [
      { q: 'Who needs to file an Income Tax Return (ITR) in India?', a: 'Any individual whose total income exceeds the basic exemption limit (₹2.5 lakh for most individuals) in a financial year must file an ITR. Other cases include those who want to claim a refund, carry forward losses, or have foreign assets.' },
      { q: 'What documents are required for e-filing ITR?', a: 'Common documents include PAN, Aadhaar, Form 16, salary slips, bank statements, TDS certificates, investment proofs, and details of other income (like rent, capital gains, etc.).' },
      { q: 'What is Form 16?', a: 'Form 16 is a certificate issued by an employer showing the salary paid and TDS deducted during the financial year. It is essential for salaried individuals while filing ITR.' },
      { q: 'What happens if I miss the ITR filing deadline?', a: 'You can file a belated return with a late fee. However, you may lose certain benefits like carrying forward losses, and interest/penalties may apply.' },
      { q: 'Is it mandatory to link Aadhaar with PAN for e-filing?', a: 'Yes, linking Aadhaar with PAN is mandatory for e-filing your income tax return in India.' },
      { q: 'Can I revise my ITR after filing?', a: 'Yes, if you discover any mistake after filing, you can revise your ITR before the end of the relevant assessment year.' },
      { q: 'How do I check my ITR status after filing?', a: 'You can check your ITR status online by logging into the Income Tax e-filing portal using your PAN and password.' },
    ]
  },
  {
    label: 'FAQ Series on Private Limited Company Registration',
    faqs: [
      { q: 'Can I register a Private Limited Company at my home address?', a: 'Yes, you can use your residential address for company registration. You just need to provide a utility bill as address proof.' },
      { q: 'Can I add family members as partners if I have no other partner?', a: 'Absolutely! You can add a family member as a co-director or shareholder. You can also change or transfer shares later if needed.' },
      { q: 'How long does it take to register a Private Limited Company?', a: 'On average, it takes about 10 to 15 days to complete the registration process in India.' },
      { q: 'What is the cost for Private Limited Company registration?', a: 'The typical cost is around ₹10,999 (except in some states like Punjab, Kerala, and MP due to extra stamp duty).' },
      { q: 'What does "authorised capital" of ₹1 lakh mean for a Private Limited Company?', a: 'Authorised capital is the maximum value of shares your company can issue. You don\'t need to invest ₹1 lakh upfront; you can start with any amount.' },
      { q: 'Is GST registration required for Private Limited Company registration?', a: 'GST registration is only needed if your turnover exceeds ₹20 lakh (₹10 lakh for North East states). It\'s a separate process from company registration.' },
      { q: 'Can I register my company with Startup India?', a: 'Yes, after registering your Private Limited Company, you can also register with the Startup India portal.' },
      { q: 'Can I run multiple businesses under one Private Limited Company?', a: 'Yes, you can operate multiple businesses under one company. Just mention all activities in your Memorandum of Association (MOA) during registration.' },
      { q: 'What is a DSC (Digital Signature Certificate) for online company registration?', a: 'A DSC is used to sign all e-forms online. After registration, you\'ll receive your DSC on a secure USB token.' },
      { q: 'How do I protect my company name or logo in India?', a: 'Your company name is protected after registration. For logo protection, you need to apply for trademark registration separately.' },
      { q: 'What are the minimum requirements to become a director in a Private Limited Company?', a: 'Any individual (Indian, foreign, or NRI) aged 18+ with a Director Identification Number (DIN) can be a director.' },
      { q: 'How long is the Private Limited Company registration valid?', a: 'The registration is valid for life, unless the company fails to start business within a year or doesn\'t file annual returns.' },
      { q: 'Can I be a director if I am already working a job?', a: 'Yes, unless your employment contract restricts it. Always check your job agreement for any such clauses.' },
      { q: 'Do I need to visit any government office to register my company?', a: 'No, the entire process is online with Smart File Solutions. Just send your documents by email or WhatsApp.' },
      { q: 'Are FDI or local investors allowed in a Private Limited Company?', a: 'Yes, both Indian and foreign investors can invest in a Private Limited Company.' },
      { q: 'What are the annual compliance requirements for a Private Limited Company?', a: 'You must appoint an auditor, file annual returns and financial statements, and submit your income tax return every year.' },
      { q: 'Is a Private Limited Company a good option for NRIs or foreign nationals?', a: 'Yes, NRIs and foreign nationals can easily set up a Private Limited Company in India without prior RBI approval.' },
      { q: 'Can I convert my Private Limited Company into another entity like LLP or OPC?', a: 'Yes, you can convert to LLP or OPC, but not to a basic proprietorship or partnership.' },
      { q: 'What is limited liability protection in a Private Limited Company?', a: 'Limited liability means your personal assets are protected; you\'re only responsible for company debts up to your shareholding.' },
      { q: 'What else do I need to start my business after company registration?', a: 'After opening a current account, you can optionally apply for MSME, Trademark, FSSAI, or Patent registrations as needed.' },
    ]
  },
  {
    label: 'FAQ on Sole Proprietorship Registration',
    faqs: [
      { q: 'Do I need a commercial property or office to register a proprietorship?', a: 'No, you can use your home address for registration, whether you own or rent. Just provide a utility bill and, if renting, permission from the property owner.' },
      { q: 'Is a No Objection Certificate (NOC) required for rental or owned property?', a: 'If the utility bill is not in your name, a NOC is needed. We provide a standard format for this when required.' },
      { q: 'Can I choose any name for my firm?', a: 'Yes, you can select any name for your firm, as long as it does not use extensions like Pvt Ltd, LLP, or OPC. Just avoid names that are already trademarked.' },
      { q: "Can I register the firm in a family member's name?", a: 'Yes, you can register in a family member\'s name if you wish. The same documents are required as for your own registration.' },
      { q: 'Are there other ways to register a proprietorship apart from MSME or GST?', a: 'Yes, but they are usually more expensive or less valid. Shop Act License is an option for physical shops, but it can be costly. Business ITR can also serve as proof, but only for existing businesses.' },
      { q: 'Is sole proprietorship registration mandatory?', a: 'A proprietorship is an unregistered entity by default. You only need legal proof (like MSME, GST, or CA certificate) to open a bank account or work with vendors.' },
      { q: 'What are the disadvantages of a proprietorship firm?', a: 'Main drawbacks include limited resources, unlimited liability, less credibility, difficulty raising funds, and you cannot add partners.' },
      { q: 'Can an NRI become a proprietor?', a: 'No, only Indian residents can register as proprietors. NRIs can invest, but not register as the owner.' },
      { q: 'How much money do I need to start a proprietorship?', a: 'There is no minimum capital required. You can start with any amount.' },
      { q: 'What annual compliance is required for a proprietorship?', a: 'If you have GST, you must file GST returns. All business income is shown in your personal income tax return, as there is no separate PAN for the firm.' },
      { q: 'Can I convert my proprietorship into a private limited company?', a: 'Yes, you can convert to a private limited company through a standard process.' },
      { q: 'How do I register the name of my proprietorship?', a: 'There are no strict rules for naming. Choose any name not already trademarked. For extra protection, consider trademark registration.' },
      { q: 'How will I receive my GST, MSME, or CA certificate?', a: 'GST and MSME certificates are sent digitally by email. CA certificates are sent as hard copies by courier. Most government documents are digital.' },
      { q: 'Do I need to visit any office to complete registration?', a: 'No, everything is done online. Just send your documents by email or WhatsApp.' },
      { q: 'How can I check the validity of my registration certificate?', a: 'We provide steps to verify your certificate on the government website after registration.' },
      { q: 'Is a proprietorship firm the same as a company?', a: 'No, a proprietorship is a simple business entity, not registered under the Companies Act. A private limited company is registered with the Ministry of Corporate Affairs.' },
      { q: 'Is there a way to reduce the cost of registering a proprietorship?', a: 'Yes, using MSME with CA certification or GST registration is the most cost-effective. Shop Act, ITR, or trade licenses are more expensive.' },
    ]
  },
  {
    label: 'Frequently Asked Questions about Trademark Registration',
    faqs: [
      { q: 'How do I choose a good trademark name for my business?', a: 'Pick a unique, easy-to-remember name that is not already in use by another company. Check for trademark and domain name availability before finalizing your brand name.' },
      { q: 'What are the main features of a trademark?', a: 'A trademark gives your business a unique brand identity, legally protects your brand name, and builds trust and authority with customers.' },
      { q: 'Who can register a trademark in India?', a: 'Anyone—including individuals, companies, partnerships, LLPs, and even foreigners—can register a trademark in India. There are no special qualifications required.' },
      { q: 'Who benefits from a registered trademark?', a: 'The trademark owner (individual, company, or sole proprietor) enjoys exclusive rights and can even sell or transfer the trademark to others.' },
      { q: 'Can I correct or change my trademark application after filing?', a: 'Yes, you can make corrections or changes after filing by submitting a correction form. Your attorney can help you with this process.' },
      { q: 'Can the trademark registry remove my trademark?', a: 'Yes, if your trademark does not meet government requirements or you do not respond to objections, the registry can remove or cancel your trademark.' },
      { q: 'What is the most important part of a trademark application?', a: 'The brand name (word or logo) and the correct class selection are the most important factors in a trademark application.' },
      { q: 'Is the logo included in trademark registration?', a: 'Yes, you can include your logo or tagline in your trademark registration. However, the design itself is not protected by trademark; for that, you need copyright registration.' },
      { q: 'Can I protect my domain name with trademark registration?', a: 'Yes, trademark registration can help protect your domain name from misuse.' },
      { q: 'Can I protect my business idea with a trademark?', a: 'No, trademarks only protect brand names, logos, and slogans. To protect an idea or invention, you need a patent.' },
      { q: 'Can I file a trademark in multiple classes?', a: 'Yes, you can file in multiple classes, but the government fee applies per class. Each additional class increases the cost.' },
      { q: 'What types of names or slogans cannot be trademarked?', a: 'You generally cannot trademark personal names, surnames, colors, smells, locations, or sounds. The name must be distinctive and not generic.' },
      { q: 'Can I transfer my trademark to another person or company?', a: 'Yes, trademarks can be sold or transferred, which is common during mergers and acquisitions.' },
      { q: 'Can I use your home address for trademark registration?', a: 'Yes, you can use your residential address for trademark registration. There are no restrictions.' },
      { q: 'How do I check the status of my trademark application online?', a: 'Visit the Indian Government Trademark Registry website, enter your class and trade name, and you can view the status of your application online.' },
    ]
  },
  {
    label: 'Frequently Asked Questions about LLP Registration',
    faqs: [
      { q: 'Who can become a partner in LLP registration?', a: 'Any individual or body corporate can become a partner in an LLP, unless they are of unsound mind or undergoing insolvency proceedings.' },
      { q: 'Can an NRI (Non-Resident Indian) become a partner in an LLP?', a: 'Yes, NRIs can be partners in an LLP. Since 2015, 100% FDI is allowed in LLPs in sectors where it is permitted.' },
      { q: 'What is an LLP Agreement?', a: 'An LLP Agreement is a legal document signed and executed among the partners, outlining their rights and duties. It must be submitted to the Registrar of Companies (ROC) during incorporation.' },
      { q: 'What is the minimum and maximum number of partners in an LLP?', a: 'A minimum of 2 partners is required, and there is no maximum limit.' },
      { q: 'Why do small startups prefer LLP registration?', a: 'LLP registration is preferred by startups due to low compliance, easy incorporation, lower fees, body corporate status, and limited liability.' },
      { q: 'Is LLP registration cheaper than a Private Limited Company?', a: 'Yes, LLP registration generally involves lower costs and fewer compliances compared to a Private Limited Company.' },
      { q: 'What is stamp duty in an LLP Agreement?', a: 'Stamp duty varies by state. For example, in Rajasthan, it is ₹500. The amount depends on where the agreement is executed.' },
      { q: 'Do I need a commercial office for LLP registration?', a: 'No, you can use your residential address as the registered office for your LLP.' },
      { q: 'Can I form an LLP myself without a CA or online portal?', a: 'No, professional assistance is required as per MCA rules. A CA, CS, or lawyer must authorize the e-forms with a DSC.' },
      { q: 'What is the tax rate for LLPs?', a: 'LLPs are taxed like partnership firms at an effective rate of 30.9% on profits. No surcharge applies.' },
      { q: 'Can I include family members as partners in my LLP?', a: 'Yes, you can include any family member as a partner in your LLP.' },
      { q: 'What is the minimum share capital for an LLP?', a: 'There is no minimum capital requirement, but it is advisable to start with at least ₹10,000.' },
      { q: 'Is GST registration required after LLP registration?', a: 'GST registration is required if your turnover exceeds ₹20 lakh per year. It is recommended to register for GST after incorporating your LLP to claim input tax credit.' },
      { q: 'Is my LLP eligible for Startup India benefits?', a: 'Yes, LLPs are recognized as eligible legal entities under the Startup India scheme.' },
      { q: 'Can an LLP have multiple businesses?', a: 'Yes, you can operate multiple businesses under one LLP name.' },
      { q: 'Does LLP registration protect my company name and logo?', a: 'LLP registration protects your company name, but not your brand or logo. For brand protection, you should register a trademark.' },
      { q: 'What is the criteria to become a partner in an LLP?', a: 'Partners must be at least 18 years old and have valid documents such as a PAN card.' },
      { q: 'Does the LLP Registration Certificate have validity or require renewal?', a: 'The LLP Registration Certificate is valid for a lifetime and does not require renewal.' },
      { q: 'Can a working professional register an LLP in India?', a: 'Yes, unless restricted by your employment agreement, working professionals can register an LLP.' },
      { q: 'Is physical presence or meeting with a government officer required?', a: 'No, the entire LLP registration process with Smart File Solutions is 100% online.' },
      { q: 'Do VCs or angel investors invest in LLPs?', a: 'Venture capitalists and angel investors usually prefer Private Limited Companies, but in some cases, they may invest in LLPs.' },
      { q: 'What are the mandatory annual compliances for an LLP?', a: 'LLPs must file an annual return and statement of accounts with the MCA. Audit is not required unless turnover exceeds ₹40 lakh.' },
      { q: 'Can I convert my LLP into a Private Limited Company or other entity?', a: 'Currently, conversion from LLP to Private Limited Company is not practical or possible.' },
      { q: 'Do I need any other licenses after LLP registration?', a: 'Depending on your business, you may need GST registration, trademark registration, FSSAI for food businesses, or IEC for import/export.' },
    ]
  },
  {
    label: 'Frequently Asked Questions about One Person Company (OPC) Registration',
    faqs: [
      { q: 'Who can become a partner in a One Person Company (OPC)?', a: 'Any individual can become a member of an OPC unless they are of unsound mind, insolvent, or have insolvency proceedings pending.' },
      { q: 'Can an NRI (Non-Resident Indian) start an OPC?', a: 'Only a natural person who is an Indian citizen and resident in India can incorporate an OPC or be a nominee. The director or nominee must be over 18 years of age.' },
      { q: 'What is OPC registration?', a: 'OPC registration is the legal process of incorporating a One Person Company. It provides legal proof and makes your OPC a recognized entity. The process is simple and can be completed online.' },
      { q: 'What is the minimum number of partners in an OPC?', a: 'Only one person is required to start an OPC.' },
      { q: 'Why do individuals prefer OPC registration?', a: 'OPC registration is preferred for its low compliance, easy incorporation, lower fees, body corporate status, and limited liability.' },
      { q: 'Is OPC registration cheaper than a Private Limited Company?', a: 'Yes, OPC registration generally involves lower costs and fewer compliances compared to a Private Limited Company.' },
      { q: 'What are MOA and AOA?', a: 'MOA stands for Memorandum of Association and AOA stands for Articles of Association. These are key documents that define the company\'s objectives and rules.' },
      { q: 'Who can incorporate a One Person Company?', a: 'Only a natural person who is an Indian citizen and resident in India can incorporate an OPC and be a nominee.' },
      { q: 'Can a person form more than one OPC?', a: 'No, a person cannot incorporate more than one OPC or be a nominee in more than one OPC.' },
      { q: 'Can a minor be a member or nominee of an OPC?', a: 'No, minors cannot be members or nominees of an OPC or hold shares with beneficial interest.' },
      { q: 'Can an OPC carry out NBFC activities?', a: 'No, OPCs cannot carry out Non-Banking Financial Investment activities, including investment in securities of other companies.' },
      { q: 'Is OPC suitable for medium and large businesses?', a: 'OPC is best suited for small businesses. If paid-up capital exceeds ₹50 lakhs or turnover exceeds ₹2 crores, OPC must convert to a Private Limited Company.' },
      { q: 'Is there a time limit for voluntary conversion of OPC?', a: 'OPC cannot be converted voluntarily into another company type within 2 years of incorporation, unless it crosses the capital or turnover threshold.' },
      { q: 'Is it mandatory to nominate a person during OPC incorporation?', a: 'Yes, the sole member must nominate a person (with written consent) who will become the member in case of death or incapacity.' },
      { q: 'Is it mandatory to mention the nominee\'s name in the MOA?', a: 'Yes, the nominee\'s name must be mentioned in the Memorandum of Association.' },
      { q: 'Is it mandatory to mention "OPC" in all documents?', a: 'Yes, "OPC" must be mentioned in brackets below the company name wherever it is printed or displayed.' },
      { q: 'Is it mandatory to inform the company if a nominee withdraws consent?', a: 'Yes, the nominee must give written notice to the member and the company if they wish to withdraw consent.' },
      { q: 'How long does the member have to nominate a new nominee after withdrawal?', a: 'The member must nominate another person within 15 days of receiving the withdrawal notice and inform the company in writing.' },
      { q: 'What is the time limit for informing the Registrar about nominee changes?', a: 'The company must inform the Registrar within 30 days of any nominee withdrawal or appointment.' },
      { q: 'What is the procedure for issuing a share certificate?', a: 'Share certificates must be issued under the company seal and signed by a director or authorized person and the Company Secretary (if any).' },
      { q: 'Who becomes the member of OPC in case of death or incapacity?', a: 'The nominee becomes the member. The new member must nominate another person within 15 days, and the company must inform the Registrar within 30 days.' },
      { q: 'What are the penalties for non-compliance?', a: 'Non-compliance can result in fines up to ₹10,000 and an additional ₹1,000 per day for continuing violations.' },
      { q: 'When must an OPC convert to a Private or Public Company?', a: 'If paid-up capital exceeds ₹50 lakhs or turnover exceeds ₹2 crores, the OPC must convert to a Private or Public Company.' },
      { q: 'Is there a time limit for conversion after exceeding thresholds?', a: 'Yes, conversion must be completed within 6 months of exceeding the capital or turnover threshold.' },
      { q: 'Is it mandatory to alter MOA and AOA for conversion?', a: 'Yes, the company must alter its MOA and AOA by resolution to give effect to the conversion.' },
      { q: 'Is prior intimation to the Registrar required for ceasing OPC status?', a: 'Yes, the OPC must notify the Registrar within 60 days of becoming ineligible to continue as an OPC.' },
      { q: 'Is it mandatory to get a PCS signature on the annual return?', a: 'The annual return must be signed by the Company Secretary or, if there is none, by a director.' },
      { q: 'Are general meeting provisions applicable to OPCs?', a: 'No, provisions relating to Board Meetings, AGMs, and EGMs do not apply to OPCs.' },
      { q: 'Is it mandatory to maintain a minutes book for OPC?', a: 'Yes, resolutions must be entered in the minutes book and signed and dated by the director.' },
      { q: 'Is it mandatory to file financial statements?', a: 'Yes, financial statements must be filed within 180 days of the financial year end.' },
      { q: 'Is it mandatory to record every contract in the minutes?', a: 'Contracts with the sole member/director must be recorded in the minutes unless in the ordinary course of business.' },
      { q: 'Is it mandatory to inform the Registrar about every contract?', a: 'Yes, the company must inform the Registrar within 15 days of Board approval of such contracts.' },
      { q: 'Is a cash flow statement mandatory for OPCs?', a: 'No, cash flow statements are not mandatory for OPCs.' },
    ]
  },
  {
    label: 'Frequently Asked Questions on Partnership Firm Registration',
    faqs: [
      { q: 'Can I use my home address as the office address for partnership firm registration?', a: 'Yes, you can use a partner\'s residential address for registration. You\'ll need to provide proof such as an electricity bill, rent agreement, or a no objection certificate (NOC) from the owner.' },
      { q: 'What is a No Objection Certificate (NOC) for rented or owned property?', a: 'If the utility bill is in someone else\'s name, a NOC from the property owner is required, stating they have no objection to commercial activity at the address. This does not affect your residential meter connection.' },
      { q: 'Can I register a unique name for my partnership firm?', a: 'Partnership firm names are not protected by law. You can choose any name, but for exclusive rights, consider registering a trademark for your firm with SmartFileSolutions.' },
      { q: 'Can employees register a partnership firm in a family member\'s name?', a: 'Yes, you can register the firm in a family member\'s name. Just provide the required documents for online registration.' },
      { q: 'Is there a minimum capital requirement to start a partnership firm?', a: 'No minimum capital is required. You only need to deposit enough to maintain your current bank account. There are no strict capital requirements like in a private limited company.' },
      { q: 'Why are some partnership firms unregistered legal entities?', a: 'Many firms are not registered with the Registrar of Firms due to high costs, especially after the introduction of LLPs. However, unregistered firms have limitations, such as not being able to file legal cases or claim set-offs.' },
      { q: 'What is partnership firm registration under the MSME Act, 2006?', a: 'Instead of registering with the Registrar of Firms, you can register under the MSME Act for a certificate and to open a current bank account. This is more affordable and widely accepted.' },
      { q: 'Who can become a partner in a partnership firm?', a: 'Only Indian residents can be partners in a partnership firm. For foreign partners, consider registering a private limited company.' },
      { q: 'What are the annual compliance requirements for a partnership firm?', a: 'Typically, you need to file a business income tax return, personal income tax returns for partners, and GST returns if applicable. Annual compliance costs are usually around ₹4,000–₹5,000.' },
      { q: 'Can I convert my partnership firm into a private limited company?', a: 'Yes, you can convert by setting up a new private limited company and executing an agreement between the partnership and the new company.' },
      { q: 'How long does it take to register a partnership firm with SmartFileSolutions?', a: 'Drafting the deed takes about 2 days, PAN card acknowledgment 4–6 days, and MSME registration about 1 day after that.' },
      { q: 'How do I open a current bank account for my partnership firm?', a: 'Banks require the partnership deed, identity and address proof, and a separate PAN card for the firm. SmartFileSolutions will guide you through the process.' },
      { q: 'How do I get a separate PAN card for my partnership firm?', a: 'After notarizing your partnership deed, SmartFileSolutions can help you apply for a PAN card in your firm\'s name.' },
      { q: 'Will my partnership firm receive a registration certificate?', a: 'You will receive an MSME certificate as legal proof of registration. Registrar of Firms certificates are optional and more expensive.' },
      { q: 'Can I receive investments in my partnership firm?', a: 'Yes, Indian residents can invest in a partnership firm. However, there is no limited liability as in LLPs or private limited companies.' },
      { q: 'How do I notarize my partnership deed?', a: 'After printing the deed on stamp paper, all partners must be present to notarize it with a lawyer.' },
      { q: 'Is partnership deed registration compulsory?', a: 'Registering the deed with the Registrar of Firms is optional and often skipped due to high costs.' },
      { q: 'Do I need to visit any office to complete my partnership registration?', a: 'No, SmartFileSolutions handles everything online. You only need to print and notarize the deed, which requires your physical presence.' },
      { q: 'Why choose SmartFileSolutions for partnership firm registration?', a: 'We offer affordable packages, are recognized under the Startup India program, have thousands of satisfied clients, provide dedicated support, free legal consultancy, and a 100% money-back guarantee.' },
    ]
  },
];

const highlightText = (text, search) => {
  if (!search) return text;
  const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? <mark key={i} className="bg-yellow-200 px-0.5 rounded">{part}</mark>
      : part
  );
};

const FAQItem = ({ question, answer, search }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`border border-gray-200 rounded-lg bg-white transition-all duration-200 ${open ? 'shadow-md' : 'hover:shadow'} `}>
      <button
        className="w-full text-left px-4 py-3 font-medium text-sky-700 flex justify-between items-center focus:outline-none text-base"
        onClick={() => setOpen(o => !o)}
        type="button"
      >
        <span>{highlightText(question, search)}</span>
        <span className="ml-3 text-sky-400">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          )}
        </span>
      </button>
      {open && <div className="px-4 pb-4 text-neutral-700 text-sm animate-fadeIn">{highlightText(answer, search)}</div>}
    </div>
  );
};

const FAQ = () => {
  const [search, setSearch] = React.useState('');
  // Collect all questions for cycling placeholder
  const allQuestions = React.useMemo(() => faqSections.flatMap(section => section.faqs.map(faq => faq.q)), []);
  const [placeholderIdx, setPlaceholderIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(() => {
    if (search) return; // Don't cycle if user is typing
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setPlaceholderIdx(idx => (idx + 1) % allQuestions.length); // Change question at opacity 0
        setFade(true); // Fade in
      }, 300); // fade out duration
    }, 2500);
    return () => clearInterval(interval);
  }, [allQuestions.length, search]);

  // Flatten all FAQs with section info for searching
  const allFaqs = faqSections.flatMap(section =>
    section.faqs.map(faq => ({ ...faq, section: section.label }))
  );

  // Filtered FAQs based on search
  const filteredFaqs = search.trim()
    ? allFaqs.filter(faq =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
    )
    : null;

  // Group filtered FAQs by section
  const groupedFilteredFaqs = filteredFaqs
    ? filteredFaqs.reduce((acc, faq) => {
      if (!acc[faq.section]) acc[faq.section] = [];
      acc[faq.section].push(faq);
      return acc;
    }, {})
    : null;

  // Contact form state (Formspree version)
  const [form, setForm] = React.useState({
    name: '',
    mobile: '',
    email: '',
    whatsapp: false,
    query: '',
  });
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Z ]{2,}$/.test(form.name)) errs.name = 'Please enter your full name (letters and spaces only).';
    const emailFilled = form.email.trim() !== '';
    const mobileFilled = form.mobile.trim() !== '';
    if (!emailFilled && !mobileFilled) {
      errs.email = 'Please provide at least one contact method (Email or Mobile).';
      errs.mobile = 'Please provide at least one contact method (Email or Mobile).';
    } else {
      if (emailFilled && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errs.email = 'Please enter a valid email address.';
      }
      if (mobileFilled && !/^\d{10}$/.test(form.mobile)) {
        errs.mobile = 'Please enter a valid 10-digit Indian mobile number.';
      }
    }
    if (!form.query || form.query.length < 5) errs.query = 'Please enter your query (at least 5 characters).';
    return errs;
  };

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    if (name === 'whatsapp' && type === 'checkbox') {
      // Only allow checking WhatsApp if mobile is valid
      if (checked && !/^\d{10}$/.test(form.mobile)) {
        setErrors(errs => ({ ...errs, mobile: 'Enter a valid 10-digit mobile number before selecting WhatsApp.' }));
        setForm(f => ({ ...f, whatsapp: false }));
        return;
      }
    }
    setForm(f => {
      const updated = { ...f, [name]: type === 'checkbox' ? checked : value };
      // If mobile is now valid, clear the WhatsApp mobile error
      if (name === 'mobile' && /^\d{10}$/.test(value)) {
        setErrors(errs => {
          const { mobile, ...rest } = errs;
          // Only remove our specific WhatsApp error, not other mobile errors
          return mobile === 'Enter a valid 10-digit mobile number before selecting WhatsApp.' ? rest : errs;
        });
      }
      return updated;
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      const response = await fetch('https://formspree.io/f/xrbkykyy', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', mobile: '', email: '', whatsapp: false, query: '' });
      } else {
        setSuccess(false);
        setErrors({ submit: 'Submission failed. Please try again.' });
      }
    } catch {
      setSuccess(false);
      setErrors({ submit: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
      {/* Enhanced Top Heading and Subtitle */}
      <div className="w-full max-w-2xl flex flex-col items-center justify-center mb-10 mt-2 bg-sky-50 rounded-2xl shadow-md px-6 py-8">
        <span className="mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16h.01M12 8a4 4 0 00-1 7.874" /></svg>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500 text-center mb-3">Frequently Asked Questions</h1>
        <p className="text-lg md:text-xl text-sky-700/80 text-center font-medium leading-relaxed">Find answers to common questions about our business, services, and registrations. Use the search to quickly find what you need!</p>
      </div>
      {/* FAQ Card Container */}
      <div className="w-full max-w-3xl bg-white rounded-xl border border-gray-200 shadow-sm px-2 md:px-6 py-6">
        {/* Search Bar */}
        <div className="w-full mb-8 relative">
          <input
            type="text"
            className="w-full border border-sky-200 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-sky-200 bg-white placeholder:italic placeholder:text-neutral-400"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {/* Animated placeholder overlay */}
          {(!search) && (
            <div
              className={`absolute left-0 top-0 w-full h-full flex items-center px-4 py-2 text-base text-neutral-400 pointer-events-none transition-opacity duration-300 placeholder:italic ${fade ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: 5 }}
              aria-hidden="true"
            >
              {allQuestions[placeholderIdx] || 'Search for a question or topic...'}
            </div>
          )}
        </div>
        {/* FAQ Sections */}
        <div className="space-y-12">
          {search.trim() ? (
            filteredFaqs && filteredFaqs.length > 0 ? (
              Object.entries(groupedFilteredFaqs).map(([section, faqs]) => (
                <div key={section} className="mb-8 md:mb-12">
                  <h2 className="text-lg md:text-xl font-semibold text-sky-600 mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16h.01M12 8a4 4 0 00-1 7.874" /></svg>
                    {section}
                  </h2>
                  <div className="space-y-2">
                    {faqs.map((faq, i) => (
                      <FAQItem key={faq.q + i} question={faq.q} answer={faq.a} search={search} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-base text-neutral-500 py-8">No FAQs found for your search.</div>
            )
          ) : (
            faqSections.map((section, idx) => (
              <div key={section.label} className="mb-8 md:mb-12">
                <h2 className="text-lg md:text-xl font-semibold text-sky-600 mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16h.01M12 8a4 4 0 00-1 7.874" /></svg>
                  {section.label}
                </h2>
                <div className="space-y-2">
                  {section.faqs.map((faq, i) => (
                    <FAQItem key={faq.q + i} question={faq.q} answer={faq.a} search={''} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Contact Form for Other Queries */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md px-4 py-8 mt-12 mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-sky-700 text-center mb-6">Have another question? Contact us!</h2>
        {success ? (
          <div className="text-green-600 font-semibold text-center py-6">Thank you! Your query has been submitted. Our team will contact you soon.</div>
        ) : (
          <form className="space-y-5" onSubmit={handleFormSubmit} autoComplete="off">
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input type="text" name="name" value={form.name} onChange={handleFormChange} required
                className="w-full border border-sky-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white" placeholder="Enter your name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Mobile <span className="text-red-500">*</span> <span className="text-xs text-neutral-500">(or Email)</span></label>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleFormChange} required
                className="w-full border border-sky-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white" placeholder="Enter your mobile number" />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Email <span className="text-red-500">*</span> <span className="text-xs text-neutral-500">(or Mobile)</span></label>
              <input type="email" name="email" value={form.email} onChange={handleFormChange} required
                className="w-full border border-sky-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white" placeholder="Enter your email" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="whatsapp" id="whatsapp" checked={form.whatsapp} onChange={handleFormChange} className="accent-sky-500" />
              <label htmlFor="whatsapp" className="text-sm font-medium text-sky-700">Are you on WhatsApp?</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-sky-700 mb-1">Your Query <span className="text-red-500">*</span></label>
              <textarea name="query" value={form.query} onChange={handleFormChange} rows={4} required
                className="w-full border border-sky-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white resize-none" placeholder="Type your query here" />
              {errors.query && <p className="text-red-500 text-xs mt-1">{errors.query}</p>}
            </div>
            {errors.submit && <div className="text-red-600 text-sm font-medium">{errors.submit}</div>}
            <button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-lg text-base transition-colors disabled:opacity-60" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Query'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FAQ;
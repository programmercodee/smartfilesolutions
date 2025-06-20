import React, { useRef } from 'react';

const Contact_Us = () => {
  // Ref for the contact form section
  const formSectionRef = useRef(null);

  // Handler to scroll to the form section
  const scrollToForm = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-white to-sky-50 py-12 px-4 flex justify-center">
        <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl shadow-lg bg-sky-100 border-2 border-sky-300 p-6 md:p-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-3">Need Assistance? We're Just a Message Away!</h1>
            <p className="text-neutral-700 text-base md:text-lg mb-2">Whether you have a question or need support, our team is always here to help—friendly, reliable, and ready when you are.</p>
            <p className="text-neutral-700 text-base md:text-lg">Reach out to us anytime via <strong>Email</strong>, <strong>Contact Form</strong>, <strong>Live Chat</strong>, or <strong>Phone</strong>. We're happy to connect!</p>
          </div>
          <div className="flex-shrink-0">
            <button
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 text-base md:text-lg"
              onClick={scrollToForm}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-md border border-sky-100 p-6 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">Contact Information</h2>
            <ul className="space-y-4 text-neutral-700 text-base md:text-lg">
              <li><span className="font-semibold">Email:</span> <a href="mailto:support@smartfilesolutions.com" className="text-sky-600 underline">support@smartfilesolutions.com</a></li>
              <li><span className="font-semibold">Phone:</span> <a href="tel:+911234567890" className="text-sky-600 underline">+91 12345 67890</a></li>
              <li><span className="font-semibold">Live Chat:</span> Available on our website (bottom right corner)</li>
              <li><span className="font-semibold">Address:</span> 123, Main Street, Palghar, Maharashtra, India</li>
            </ul>
            <div className="mt-8">
              <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=700" alt="Contact Illustration" className="w-full max-w-xs rounded-xl mx-auto" />
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formSectionRef} className="bg-sky-50 rounded-2xl shadow-md border border-sky-100 p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4 text-center">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-8 md:p-12 flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-4 text-center">Why Contact SmartFileSolutions?</h2>
          <ul className="list-disc pl-6 text-neutral-700 text-base md:text-lg space-y-2 max-w-2xl">
            <li>Get expert guidance on business registration, tax, and compliance matters.</li>
            <li>Receive personalized support tailored to your unique needs.</li>
            <li>Quick responses from a friendly, knowledgeable team.</li>
            <li>Confidential, secure handling of your information.</li>
            <li>Access to free resources, guides, and legal templates.</li>
            <li>100% satisfaction guarantee on all our services.</li>
          </ul>
        </div>
      </section>

      {/* How We Support You Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-sky-50 rounded-2xl shadow-md border border-sky-100 p-8 md:p-12 flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-4 text-center">How We Support You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div>
              <h3 className="text-lg font-semibold text-sky-600 mb-2">Support Channels</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                <li>Email: support@smartfilesolutions.com</li>
                <li>Phone: +91 12345 67890</li>
                <li>Live Chat: Available on our website</li>
                <li>Contact Form: Use the form above for any query</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-sky-600 mb-2">Our Response Promise</h3>
              <ul className="list-disc pl-6 text-neutral-700 space-y-1">
                <li>Emails: Response within 24 hours (usually much faster!)</li>
                <li>Phone: Available Mon-Sat, 10am–7pm</li>
                <li>Live Chat: Instant support during business hours</li>
                <li>All queries handled by real experts, not bots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md border border-sky-100 p-8 md:p-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 w-full max-w-2xl">
            {faqContactData.map((item, idx) => (
              <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    query: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  const categories = [
    'Company Registration',
    'GST Related',
    'Income Tax Return',
    'MSME/Udyog Aadhaar',
    'Trademark Registration',
    'Food License/FSSAI',
    'Annual Filing Pvt Ltd/LLP',
    'Others',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('category', form.category);
      data.append('query', form.query);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', category: '', query: '' });
      } else {
        throw new Error('Failed to send form');
      }
    } catch (err) {
      setError('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you for reaching out! Our SmartFileSolutions team will get back to you soon.</div>;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold text-sky-700 text-center mb-2">Contact SmartFileSolutions Support</h3>
      <p className="text-neutral-600 text-center mb-4 text-base">Let us know how we can help you. Our team is ready to assist with any business, tax, or compliance query!</p>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Full Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Enter your full name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">Please provide your name as per your ID</span>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="you@email.com"
          required
          value={form.email}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">We'll send our response to this email</span>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="10-digit mobile number (no +91 or 0)"
          required
          value={form.phone}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">Indian mobile number only</span>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">How can we help you? <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded px-3 py-2 cursor-pointer hover:border-sky-400 transition">
              <input
                type="radio"
                name="category"
                value={cat}
                className="accent-sky-500"
                required
                checked={form.category === cat}
                onChange={handleChange}
              />
              <span className="text-neutral-700 text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Your Message <span className="text-red-500">*</span></label>
        <textarea
          name="query"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Describe your question or request in detail"
          required
          value={form.query}
          onChange={handleChange}
        />
        <span className="text-neutral-400 text-xs">The more details you provide, the better we can assist you</span>
      </div>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold py-3 rounded-lg shadow transition-all duration-200 text-lg ${isSubmitting ? 'bg-neutral-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// FAQ Data for Contact Us
const faqContactData = [
  {
    q: "How quickly will I get a response after submitting the contact form?",
    a: "We aim to respond to all contact form submissions within 24 hours, often much sooner during business hours."
  },
  {
    q: "Can I get support outside of business hours?",
    a: "You can always email or submit the form, and we'll reply as soon as possible. Live chat and phone support are available during business hours."
  },
  {
    q: "Is my information safe when I contact you?",
    a: "Absolutely. We treat your information with strict confidentiality and never share it with third parties."
  },
  {
    q: "Can I request a call back?",
    a: "Yes! Just mention your preferred time in your message, and our team will call you back."
  },
  {
    q: "Do you provide free consultations?",
    a: "Yes, we offer free initial consultations for most services. Just reach out and let us know what you need."
  },
  {
    q: "What if I have a complaint or urgent issue?",
    a: "We take all feedback seriously. Mark your message as 'urgent' and our senior team will prioritize your request."
  },
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

export default Contact_Us;
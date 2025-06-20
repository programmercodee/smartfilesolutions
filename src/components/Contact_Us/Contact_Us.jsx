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
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

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
      data.append('message', form.message);
      const response = await fetch('https://formspree.io/f/xeokzlbw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send form');
      }
    } catch (err) {
      setError('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) return <div className="text-green-600 font-semibold text-center py-6">Thank you! Your message has been sent. Our team will get back to you soon.</div>;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Your Name"
          required
          value={form.name}
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
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block font-medium text-neutral-700 mb-1">Message <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          className="w-full border border-neutral-300 rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Type your message here"
          required
          value={form.message}
          onChange={handleChange}
        />
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

export default Contact_Us;
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("your-formspree-id"); // Replace with your Formspree form ID
  const [submitted, setSubmitted] = useState(false);

  if (state.succeeded && !submitted) {
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4" aria-label="Contact form">
      {submitted ? (
        <p className="text-green-600 font-semibold text-center">Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <>
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input id="name" name="name" type="text" required className="w-full p-2 border border-warmgray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellowgradientstart dark:bg-navy-800 dark:text-warmgray-100" />

          <label htmlFor="email" className="block font-semibold">Email</label>
          <input id="email" name="email" type="email" required className="w-full p-2 border border-warmgray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellowgradientstart dark:bg-navy-800 dark:text-warmgray-100" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message" className="block font-semibold">Message</label>
          <textarea id="message" name="message" required rows={5} className="w-full p-2 border border-warmgray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellowgradientstart dark:bg-navy-800 dark:text-warmgray-100"></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-yellowgradientstart dark:bg-yellowgradientend text-navy-900 font-semibold px-6 py-3 rounded-sm w-full hover:bg-yellowgradientend transition"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </>
      )}
    </form>
  );
};

export default ContactForm;

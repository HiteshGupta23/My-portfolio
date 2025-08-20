import { NextPage } from 'next';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { useForm, ValidationError } from '@formspree/react';

const Contact: NextPage = () => (
  <Layout title="Contact" description="Get in touch with Hitesh Gupta through email or LinkedIn.">
    <section className="max-w-lg mx-auto space-y-6">
      <h1 className="font-serif text-4xl mb-6 text-center">Contact Me</h1>
      <ContactForm />
      <div className="text-center mt-8 text-warmgray-800 dark:text-warmgray-300 space-y-2">
        <p>Email: <a href="mailto:your-email@example.com" className="text-yellowgradientstart dark:text-yellowgradientend underline">your-email@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/the-hitesh" target="_blank" rel="noopener noreferrer" className="text-yellowgradientstart dark:text-yellowgradientend underline">linkedin.com/in/the-hitesh</a></p>
      </div>
    </section>
  </Layout>
);

export default Contact;
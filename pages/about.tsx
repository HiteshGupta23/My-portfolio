import { NextPage } from 'next';
import Layout from '../components/Layout';
import { about } from '../data/about';

const About: NextPage = () => (
  <Layout title="About Me" description="Learn about Hitesh Gupta, a data analyst passionate about analytics and data quality.">
    <section>
      <h1 className="font-serif text-4xl mb-6">About Me</h1>
      <p className="mb-4 text-warmgray-800 dark:text-warmgray-300">{about.bio}</p>

      <h2 className="font-serif text-2xl mt-8 mb-4">Education & Certifications</h2>
      <ul className="list-disc list-inside space-y-1 text-warmgray-800 dark:text-warmgray-300">
        {about.education.map((edu, idx) => (
          <li key={idx}>
            <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h2 className="font-serif text-2xl mt-8 mb-4">Work Style</h2>
      <p className="text-warmgray-800 dark:text-warmgray-300">{about.workStyle}</p>
    </section>
  </Layout>
);

export default About;

import { NextPage } from 'next';
import Layout from '../components/Layout';
import { experience } from '../data/experience';

const Experience: NextPage = () => (
  <Layout title="Experience" description="Explore Hitesh Gupta's roles and contributions in internships and projects.">
    <section className="space-y-10">
      <h1 className="font-serif text-4xl mb-8">Experience</h1>
      {experience.map((exp) => (
        <article key={exp.company} className="bg-warmgray-100 dark:bg-navy-800 p-6 rounded-sm shadow-subtle">
          <h2 className="font-serif text-2xl">{exp.role}</h2>
          <p className="text-sm font-mono mb-2 text-warmgray-700 dark:text-warmgray-400">
            {exp.company} | {exp.dates}
          </p>
          <ul className="list-disc list-inside space-y-1 text-warmgray-800 dark:text-warmgray-300">
            {exp.impact.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  </Layout>
);

export default Experience;
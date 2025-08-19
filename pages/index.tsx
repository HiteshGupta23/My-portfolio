import type { NextPage } from 'next';
import Layout from '../components/Layout';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';

const Home: NextPage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout title="Home" description="Portfolio of Hitesh Gupta, aspiring data analyst">
      <section className="text-center py-16">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Hi, I’m Hitesh Gupta</h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl font-sans mb-8">
          Aspiring Data Analyst passionate about turning raw data into insightful stories. Skilled in SQL, Python, Power BI, and Data Science.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="/resume.pdf"
            download
            className="bg-yellowgradientstart dark:bg-yellowgradientend text-navy-900 dark:text-navy-900 font-semibold px-6 py-3 rounded-md shadow-subtle hover:bg-yellowgradientend transition"
          >
            Download Resume
          </a>
          <Link href="/contact">
            <a className="border border-yellowgradientstart dark:border-yellowgradientend text-yellowgradientstart dark:text-yellowgradientend font-semibold px-6 py-3 rounded-md shadow-subtle hover:bg-yellowgradientstart hover:text-navy-900 dark:hover:text-navy-900 transition">
              Contact Me
            </a>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-3xl mb-8 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/projects">
            <a className="text-yellowgradientstart dark:text-yellowgradientend font-semibold hover:underline">View All Projects</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

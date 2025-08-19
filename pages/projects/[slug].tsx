import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Layout from '../../components/Layout';
import { projects, Project } from '../../data/projects';
import SkillBadge from '../../components/SkillBadge';
import Link from 'next/link';

interface ProjectPageProps {
  project: Project | null;
}

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  if (!project) {
    return <Layout title="Project Not Found"><p>Project not found.</p></Layout>;
  }

  return (
    <Layout title={project.title} description={project.problemStatement}>
      <article className="max-w-4xl mx-auto bg-warmgray-100 dark:bg-navy-800 p-8 rounded-sm shadow-subtle">
        <h1 className="font-serif text-4xl mb-4 text-navy-900 dark:text-warmgray-100">{project.title}</h1>
        <p className="font-mono mb-2 text-sm text-warmgray-700 dark:text-warmgray-300">{project.date}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech} skill={tech} />
          ))}
        </div>

        <section className="mb-6">
          <h2 className="font-serif text-2xl mb-2">Problem Statement</h2>
          <p className="text-warmgray-800 dark:text-warmgray-200">{project.problemStatement}</p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif text-2xl mb-2">Data Used</h2>
          <p className="text-warmgray-800 dark:text-warmgray-200">{project.dataUsed}</p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif text-2xl mb-2">Methods Applied</h2>
          <p className="text-warmgray-800 dark:text-warmgray-200">{project.methodsApplied}</p>
        </section>

        <section className="mb-6">
          <h2 className="font-serif text-2xl mb-2">Outcome & Impact</h2>
          <p className="text-warmgray-800 dark:text-warmgray-200">{project.outcome}</p>
        </section>

        <section className="flex gap-4 mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-yellowgradientstart dark:border-yellowgradientend rounded-sm font-semibold text-yellowgradientstart dark:text-yellowgradientend hover:bg-yellowgradientstart hover:text-navy-900 dark:hover:text-navy-900 transition"
            >
              GitHub Repo
            </a>
          )}
          {project.portfolioLink && (
            <a
              href={project.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-yellowgradientstart dark:border-yellowgradientend rounded-sm font-semibold text-yellowgradientstart dark:text-yellowgradientend hover:bg-yellowgradientstart hover:text-navy-900 dark:hover:text-navy-900 transition"
            >
              Portfolio Link
            </a>
          )}
          <Link href="/projects">
            <a className="ml-auto text-yellowgradientstart dark:text-yellowgradientend underline">Back to projects</a>
          </Link>
        </section>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((proj) => ({ params: { slug: proj.slug } }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const project = projects.find((p) => p.slug === slug) || null;
  return {
    props: { project }
  };
};

export default ProjectPage;

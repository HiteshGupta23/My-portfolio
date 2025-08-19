import { useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import SkillBadge from '../../components/SkillBadge';

const allSkills = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

const ProjectsPage: NextPage = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter
    ? projects.filter((p) => p.technologies.includes(filter))
    : projects;

  return (
    <Layout title="Projects" description="A comprehensive list of projects showcasing skills and impact.">
      <h1 className="font-serif text-4xl mb-8 text-center">Projects</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          className={`px-4 py-2 rounded-sm font-semibold border ${
            !filter
              ? 'bg-yellowgradientstart dark:bg-yellowgradientend text-navy-900 dark:text-navy-900 border-yellowgradientstart dark:border-yellowgradientend'
              : 'border-warmgray-400 dark:border-navy-700 text-warmgray-700 dark:text-warmgray-300'
          }`}
          onClick={() => setFilter(null)}
          aria-pressed={!filter}
        >
          All
        </button>
        {allSkills.map((skill) => (
          <button
            key={skill}
            className={`px-4 py-2 rounded-sm font-semibold border ${
              filter === skill
                ? 'bg-yellowgradientstart dark:bg-yellowgradientend text-navy-900 dark:text-navy-900 border-yellowgradientstart dark:border-yellowgradientend'
                : 'border-warmgray-400 dark:border-navy-700 text-warmgray-700 dark:text-warmgray-300'
            }`}
            onClick={() => setFilter(filter === skill ? null : skill)}
            aria-pressed={filter === skill}
          >
            <SkillBadge skill={skill} />
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
import React from 'react';
import Link from 'next/link';
import { Project } from '../data/projects';
import SkillBadge from './SkillBadge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-warmgray-100 dark:bg-navy-800 rounded-sm shadow-subtle p-6 transition hover:shadow-lg cursor-pointer">
      <Link href={`/projects/${project.slug}`}>
        <a>
          <h3 className="font-serif text-xl mb-2 text-navy-900 dark:text-warmgray-100">{project.title}</h3>
          <p className="mb-2 text-sm text-warmgray-700 dark:text-warmgray-300 font-mono">{project.date}</p>
          <p className="mb-3 text-warmgray-800 dark:text-warmgray-200">{project.problemStatement}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <SkillBadge key={tech} skill={tech} />
            ))}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const techColors: { [key: string]: string } = {
  'Python': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'SQL': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'Power BI': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'Machine Learning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  'Tableau': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  'R': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  'Excel': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`}>
        <a className="block">
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative p-6 z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  {project.featured && (
                    <motion.div
                      animate={{ 
                        background: [
                          'linear-gradient(45deg, #f97316, #fbbf24)',
                          'linear-gradient(45deg, #fbbf24, #f97316)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white mb-2"
                    >
                      ⭐ Featured
                    </motion.div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-teal dark:group-hover:text-brand-yellow transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.date} • {project.duration}
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-blue rounded-lg flex items-center justify-center text-white text-2xl ml-4"
                >
                  {project.category === 'data-analysis' && '📊'}
                  {project.category === 'machine-learning' && '🤖'}
                  {project.category === 'visualization' && '📈'}
                  {project.category === 'automation' && '⚙️'}
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Impact Highlight */}
              <motion.div 
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-3 rounded-lg mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  💡 {project.impact}
                </p>
              </motion.div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      techColors[tech] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    }`}
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  {project.github && (
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1"
                    >
                      <span>💻</span>
                      <span>Code</span>
                    </motion.div>
                  )}
                  {project.demo && (
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1"
                    >
                      <span>🚀</span>
                      <span>Demo</span>
                    </motion.div>
                  )}
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="text-brand-teal dark:text-brand-yellow font-medium text-sm flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <span>→</span>
                </motion.div>
              </div>
            </div>

            {/* Hover effect background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-teal/0 via-brand-blue/0 to-brand-teal/0 opacity-0 group-hover:opacity-10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            />
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const colors: { [key: string]: string } = {
  SQL: 'bg-yellow-400 text-yellow-900',
  Python: 'bg-blue-400 text-blue-900',
  'Power BI': 'bg-green-400 text-green-900',
  'Machine Learning': 'bg-purple-400 text-purple-900',
  pandas: 'bg-teal-400 text-teal-900',
  Excel: 'bg-green-600 text-white',
  Sheets: 'bg-green-600 text-white',
  'A/B testing': 'bg-pink-400 text-pink-900',
  statistics: 'bg-indigo-400 text-indigo-900',
  'data validation': 'bg-red-400 text-red-900',
  // Add more mappings as needed
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const colorClass = colors[skill] || 'bg-gray-300 text-gray-900';

  return (
    <span
      className={`${colorClass} font-semibold text-xs px-2 py-1 rounded-full select-none`}
      title={skill}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;

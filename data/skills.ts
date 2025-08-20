export interface Skill {
  name: string;
  category: 'programming' | 'analytics' | 'visualization' | 'database' | 'cloud' | 'soft-skills';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  experience: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'programming', proficiency: 'advanced', experience: '2+ years', icon: '🐍' },
  { name: 'R', category: 'programming', proficiency: 'intermediate', experience: '1.5 years', icon: '📊' },
  { name: 'SQL', category: 'database', proficiency: 'advanced', experience: '2+ years', icon: '🗃️' },
  { name: 'JavaScript', category: 'programming', proficiency: 'intermediate', experience: '1 year', icon: '🌐' },
  
  // Analytics & ML
  { name: 'Machine Learning', category: 'analytics', proficiency: 'advanced', experience: '2 years', icon: '🤖' },
  { name: 'Statistical Analysis', category: 'analytics', proficiency: 'expert', experience: '3+ years', icon: '📈' },
  { name: 'A/B Testing', category: 'analytics', proficiency: 'advanced', experience: '1.5 years', icon: '🧪' },
  { name: 'Predictive Modeling', category: 'analytics', proficiency: 'advanced', experience: '2 years', icon: '🔮' },
  
  // Visualization Tools
  { name: 'Power BI', category: 'visualization', proficiency: 'expert', experience: '2+ years', icon: '📊' },
  { name: 'Tableau', category: 'visualization', proficiency: 'advanced', experience: '1.5 years', icon: '📈' },
  { name: 'Excel', category: 'visualization', proficiency: 'expert', experience: '3+ years', icon: '📋' },
  { name: 'Matplotlib', category: 'visualization', proficiency: 'advanced', experience: '2 years', icon: '📉' },
  { name: 'Seaborn', category: 'visualization', proficiency: 'advanced', experience: '2 years', icon: '🎨' },
  { name: 'Plotly', category: 'visualization', proficiency: 'intermediate', experience: '1 year', icon: '📊' },
  
  // Database & Big Data
  { name: 'MySQL', category: 'database', proficiency: 'advanced', experience: '2 years', icon: '🐬' },
  { name: 'PostgreSQL', category: 'database', proficiency: 'intermediate', experience: '1 year', icon: '🐘' },
  { name: 'MongoDB', category: 'database', proficiency: 'intermediate', experience: '1 year', icon: '🍃' },
  { name: 'Apache Spark', category: 'database', proficiency: 'beginner', experience: '6 months', icon: '⚡' },
  
  // Cloud & Tools
  { name: 'Azure', category: 'cloud', proficiency: 'intermediate', experience: '1 year', icon: '☁️' },
  { name: 'AWS', category: 'cloud', proficiency: 'beginner', experience: '6 months', icon: '🌩️' },
  { name: 'Git', category: 'programming', proficiency: 'advanced', experience: '2 years', icon: '📝' },
  { name: 'Docker', category: 'cloud', proficiency: 'beginner', experience: '6 months', icon: '🐳' },
  
  // Python Libraries
  { name: 'Pandas', category: 'programming', proficiency: 'expert', experience: '2+ years', icon: '🐼' },
  { name: 'NumPy', category: 'programming', proficiency: 'advanced', experience: '2+ years', icon: '🔢' },
  { name: 'Scikit-learn', category: 'analytics', proficiency: 'advanced', experience: '2 years', icon: '🧠' },
  { name: 'TensorFlow', category: 'analytics', proficiency: 'intermediate', experience: '1 year', icon: '🔥' },
  { name: 'Jupyter', category: 'programming', proficiency: 'expert', experience: '2+ years', icon: '📓' },
  
  // Soft Skills
  { name: 'Problem Solving', category: 'soft-skills', proficiency: 'expert', experience: '3+ years', icon: '🧩' },
  { name: 'Communication', category: 'soft-skills', proficiency: 'advanced', experience: '3+ years', icon: '💬' },
  { name: 'Project Management', category: 'soft-skills', proficiency: 'advanced', experience: '2 years', icon: '📋' },
  { name: 'Team Leadership', category: 'soft-skills', proficiency: 'intermediate', experience: '1.5 years', icon: '👥' },
];

export const skillCategories = {
  'programming': 'Programming Languages',
  'analytics': 'Analytics & ML',
  'visualization': 'Data Visualization',
  'database': 'Database & Big Data',
  'cloud': 'Cloud & DevOps',
  'soft-skills': 'Soft Skills'
};

export const proficiencyColors = {
  'beginner': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  'intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  'advanced': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  'expert': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
};

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  bio: string;
  interests: string[];
  languages: { name: string; proficiency: string }[];
}

export const personalInfo: PersonalInfo = {
  name: 'Hitesh Gupta',
  title: 'Aspiring Data Analyst',
  location: 'Mumbai, India',
  email: 'hitesh.gupta@example.com',
  phone: '+91 98765 43210',
  linkedin: 'https://www.linkedin.com/in/the-hitesh',
  github: 'https://github.com/HiteshGupta23',
  website: 'https://hiteshgupta-portfolio.vercel.app',
  bio: "I'm a passionate data analyst with a strong foundation in Applied Mathematics and hands-on experience in transforming raw data into actionable insights. My expertise spans across statistical analysis, machine learning, and business intelligence, with a focus on creating data-driven solutions that drive business growth. I enjoy working with complex datasets and building automated systems that help organizations make informed decisions.",
  interests: [
    'Data Science & Analytics',
    'Machine Learning',
    'Business Intelligence',
    'Financial Markets',
    'Technology Trends',
    'Photography',
    'Reading Tech Blogs',
    'Open Source Contributing'
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Hindi', proficiency: 'Native' },
    { name: 'Marathi', proficiency: 'Conversational' }
  ]
};
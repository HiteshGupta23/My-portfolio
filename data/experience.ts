export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechData Solutions',
    position: 'Data Analyst Intern',
    location: 'Mumbai, India',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    current: false,
    description: 'Worked on data-driven projects focusing on business intelligence, automation, and predictive analytics to support strategic decision-making.',
    achievements: [
      'Developed automated reporting system reducing manual work by 75%',
      'Created interactive dashboards improving stakeholder engagement by 60%',
      'Implemented data quality checks catching 95% of anomalies',
      'Led cross-functional project with 5 team members',
      'Presented insights to C-level executives resulting in $500K cost savings'
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Excel', 'Tableau', 'Azure'],
    companyUrl: 'https://techdata-solutions.com'
  },
  {
    id: '2',
    company: 'DataInsights Consulting',
    position: 'Junior Data Analyst',
    location: 'Remote',
    startDate: '2024-01-15',
    endDate: '2024-05-30',
    current: false,
    description: 'Specialized in customer analytics and machine learning model development for e-commerce and retail clients.',
    achievements: [
      'Built customer segmentation model improving marketing ROI by 35%',
      'Analyzed customer behavior patterns for 10+ clients',
      'Developed ETL pipelines processing 1M+ records daily',
      'Trained junior team members on advanced Excel and SQL techniques',
      'Received "Outstanding Performer" recognition for Q1 2024'
    ],
    technologies: ['Python', 'R', 'MySQL', 'Pandas', 'Scikit-learn', 'Power Query'],
    companyUrl: 'https://datainsights-consulting.com'
  },
  {
    id: '3',
    company: 'Academic Research Project',
    position: 'Data Science Researcher',
    location: 'University Lab',
    startDate: '2023-08-01',
    endDate: '2023-12-15',
    current: false,
    description: 'Conducted research on predictive modeling applications in academic performance analysis as part of final year project.',
    achievements: [
      'Developed machine learning model with 87% prediction accuracy',
      'Processed and analyzed dataset of 50,000+ student records',
      'Published research findings in university journal',
      'Presented at national student research conference',
      'Mentored 3 junior students on data analysis techniques'
    ],
    technologies: ['Python', 'Jupyter', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Statistical Analysis'],
  }
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Applied Mathematics',
    institution: 'Mumbai University',
    location: 'Mumbai, India',
    startDate: '2019-06-01',
    endDate: '2023-05-31',
    grade: 'First Class with Distinction (8.2/10 CGPA)',
    description: 'Specialized in statistical analysis, mathematical modeling, and computational mathematics with focus on data science applications.',
    coursework: [
      'Statistical Methods and Data Analysis',
      'Mathematical Modeling and Simulation',
      'Operations Research and Optimization',
      'Probability Theory and Statistics',
      'Numerical Analysis and Computing',
      'Linear Algebra and Matrix Theory'
    ]
  }
];

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Microsoft Certified: Data Analyst Associate',
    issuer: 'Microsoft',
    date: '2024-04-15',
    credentialId: 'MC-DA-2024-001',
    url: 'https://www.credly.com/badges/microsoft-certified-data-analyst'
  },
  {
    id: '2',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2024-02-28',
    credentialId: 'GDA-2024-002',
    url: 'https://www.coursera.org/account/accomplishments/certificate/google-data-analytics'
  },
  {
    id: '3',
    name: 'Power BI Data Analyst Professional',
    issuer: 'Microsoft',
    date: '2024-01-20',
    credentialId: 'PL-300-2024',
    url: 'https://www.credly.com/badges/power-bi-data-analyst'
  },
  {
    id: '4',
    name: 'Python for Data Science and Machine Learning',
    issuer: 'DataCamp',
    date: '2023-11-10',
    credentialId: 'DC-PYTHON-2023',
    url: 'https://www.datacamp.com/statement-of-accomplishment/course/python-data-science'
  }
];
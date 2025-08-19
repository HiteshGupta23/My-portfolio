export interface Project {
    slug: string;
    title: string;
    technologies: string[];
    date: string;
    problemStatement: string;
    dataUsed: string;
    methodsApplied: string;
    outcome: string;
    github?: string;
    portfolioLink?: string;
  }
  
  export const projects: Project[] = [
    {
      slug: 'sales-analysis-sql-powerbi',
      title: 'Sales Analysis Dashboard with SQL & Power BI',
      technologies: ['SQL', 'Power BI'],
      date: 'Jan 2024 - Feb 2024',
      problemStatement: 'Analyzed declining sales in retail chain to identify loss drivers.',
      dataUsed: 'Sales and customer transaction data from POS systems over 6 months.',
      methodsApplied: 'SQL queries for data extraction; Power BI for ETL, data modeling, and interactive dashboard creation.',
      outcome: 'Improved sales strategy leading to 15% increase in monthly sales after dashboard adoption.',
      github: 'https://github.com/HiteshGupta23/sales-analysis',
    },
    {
      slug: 'machine-learning-customer-churn',
      title: 'Customer Churn Prediction using Machine Learning',
      technologies: ['Python', 'Machine Learning'],
      date: 'Mar 2024 - Apr 2024',
      problemStatement: 'Built predictive model to forecast customer churn and reduce attrition.',
      dataUsed: 'Customer demographics and behavior data from CRM system.',
      methodsApplied: 'Data preprocessing and feature engineering with Python pandas; classification model using scikit-learn.',
      outcome: 'Achieved 85% accuracy, enabling targeted retention campaigns and reducing churn by 10%.',
      github: 'https://github.com/HiteshGupta23/churn-prediction',
      portfolioLink: 'https://machinelearningprojects.example.com/churn-prediction'
    }
  ];  
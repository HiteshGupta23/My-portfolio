export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: 'data-analysis' | 'machine-learning' | 'visualization' | 'automation';
  date: string;
  duration: string;
  problemStatement: string;
  dataUsed: string;
  methodsApplied: string;
  outcome: string;
  impact: string;
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sales-dashboard-powerbi',
    title: 'Interactive Sales Analytics Dashboard',
    shortDescription: 'Comprehensive Power BI dashboard analyzing retail sales performance with real-time insights.',
    fullDescription: 'Built an end-to-end analytics solution that transformed raw sales data into actionable business insights, enabling data-driven decision making across multiple departments.',
    technologies: ['Power BI', 'SQL', 'DAX', 'Excel', 'Python'],
    category: 'data-analysis',
    date: '2024-03-15',
    duration: '6 weeks',
    problemStatement: 'The retail chain was experiencing declining sales but lacked visibility into performance drivers, customer segments, and seasonal trends. Management needed real-time insights to make informed decisions.',
    dataUsed: 'Sales transaction data (500K+ records), customer demographics, product catalog, inventory levels, and marketing campaign data from multiple POS systems and CRM databases.',
    methodsApplied: 'Data extraction with SQL queries, ETL processes using Power Query, advanced DAX calculations for KPIs, statistical analysis with Python, and interactive dashboard creation with drill-down capabilities.',
    outcome: 'Delivered a comprehensive dashboard with 15+ key metrics, automated reporting, and predictive analytics that identified top-performing products and underperforming regions.',
    impact: 'Increased sales by 18% within 3 months, reduced inventory waste by 25%, and improved decision-making speed by 60% through real-time data access.',
    github: 'https://github.com/HiteshGupta23/sales-analytics-dashboard',
    featured: true,
    image: '/projects/sales-dashboard.jpg'
  },
  {
    id: '2',
    slug: 'customer-churn-prediction',
    title: 'Machine Learning Customer Churn Prediction',
    shortDescription: 'ML model predicting customer churn with 89% accuracy using ensemble techniques.',
    fullDescription: 'Developed a sophisticated machine learning pipeline to predict customer churn, enabling proactive retention strategies and reducing customer acquisition costs.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    category: 'machine-learning',
    date: '2024-02-20',
    duration: '8 weeks',
    problemStatement: 'High customer churn rate (23%) was costing the company significant revenue. The business needed to identify at-risk customers early to implement targeted retention campaigns.',
    dataUsed: 'Customer behavioral data, transaction history, support tickets, engagement metrics, and demographic information spanning 24 months from 50K+ customers.',
    methodsApplied: 'Exploratory data analysis, feature engineering, handling class imbalance with SMOTE, model comparison (Random Forest, XGBoost, Logistic Regression), hyperparameter tuning with GridSearchCV, and model validation.',
    outcome: 'Achieved 89% accuracy with Random Forest model, identified key churn predictors, and created automated scoring system for real-time churn risk assessment.',
    impact: 'Reduced churn rate by 31%, saved $2.8M in potential lost revenue, and increased customer lifetime value by 22% through targeted retention campaigns.',
    github: 'https://github.com/HiteshGupta23/customer-churn-ml',
    demo: 'https://churn-prediction-demo.streamlit.app',
    featured: true,
    image: '/projects/churn-prediction.jpg'
  },
  {
    id: '3',
    slug: 'financial-data-automation',
    title: 'Automated Financial Reporting System',
    shortDescription: 'Python-based automation reducing manual reporting time by 85% with real-time alerts.',
    fullDescription: 'Created an end-to-end automated reporting system that extracts, transforms, and visualizes financial data while providing intelligent alerts for anomalies.',
    technologies: ['Python', 'Pandas', 'SQLAlchemy', 'Power Automate', 'Tableau', 'REST APIs'],
    category: 'automation',
    date: '2024-01-10',
    duration: '5 weeks',
    problemStatement: 'Finance team spent 40+ hours weekly on manual report generation, leading to delays in decision-making and increased risk of human errors in critical financial data.',
    dataUsed: 'Multi-source financial data including ERP systems, bank APIs, expense management platforms, and budget tracking tools with real-time data feeds.',
    methodsApplied: 'API integration for data extraction, ETL pipeline development, anomaly detection algorithms, automated email reporting, exception handling, and dashboard creation with Tableau.',
    outcome: 'Fully automated reporting system generating 12 different financial reports with real-time data updates, anomaly alerts, and interactive dashboards.',
    impact: 'Reduced manual reporting time from 40 to 6 hours per week (85% reduction), eliminated 98% of data entry errors, and improved report accuracy to 99.7%.',
    github: 'https://github.com/HiteshGupta23/financial-automation',
    featured: false,
    image: '/projects/financial-automation.jpg'
  },
  {
    id: '4',
    slug: 'social-media-sentiment',
    title: 'Social Media Sentiment Analysis Tool',
    shortDescription: 'Real-time sentiment analysis of brand mentions across social platforms using NLP.',
    fullDescription: 'Built a comprehensive sentiment analysis system that monitors brand reputation across social media platforms and provides actionable insights for marketing teams.',
    technologies: ['Python', 'NLTK', 'spaCy', 'Twitter API', 'MongoDB', 'Plotly', 'Streamlit'],
    category: 'data-analysis',
    date: '2023-12-05',
    duration: '7 weeks',
    problemStatement: 'Marketing team lacked real-time insights into brand sentiment across social media, missing opportunities for engagement and crisis management.',
    dataUsed: 'Social media data from Twitter, Facebook, and Instagram APIs, including posts, comments, mentions, and engagement metrics totaling 100K+ data points weekly.',
    methodsApplied: 'Natural language processing with NLTK and spaCy, sentiment classification using VADER and custom models, real-time data streaming, trend analysis, and interactive visualization.',
    outcome: 'Developed real-time sentiment monitoring dashboard with 92% accuracy in sentiment classification, automated alerts for negative sentiment spikes, and trend analysis.',
    impact: 'Improved social media response time by 70%, increased positive engagement by 45%, and prevented 3 potential PR crises through early detection.',
    github: 'https://github.com/HiteshGupta23/sentiment-analysis',
    demo: 'https://sentiment-monitor.herokuapp.com',
    featured: false,
    image: '/projects/sentiment-analysis.jpg'
  }
];
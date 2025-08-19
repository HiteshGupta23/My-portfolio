export interface ExperienceEntry {
    company: string;
    role: string;
    dates: string;
    impact: string[];
  }
  
  export const experience: ExperienceEntry[] = [
    {
      company: "Ineuron AI (Pearson)",
      role: "Data Analyst Intern",
      dates: "Jun 2024 - Aug 2024",
      impact: [
        "Developed dashboards using Power BI to visualize key metrics, improving team transparency.",
        "Automated data cleaning scripts with Python, reducing manual effort by 30%.",
        "Collaborated with cross-functional teams to identify analytic opportunities."
      ]
    },
    {
      company: "XYZ Analytics",
      role: "Junior Data Analyst",
      dates: "Jan 2023 - May 2024",
      impact: [
        "Built SQL queries to extract sales data, enabling detailed monthly reports.",
        "Created Excel MIS dashboards to streamline performance tracking."
      ]
    }
  ];  
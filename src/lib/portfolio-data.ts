export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  note?: string;
};

export const profile = {
  name: "Saeid Rajabi",
  headline: "Ph.D. Candidate in Computer Engineering",
  institution: "University of Delaware",
  advisor: "Prof. Satwik Patnaik",
  email: "srajabi@udel.edu",
  location: "Newark, Delaware, United States",
  summary:
    "I work at the intersection of hardware security, machine learning, and computer architecture. My current focus includes formal verification workflows, logic locking, and resilient IP protection methods for modern hardware systems.",
  cta: {
    linkedin: "https://www.linkedin.com/in/saeidrajabi/",
    scholar: "https://scholar.google.com/citations?user=J7tfXlAAAAAJ&hl=en",
  },
};

export const researchInterests = [
  "Hardware Security",
  "Machine Learning for EDA",
  "Computer Architecture",
  "IP Protection and Logic Locking",
  "Formal Verification",
];

export const news = [
  {
    date: "January 2026",
    text: "Released STELLAR, a structure-guided LLM framework for assertion retrieval and generation in formal verification (arXiv).",
  },
  {
    date: "2025",
    text: "Published a key-recovery attack study on enhanced PSLL techniques in IEEE Embedded Systems Letters.",
  },
  {
    date: "Current",
    text: "Continuing Ph.D. research at the University of Delaware on secure and trustworthy hardware systems.",
  },
];

export const publications: Publication[] = [
  {
    title:
      "STELLAR: Structure-guided LLM Assertion Retrieval and Generation for Formal Verification",
    authors: "S Rajabi, C Yang, S Patnaik",
    venue: "arXiv preprint arXiv:2601.19903",
    year: "2025",
    link: "https://arxiv.org/abs/2601.19903",
    note: "Focus: LLM-assisted formal verification",
  },
  {
    title: "Key-Recovery Attack on Enhanced PSLL Techniques",
    authors: "S Rajabi, C Yang, S Patnaik",
    venue: "IEEE Embedded Systems Letters",
    year: "2025",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=J7tfXlAAAAAJ&citation_for_view=J7tfXlAAAAAJ:u5HHmVD_uO8C",
    note: "Focus: hardware locking attack analysis",
  },
];

export const activities = [
  "Research and collaboration in secure hardware and verification pipelines",
  "Paper writing and technical reviewing in hardware security and EDA-adjacent topics",
  "Mentoring and peer collaboration in graduate research settings",
];

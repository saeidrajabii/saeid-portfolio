export type NavItem = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
};

export type Talk = {
  title: string;
  event: string;
  date: string;
  location: string;
  url?: string;
};

export type TeachingItem = {
  course: string;
  role: string;
  term: string;
  notes: string;
};

export type Project = {
  name: string;
  description: string;
  url?: string;
};

export type Post = {
  title: string;
  date: string;
  summary: string;
};

export const siteTitle = "Saeid Rajabi / Academic Portfolio";

export const navItems: NavItem[] = [
  { label: "Publications", href: "/publications" },
  { label: "Talks", href: "/talks" },
  { label: "Teaching", href: "/teaching" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog Posts", href: "/year-archive" },
  { label: "CV", href: "/cv" },
  { label: "Guide", href: "/markdown" },
];

export const profile = {
  name: "Saeid Rajabi",
  shortBio:
    "Ph.D. Candidate in Computer Engineering at the University of Delaware, focusing on hardware security, machine learning, and computer architecture.",
  location: "Newark, Delaware, USA",
  institution: "University of Delaware",
  email: "srajabi@udel.edu",
  scholar: "https://scholar.google.com/citations?user=J7tfXlAAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/saeidrajabi/",
  github: "https://github.com/saeidrajabii",
  avatar: "https://scholar.google.com/citations/images/avatar_scholar_128.png",
};

export const homeSections = {
  introTitle: "Welcome",
  intro: [
    "I am a Ph.D. candidate at the University of Delaware. My research sits at the intersection of hardware security, formal verification, and machine learning for EDA workflows.",
    "I am particularly interested in logic locking, resilient IP protection, and practical security evaluation frameworks for digital systems.",
    "This site mirrors the structure of an academic profile: publications, talks, teaching, projects, and a concise CV.",
  ],
  interests: [
    "Hardware Security",
    "Machine Learning",
    "Computer Architecture",
    "IP Protection",
    "Formal Verification",
  ],
};

export const publications: Publication[] = [
  {
    title:
      "STELLAR: Structure-guided LLM Assertion Retrieval and Generation for Formal Verification",
    authors: "S Rajabi, C Yang, S Patnaik",
    venue: "arXiv preprint arXiv:2601.19903",
    year: "2025",
    url: "https://arxiv.org/abs/2601.19903",
  },
  {
    title: "Key-Recovery Attack on Enhanced PSLL Techniques",
    authors: "S Rajabi, C Yang, S Patnaik",
    venue: "IEEE Embedded Systems Letters",
    year: "2025",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=J7tfXlAAAAAJ&citation_for_view=J7tfXlAAAAAJ:u5HHmVD_uO8C",
  },
];

export const talks: Talk[] = [
  {
    title: "Structure-guided LLM Methods for Assertion Generation",
    event: "Research Group Seminar",
    date: "2026-01-15",
    location: "University of Delaware",
    url: "https://arxiv.org/abs/2601.19903",
  },
  {
    title: "Security Analysis of PSLL Enhancements",
    event: "Hardware Security Discussion Series",
    date: "2025-10-02",
    location: "University of Delaware",
  },
];

export const teaching: TeachingItem[] = [
  {
    course: "Digital Design and Computer Architecture",
    role: "Teaching Assistant",
    term: "2024-2025",
    notes: "Supported lab sessions, assignment evaluation, and office hours.",
  },
  {
    course: "Introduction to Hardware Security",
    role: "Teaching Assistant",
    term: "2025",
    notes: "Facilitated discussions on logic locking, attacks, and defenses.",
  },
];

export const projects: Project[] = [
  {
    name: "STELLAR",
    description:
      "LLM-assisted assertion retrieval and generation pipeline for formal verification workflows.",
    url: "https://arxiv.org/abs/2601.19903",
  },
  {
    name: "PSLL Security Analysis",
    description:
      "Key-recovery attack methodology for evaluating enhanced PSLL locking techniques.",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=J7tfXlAAAAAJ&citation_for_view=J7tfXlAAAAAJ:u5HHmVD_uO8C",
  },
];

export const posts: Post[] = [
  {
    title: "How we evaluate logic locking robustness in practice",
    date: "2026-02-10",
    summary: "A practical checklist for attack modeling and evaluation consistency.",
  },
  {
    title: "Integrating LLMs into formal verification workflows",
    date: "2026-01-25",
    summary: "Lessons learned while building structure-guided assertion generation tools.",
  },
];

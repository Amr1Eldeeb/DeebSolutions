export interface Service {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  features: string[];
  featuresAr: string[];
  category: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  icon: string;
  badge?: string;
  badgeAr?: string;
  features: string[];
  featuresAr: string[];
}

export interface Solution {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  color: string;
  services: string[];
}

export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  industry: string;
  industryAr: string;
  description: string;
  descriptionAr: string;
  technologies: string[];
  image: string;
  category: string;
  year: number;
  results: string[];
  resultsAr: string[];
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  industry: string;
  industryAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  results: CaseStudyResult[];
  technologies: string[];
  image: string;
  duration: string;
}

export interface CaseStudyResult {
  metric: string;
  metricAr: string;
  value: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  author: string;
  authorAr: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
}

export interface CareerPosition {
  id: number;
  title: string;
  titleAr: string;
  department: string;
  departmentAr: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  level: string;
  levelAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
  posted: string;
}

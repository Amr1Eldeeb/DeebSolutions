export interface NavLink {
  label: string;
  labelAr: string;
  route: string;
  children?: NavLink[];
}

export interface Stat {
  value: string;
  label: string;
  labelAr: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  title: string;
  titleAr: string;
  company: string;
  content: string;
  contentAr: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  open?: boolean;
}

export interface Industry {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  link: string;
}

export interface HeroSlide {
  eyebrow: string;
  eyebrowAr: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  ctaPrimary: string;
  ctaPrimaryAr: string;
  ctaSecondary: string;
  ctaSecondaryAr: string;
  ctaLink: string;
}

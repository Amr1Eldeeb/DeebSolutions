import { Injectable } from '@angular/core';
import { PortfolioItem, CaseStudy, BlogPost, CareerPosition } from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class ContentDataService {

  private portfolio: PortfolioItem[] = [
    {
      id: 1, slug: 'digital-platform',
      title: 'Digital Operations Platform',
      titleAr: 'منصة العمليات الرقمية لأرامو',
      client: 'Saudi Aramo', industry: 'Oil & Energy', industryAr: 'النفط والطاقة',
      description: 'A comprehensive digital operations platform streamlining procurement, maintenance, and field operations across 15 facilities.',
      descriptionAr: 'منصة عمليات رقمية شاملة تبسط عمليات الشراء والصيانة والعمليات الميدانية عبر 15 منشأة.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure', 'Power BI'],
      image: 'assets/images/portfolio-1.jpg',
      category: 'Enterprise Platform', year: 2024,
      results: ['40% reduction in operational costs', '3x faster procurement cycles', '99.9% system uptime'],
      resultsAr: ['تخفيض 40% في التكاليف التشغيلية', 'دورات شراء أسرع بـ 3 مرات', 'وقت تشغيل 99.9%']
    },
    {
      id: 2, slug: 'stc-customer-portal',
      title: 'STC Customer Self-Service Portal',
      titleAr: 'بوابة خدمة العملاء الذاتية لـ STC',
      client: 'Saudi Telecom Company', industry: 'Telecom', industryAr: 'الاتصالات',
      description: 'Unified customer portal serving 2M+ subscribers with billing, support, and service management capabilities.',
      descriptionAr: 'بوابة عملاء موحدة تخدم أكثر من 2 مليون مشترك بقدرات الفوترة والدعم وإدارة الخدمات.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis'],
      image: 'assets/images/portfolio-2.jpg',
      category: 'Customer Portal', year: 2023,
      results: ['2M+ active users', '60% reduction in support tickets', '4.8/5 customer satisfaction'],
      resultsAr: ['أكثر من 2 مليون مستخدم نشط', 'تخفيض 60% في تذاكر الدعم', '4.8/5 رضا العملاء']
    },
    {
      id: 3, slug: 'bank-core-modernization',
      title: 'Bank Core Banking Modernization',
      titleAr: 'تحديث الخدمات المصرفية الأساسية',
      client: 'Al Rajhi Bank', industry: 'Banking & Finance', industryAr: 'البنوك والتمويل',
      description: 'Complete core banking system modernization with microservices architecture handling 500K daily transactions.',
      descriptionAr: 'تحديث شامل لنظام الخدمات المصرفية الأساسية بمعمارية خدمات مصغرة تعالج 500 ألف معاملة يومياً.',
      technologies: ['Java Spring', 'Kubernetes', 'Oracle', 'Kafka', 'OpenShift'],
      image: 'assets/images/portfolio-3.jpg',
      category: 'Core Banking', year: 2024,
      results: ['500K daily transactions', '99.99% availability', '70% faster processing'],
      resultsAr: ['500 ألف معاملة يومية', 'توافر 99.99%', 'معالجة أسرع بـ 70%']
    }
  ];

  private caseStudies: CaseStudy[] = [
    {
      id: 1, slug: 'manufacturing-erp-transformation',
      title: 'Manufacturing ERP Transformation',
      titleAr: 'تحول ERP في قطاع التصنيع',
      client: 'National Industries Group',
      industry: 'Manufacturing', industryAr: 'التصنيع',
      challenge: 'Legacy ERP systems causing production delays and data silos across 8 manufacturing plants.',
      challengeAr: 'أنظمة ERP قديمة تسبب تأخيرات في الإنتاج وصوامع بيانات عبر 8 مصانع.',
      solution: 'Deployed DS ERP Suite with custom manufacturing modules, real-time production dashboards, and IoT integration.',
      solutionAr: 'نشر DS ERP Suite مع وحدات تصنيع مخصصة ولوحات إنتاج في الوقت الفعلي وتكامل IoT.',
      results: [
        { metric: 'Production Efficiency', metricAr: 'كفاءة الإنتاج', value: '+45%', icon: '📈' },
        { metric: 'Cost Reduction', metricAr: 'تخفيض التكلفة', value: '32%', icon: '💰' },
        { metric: 'Downtime Reduction', metricAr: 'تقليل وقت التوقف', value: '67%', icon: '⏱️' },
        { metric: 'ROI', metricAr: 'العائد على الاستثمار', value: '280%', icon: '🎯' }
      ],
      technologies: ['DS ERP', 'Azure IoT', 'Power BI', 'SQL Server'],
      image: 'assets/images/case-1.jpg',
      duration: '18 months'
    }
  ];

  private blogPosts: BlogPost[] = [
    {
      id: 1, slug: 'digital-transformation-2025',
      title: 'Digital Transformation Trends Shaping 2025',
      titleAr: 'اتجاهات التحول الرقمي التي تشكل 2025',
      excerpt: 'Explore the key digital transformation trends enterprises must adopt to stay competitive in 2025 and beyond.',
      excerptAr: 'استكشف اتجاهات التحول الرقمي الرئيسية التي يجب على المؤسسات اعتمادها للبقاء تنافسية في عام 2025 وما بعده.',
      category: 'Digital Transformation', categoryAr: 'التحول الرقمي',
      author: 'Ahmed Al-Rashid', authorAr: 'أحمد الراشد',
      date: '2025-01-15', readTime: 7,
      image: 'assets/images/blog-1.jpg',
      tags: ['Digital Transformation', 'Enterprise', 'Technology']
    },
    {
      id: 2, slug: 'erp-implementation-guide',
      title: 'The Complete Guide to ERP Implementation',
      titleAr: 'الدليل الشامل لتنفيذ ERP',
      excerpt: 'A step-by-step guide to successful ERP implementation for large enterprises, covering planning to go-live.',
      excerptAr: 'دليل خطوة بخطوة للتنفيذ الناجح لـ ERP في المؤسسات الكبيرة، من التخطيط حتى الإطلاق.',
      category: 'ERP', categoryAr: 'إدارة موارد المؤسسة',
      author: 'Sara Al-Mansouri', authorAr: 'سارة المنصوري',
      date: '2025-01-08', readTime: 12,
      image: 'assets/images/blog-2.jpg',
      tags: ['ERP', 'Implementation', 'Best Practices']
    },
    {
      id: 3, slug: 'cloud-migration-best-practices',
      title: 'Cloud Migration Best Practices for Enterprises',
      titleAr: 'أفضل ممارسات الهجرة السحابية للمؤسسات',
      excerpt: 'Essential strategies and best practices for migrating enterprise workloads to the cloud with minimal risk.',
      excerptAr: 'استراتيجيات وأفضل ممارسات أساسية لنقل أحمال عمل المؤسسة إلى السحابة بأقل قدر من المخاطر.',
      category: 'Cloud', categoryAr: 'سحابة',
      author: 'Mohammed Al-Zaidi', authorAr: 'محمد الزيدي',
      date: '2024-12-22', readTime: 9,
      image: 'assets/images/blog-3.jpg',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure']
    }
  ];

  private careers: CareerPosition[] = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer', titleAr: 'مطور متكامل أول',
      department: 'Engineering', departmentAr: 'الهندسة',
      location: 'Riyadh, Saudi Arabia', type: 'full-time',
      level: 'Senior', levelAr: 'أول',
      description: 'Join our engineering team to build enterprise-scale applications for Fortune 500 clients.',
      descriptionAr: 'انضم إلى فريق الهندسة لدينا لبناء تطبيقات على مستوى المؤسسات لعملاء Fortune 500.',
      requirements: ['5+ years experience', 'Angular/React expertise', '.NET Core or Node.js', 'Cloud platforms (AWS/Azure)'],
      requirementsAr: ['5+ سنوات خبرة', 'خبرة Angular/React', '.NET Core أو Node.js', 'منصات سحابية (AWS/Azure)'],
      posted: '2025-01-10'
    },
    {
      id: 2,
      title: 'ERP Solution Consultant', titleAr: 'مستشار حلول ERP',
      department: 'Consulting', departmentAr: 'الاستشارات',
      location: 'Dubai, UAE', type: 'full-time',
      level: 'Mid-Senior', levelAr: 'متوسط-أول',
      description: 'Lead ERP implementation projects for large enterprise clients across GCC region.',
      descriptionAr: 'قيادة مشاريع تنفيذ ERP لعملاء المؤسسات الكبيرة في منطقة دول الخليج.',
      requirements: ['SAP or Oracle certification', '4+ years ERP experience', 'Arabic language fluency', 'Project management skills'],
      requirementsAr: ['شهادة SAP أو Oracle', '4+ سنوات خبرة ERP', 'إتقان اللغة العربية', 'مهارات إدارة المشاريع'],
      posted: '2025-01-05'
    }
  ];

  getPortfolio(): PortfolioItem[] { return this.portfolio; }
  getCaseStudies(): CaseStudy[] { return this.caseStudies; }
  getBlogPosts(): BlogPost[] { return this.blogPosts; }
  getCareers(): CareerPosition[] { return this.careers; }

  getPortfolioItem(slug: string): PortfolioItem | undefined { return this.portfolio.find(p => p.slug === slug); }
  getCaseStudy(slug: string): CaseStudy | undefined { return this.caseStudies.find(c => c.slug === slug); }
  getBlogPost(slug: string): BlogPost | undefined { return this.blogPosts.find(b => b.slug === slug); }
}

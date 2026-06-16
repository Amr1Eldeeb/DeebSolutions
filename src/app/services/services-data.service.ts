import { Injectable } from '@angular/core';
import { Service } from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class ServicesDataService {
  private services: Service[] = [
    {
      id: 1, slug: 'enterprise-software-development',
      title: 'Enterprise Software Development',
      titleAr: 'تطوير البرمجيات المؤسسية',
      description: 'Custom enterprise-grade software solutions designed to scale with your organization, built with modern architectures and best practices.',
      descriptionAr: 'حلول برمجية مؤسسية مخصصة مصممة للتوسع مع مؤسستك، مبنية باستخدام أحدث المعماريات وأفضل الممارسات.',
      icon: '💻',
      category: 'development',
      features: ['Microservices Architecture', 'Cloud-Native Solutions', 'API Integration', 'Legacy Modernization'],
      featuresAr: ['معمارية الخدمات المصغرة', 'حلول سحابية أصلية', 'تكامل واجهات برمجية', 'تحديث الأنظمة القديمة']
    },
    {
      id: 2, slug: 'digital-transformation',
      title: 'Digital Transformation',
      titleAr: 'التحول الرقمي',
      description: 'End-to-end digital transformation consulting and implementation, helping enterprises modernize their operations and customer experiences.',
      descriptionAr: 'استشارات وتنفيذ التحول الرقمي الشامل، مما يساعد المؤسسات على تحديث عملياتها وتجارب عملائها.',
      icon: '🔄',
      category: 'consulting',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Innovation Labs'],
      featuresAr: ['أتمتة العمليات', 'الاستراتيجية الرقمية', 'إدارة التغيير', 'مختبرات الابتكار']
    },
    {
      id: 3, slug: 'cloud-solutions',
      title: 'Cloud Solutions',
      titleAr: 'الحلول السحابية',
      description: 'Comprehensive cloud migration, architecture, and managed services across AWS, Azure, and Google Cloud platforms.',
      descriptionAr: 'خدمات شاملة للهجرة السحابية والمعمارية والخدمات المُدارة عبر منصات AWS وAzure وGoogle Cloud.',
      icon: '☁️',
      category: 'cloud',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'DevOps & CI/CD', 'Cost Optimization'],
      featuresAr: ['هجرة سحابية', 'استراتيجية متعددة السحب', 'DevOps والتسليم المستمر', 'تحسين التكاليف']
    },
    {
      id: 4, slug: 'data-analytics',
      title: 'Data & Analytics',
      titleAr: 'البيانات والتحليلات',
      description: 'Transform raw data into strategic insights with our advanced analytics, BI solutions, and data engineering services.',
      descriptionAr: 'حوّل البيانات الخام إلى رؤى استراتيجية من خلال التحليلات المتقدمة وحلول ذكاء الأعمال وخدمات هندسة البيانات.',
      icon: '📊',
      category: 'data',
      features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Real-time Dashboards'],
      featuresAr: ['ذكاء الأعمال', 'مستودعات البيانات', 'التحليلات التنبؤية', 'لوحات معلومات في الوقت الفعلي']
    },
    {
      id: 5, slug: 'cybersecurity',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      description: 'Comprehensive security assessment, implementation, and managed security services to protect your critical business assets.',
      descriptionAr: 'تقييم أمني شامل وتنفيذ وخدمات أمن مُدارة لحماية أصول أعمالك الحيوية.',
      icon: '🔒',
      category: 'security',
      features: ['Security Assessment', 'Compliance Management', 'Threat Detection', 'Security Architecture'],
      featuresAr: ['تقييم الأمان', 'إدارة الامتثال', 'اكتشاف التهديدات', 'معمارية الأمن']
    },
    {
      id: 6, slug: 'erp-consulting',
      title: 'ERP Consulting',
      titleAr: 'استشارات ERP',
      description: 'Expert SAP, Oracle, and Microsoft Dynamics implementation, customization, and support for large enterprises.',
      descriptionAr: 'خبرة في تنفيذ وتخصيص ودعم SAP وOracle وMicrosoft Dynamics للمؤسسات الكبيرة.',
      icon: '🏗️',
      category: 'consulting',
      features: ['SAP Implementation', 'Oracle ERP', 'Microsoft Dynamics', 'ERP Integration'],
      featuresAr: ['تنفيذ SAP', 'Oracle ERP', 'Microsoft Dynamics', 'تكامل ERP']
    }
  ];

  getAll(): Service[] { return this.services; }
  getById(id: number): Service | undefined { return this.services.find(s => s.id === id); }
  getBySlug(slug: string): Service | undefined { return this.services.find(s => s.slug === slug); }
  getByCategory(category: string): Service[] { return this.services.filter(s => s.category === category); }
}

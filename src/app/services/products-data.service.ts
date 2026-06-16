import { Injectable } from '@angular/core';
import { Product } from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class ProductsDataService {
  private products: Product[] = [
    {
      id: 1, slug: 'ds-erp',
      name: 'DS ERP Suite', nameAr: 'نظام DS لإدارة الموارد',
      description: 'A fully integrated ERP platform designed for mid-to-large enterprises across GCC and MENA regions with full Arabic support.',
      descriptionAr: 'منصة ERP متكاملة بالكامل مصممة للمؤسسات المتوسطة والكبيرة في منطقة الخليج والشرق الأوسط مع دعم كامل للغة العربية.',
      category: 'ERP', categoryAr: 'إدارة موارد المؤسسة',
      icon: '🏢', badge: 'Most Popular', badgeAr: 'الأكثر شعبية',
      features: ['Financial Management', 'HR & Payroll', 'Supply Chain', 'Project Management', 'Arabic Support'],
      featuresAr: ['الإدارة المالية', 'الموارد البشرية والرواتب', 'سلسلة التوريد', 'إدارة المشاريع', 'دعم اللغة العربية']
    },
    {
      id: 2, slug: 'ds-crm',
      name: 'DS CRM Pro', nameAr: 'DS CRM للعملاء',
      description: 'Customer relationship management platform with sales pipeline, marketing automation, and 360° customer view.',
      descriptionAr: 'منصة إدارة علاقات العملاء مع خط أنابيب المبيعات وأتمتة التسويق وعرض 360 درجة للعملاء.',
      category: 'CRM', categoryAr: 'إدارة علاقات العملاء',
      icon: '🤝', badge: 'New', badgeAr: 'جديد',
      features: ['Sales Pipeline', 'Lead Management', 'Email Automation', 'Analytics Dashboard', 'Mobile App'],
      featuresAr: ['خط أنابيب المبيعات', 'إدارة العملاء المحتملين', 'أتمتة البريد الإلكتروني', 'لوحة تحليلات', 'تطبيق جوال']
    },
    {
      id: 3, slug: 'ds-hrms',
      name: 'DS HRMS', nameAr: 'DS لإدارة الموارد البشرية',
      description: 'Complete human resources management with payroll, attendance, recruitment, and performance evaluation.',
      descriptionAr: 'إدارة شاملة للموارد البشرية مع الرواتب والحضور والتوظيف وتقييم الأداء.',
      category: 'HR', categoryAr: 'موارد بشرية',
      icon: '👥',
      features: ['Payroll Processing', 'Attendance Tracking', 'Recruitment', 'Performance Reviews', 'GOSI Integration'],
      featuresAr: ['معالجة الرواتب', 'تتبع الحضور', 'التوظيف', 'تقييمات الأداء', 'تكامل مع التأمينات']
    },
    {
      id: 4, slug: 'ds-analytics',
      name: 'DS Analytics', nameAr: 'DS للتحليلات',
      description: 'Business intelligence and analytics platform with real-time dashboards, custom reports, and predictive insights.',
      descriptionAr: 'منصة ذكاء الأعمال والتحليلات مع لوحات معلومات في الوقت الفعلي وتقارير مخصصة ورؤى تنبؤية.',
      category: 'Analytics', categoryAr: 'تحليلات',
      icon: '📈',
      features: ['Real-time Dashboards', 'Custom Reports', 'KPI Tracking', 'Data Connectors', 'Export & Share'],
      featuresAr: ['لوحات معلومات فورية', 'تقارير مخصصة', 'تتبع مؤشرات الأداء', 'موصلات البيانات', 'تصدير ومشاركة']
    }
  ];

  getAll(): Product[] { return this.products; }
  getById(id: number): Product | undefined { return this.products.find(p => p.id === id); }
  getBySlug(slug: string): Product | undefined { return this.products.find(p => p.slug === slug); }
}

import { Component } from '@angular/core';

interface Industry {
  name: string;
  icon: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-industry-cards',
  standalone: true,
  imports: [],
  templateUrl: './industry-cards.html',
  styleUrl: './industry-cards.scss'
})
export class IndustryCardsComponent {
  industries: Industry[] = [
    { name: 'الطاقة والنفط',        icon: '⚡', description: 'حلول متكاملة لشركات النفط والغاز والطاقة المتجددة', color: '#f59e0b' },
    { name: 'البنوك والتمويل',       icon: '🏦', description: 'تحول رقمي لقطاع الخدمات المالية والمصرفية',         color: '#1a56db' },
    { name: 'الاتصالات',             icon: '📡', description: 'منصات متقدمة لشركات الاتصالات ومزودي الخدمات',     color: '#7c3aed' },
    { name: 'الرعاية الصحية',        icon: '🏥', description: 'أنظمة رقمية لتحسين جودة الرعاية الصحية',           color: '#10b981' },
    { name: 'التصنيع والصناعة',     icon: '🏭', description: 'Industry 4.0 وأتمتة العمليات الصناعية',            color: '#ef4444' },
    { name: 'التجزئة والتجارة',      icon: '🛒', description: 'تجارة إلكترونية متكاملة وإدارة سلسلة التوريد',     color: '#06b6d4' },
    { name: 'الحكومة والقطاع العام', icon: '🏛️', description: 'تحديث خدمات حكومية ورقمنة الإجراءات',             color: '#64748b' },
    { name: 'التعليم والبحث',        icon: '🎓', description: 'منصات تعليمية ذكية وأنظمة إدارة المعرفة',          color: '#f97316' },
  ];
}

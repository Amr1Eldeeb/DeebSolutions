import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = {
    solutions: [
      { label: 'التحول الرقمي', route: '/solutions' },
      { label: 'الحلول السحابية', route: '/solutions' },
      { label: 'تطوير البرمجيات', route: '/solutions' },
      { label: 'الأمن السيبراني', route: '/solutions' },
      { label: 'البيانات والتحليلات', route: '/solutions' },
    ],
    company: [
      { label: 'من نحن', route: '/about' },
      { label: 'أعمالنا', route: '/portfolio' },
      { label: 'دراسات الحالة', route: '/case-studies' },
      { label: 'المدونة', route: '/blog' },
      { label: 'وظائف', route: '/careers' },
    ],
    products: [
      { label: 'DS ERP Suite', route: '/products' },
      { label: 'DS CRM Pro', route: '/products' },
      { label: 'DS HRMS', route: '/products' },
      { label: 'DS Analytics', route: '/products' },
    ],
    support: [
      { label: 'تواصل معنا', route: '/contact' },
      { label: 'الموارد', route: '/resources' },
      { label: 'الدعم الفني', route: '/contact' },
      { label: 'سياسة الخصوصية', route: '/about' },
    ]
  };

  socials = [
    { label: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
    { label: 'Twitter', icon: 'X', url: 'https://twitter.com' },
    { label: 'YouTube', icon: '▶', url: 'https://youtube.com' },
  ];
}

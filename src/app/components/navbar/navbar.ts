import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  labelAr: string;
  route: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', labelAr: 'الرئيسية', route: '/' },
    { label: 'Solutions', labelAr: 'الحلول', route: '/solutions' },
    {
      label: 'Services', labelAr: 'الخدمات', route: '/services',
      children: [
        { label: 'Enterprise Software', labelAr: 'برمجيات مؤسسية', route: '/services/enterprise' },
        { label: 'Digital Transformation', labelAr: 'التحول الرقمي', route: '/services/digital' },
        { label: 'Cloud Solutions', labelAr: 'الحلول السحابية', route: '/services/cloud' },
        { label: 'Data & Analytics', labelAr: 'البيانات والتحليلات', route: '/services/data' },
        { label: 'Cybersecurity', labelAr: 'الأمن السيبراني', route: '/services/security' },
      ]
    },
    { label: 'Industries', labelAr: 'القطاعات', route: '/industries' },
    { label: 'Products', labelAr: 'المنتجات', route: '/products' },
    {
      label: 'Company', labelAr: 'الشركة', route: '/about',
      children: [
        { label: 'About Us', labelAr: 'من نحن', route: '/about' },
        { label: 'Portfolio', labelAr: 'أعمالنا', route: '/portfolio' },
        { label: 'Case Studies', labelAr: 'دراسات الحالة', route: '/case-studies' },
        { label: 'Careers', labelAr: 'وظائف', route: '/careers' },
      ]
    },
    { label: 'Blog', labelAr: 'المدونة', route: '/blog' },
    { label: 'Contact', labelAr: 'تواصل معنا', route: '/contact' },
  ];

  // تأثير التمرير
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }

  // إغلاق القوائم عند النقر خارجها
  @HostListener('document:click')
  onDocumentClick(): void {
    this.activeDropdown.set(null);
  }

  // فتح/إغلاق قائمة الموبايل
  toggleMobileMenu(event: Event): void {
    event.stopPropagation();
    this.mobileMenuOpen.update(v => !v);
  }

  // فتح/إغلاق القائمة المنسدلة للديسكتوب والموبايل
  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown.update(v => v === label ? null : label);
  }

  // إغلاق كل شيء عند الانتقال لصفحة أخرى
  closeAll(): void {
    this.mobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }
}
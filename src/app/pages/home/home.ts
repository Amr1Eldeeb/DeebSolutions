import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero';
import { ServiceCardsComponent } from '../../components/service-cards/service-cards';
import { StatsSectionComponent } from '../../components/stats-section/stats-section';
import { IndustryCardsComponent } from '../../components/industry-cards/industry-cards';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';
import { ServicesDataService } from '../../services/services-data.service';
import { ContentDataService } from '../../services/content-data.service';
import { Service } from '../../models/content.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    ServiceCardsComponent,
    StatsSectionComponent,
    IndustryCardsComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  private servicesSvc = inject(ServicesDataService);
  private contentSvc  = inject(ContentDataService);

  services: Service[] = [];
  portfolio = this.contentSvc.getPortfolio();
  blogPosts = this.contentSvc.getBlogPosts().slice(0, 3);

  process = [
    { step: '01', title: 'التحليل والاستراتيجية', desc: 'ندرس وضعك الحالي ونضع استراتيجية تقنية متكاملة تناسب أهداف مؤسستك.' },
    { step: '02', title: 'التصميم والتخطيط',      desc: 'نصمم حلاً مخصصاً مع خارطة طريق واضحة وجداول زمنية قابلة للقياس.' },
    { step: '03', title: 'التطوير والتنفيذ',       desc: 'ننفذ الحل باحترافية عالية وفق منهجية Agile مع تحديثات منتظمة.' },
    { step: '04', title: 'التسليم والدعم',          desc: 'نسلم المشروع مع ضمان جودة كامل ودعم مستمر بعد الإطلاق.' },
  ];

  ngOnInit(): void {
    this.services = this.servicesSvc.getAll().slice(0, 6);
  }
}

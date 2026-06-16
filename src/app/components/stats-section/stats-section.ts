import { Component, Input } from '@angular/core';

interface Stat {
  value: string;
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss'
})
export class StatsSectionComponent {
  @Input() title = 'أرقام تتحدث عن نفسها';
  @Input() subtitle = 'نتائج حقيقية لعملاء حقيقيين عبر مختلف القطاعات';

  @Input() stats: Stat[] = [
    { value: '+200', label: 'مشروع مكتمل', icon: '🏆', description: 'عبر 12 دولة في المنطقة' },
    { value: '+50',  label: 'عميل مؤسسي',  icon: '🤝', description: 'من كبرى الشركات في المنطقة' },
    { value: '98%',  label: 'رضا العملاء',  icon: '⭐', description: 'معدل الرضا في التقييمات' },
    { value: '15+',  label: 'سنة من الخبرة', icon: '📅', description: 'في قطاع التقنية والاستشارات' },
  ];
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  values = [
    { icon: '🎯', title: 'الاحترافية',   desc: 'نلتزم بأعلى معايير الجودة في كل ما نقدمه.' },
    { icon: '🤝', title: 'الشراكة',      desc: 'نبني علاقات استراتيجية قائمة على الثقة المتبادلة.' },
    { icon: '💡', title: 'الابتكار',     desc: 'نبحث دائماً عن حلول مبتكرة ومستدامة.' },
    { icon: '🌍', title: 'الاستدامة',    desc: 'نراعي الأثر الإيجابي لتقنياتنا على المجتمع.' },
  ];

  team = [
    { name: 'أحمد الراشد',     title: 'الرئيس التنفيذي',     initial: 'أ' },
    { name: 'سارة المنصوري',   title: 'مديرة التقنية CTO',   initial: 'س' },
    { name: 'محمد الزيدي',    title: 'مدير العمليات COO',    initial: 'م' },
    { name: 'ليلى القحطاني',  title: 'مديرة المشاريع',      initial: 'ل' },
  ];
}

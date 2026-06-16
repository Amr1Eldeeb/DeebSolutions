import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  stats = [
    { value: '+200', label: 'مشروع مكتمل', icon: '🏆' },
    { value: '+50',  label: 'عميل مؤسسي',  icon: '🤝' },
    { value: '15+',  label: 'سنة من الخبرة', icon: '📅' },
    { value: '12',   label: 'دولة نعمل فيها', icon: '🌍' },
  ];
}

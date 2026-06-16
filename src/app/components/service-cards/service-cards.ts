import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../models/content.models';

@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-cards.html',
  styleUrl: './service-cards.scss'
})
export class ServiceCardsComponent {
  @Input() services: Service[] = [];
  @Input() title = 'خدماتنا';
  @Input() subtitle = 'نقدم مجموعة شاملة من الخدمات التقنية المتكاملة';
  @Input() showAll = false;
}

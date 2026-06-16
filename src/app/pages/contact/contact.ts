import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  };

  submitted = false;

  services = [
    'تطوير البرمجيات المؤسسية',
    'التحول الرقمي',
    'الحلول السحابية',
    'البيانات والتحليلات',
    'الأمن السيبراني',
    'استشارات ERP',
    'أخرى'
  ];

  onSubmit(): void {
    this.submitted = true;
    // TODO: connect to backend API
  }
}

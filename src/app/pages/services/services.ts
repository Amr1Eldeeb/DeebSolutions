import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCardsComponent } from '../../components/service-cards/service-cards';
import { ServicesDataService } from '../../services/services-data.service';
import { Service } from '../../models/content.models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ServiceCardsComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent implements OnInit {
  private svc = inject(ServicesDataService);
  services: Service[] = [];

  ngOnInit(): void {
    this.services = this.svc.getAll();
  }
}

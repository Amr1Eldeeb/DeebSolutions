import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class PortfolioComponent {}

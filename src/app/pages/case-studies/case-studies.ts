import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.scss'
})
export class CaseStudiesComponent {}

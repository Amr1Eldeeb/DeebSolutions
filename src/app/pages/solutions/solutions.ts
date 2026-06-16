import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class SolutionsComponent {}

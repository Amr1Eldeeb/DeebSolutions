import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './careers.html',
  styleUrl: './careers.scss'
})
export class CareersComponent {}

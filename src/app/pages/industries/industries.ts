import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './industries.html',
  styleUrl: './industries.scss'
})
export class IndustriesComponent {}

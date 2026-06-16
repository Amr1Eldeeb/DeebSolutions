import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './resources.html',
  styleUrl: './resources.scss'
})
export class ResourcesComponent {}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.scss'
})
export class CtaSectionComponent {}

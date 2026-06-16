import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaSectionComponent } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CtaSectionComponent],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {}
